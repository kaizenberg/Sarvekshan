let currentUserId;
var lastPeerId = null;
var peer = null; // Own peer object
var peerId = null;
var conn = null;

function onQRCodeScanned(scannedText) {
    $("#scannedData").html("");
    var html = "";
    try {
        jQuery.each(JSON.parse(scannedText), function (name, val) {
            if (name === "Device ID") currentUserId = val;
            html += "<div>" + name + ": " + val + "</div>";
        });
        $("#scannedData").append(html);
    }
    catch (ex) {
        console.log("Scanned data is erroneous", ex);
    }
}

function provideVideo() {
    var n = navigator;

    if (n.mediaDevices && n.mediaDevices.getUserMedia) {
        return n.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
            },
            audio: false
        });
    }

    return Promise.reject('Your browser does not support getUserMedia');
}

function provideVideoQQ() {
    return navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            var exCameras = [];
            devices.forEach(function (device) {
                if (device.kind === 'videoinput') {
                    exCameras.push(device.deviceId)
                }
            });

            return Promise.resolve(exCameras);
        }).then(function (ids) {
            if (ids.length === 0) {
                return Promise.reject('Could not find a webcam');
            }

            return navigator.mediaDevices.getUserMedia({
                video: {
                    'optional': [{
                        'sourceId': ids.length === 1 ? ids[0] : ids[1]//this way QQ browser opens the rear camera
                    }]
                }
            });
        });
}

function JsQRScannerReady() {
    //create a new scanner passing to it a callback function that will be invoked when
    //the scanner succesfully scan a QR code
    var jbScanner = new JsQRScanner(onQRCodeScanned);
    //var jbScanner = new JsQRScanner(onQRCodeScanned, provideVideo);
    //reduce the size of analyzed image to increase performance on mobile devices
    jbScanner.setSnapImageMaxSize(300);
    var scannerParentElement = document.getElementById("scanner");
    if (scannerParentElement) {
        //append the jbScanner to an existing DOM element
        jbScanner.appendTo(scannerParentElement);
    }
}

document.getElementById('eVerify').addEventListener('click', function () {
    if (currentUserId === null) return;

    function join() {
        // Close old connection
        if (conn) {
            conn.close();
        }

        // Create connection to destination peer specified in the input field
        conn = peer.connect(recvIdInput.value, {
            reliable: true
        });

        conn.on('open', function () {
            status.innerHTML = "Connected to: " + conn.peer;
            console.log("Connected to: " + conn.peer);

            // Check URL params for comamnds that should be sent immediately
            var command = getUrlParam("command");
            if (command)
                conn.send(command);
        });
        // Handle incoming data (messages only since this is the signal sender)
        conn.on('data', function (data) {
            addMessage("<span class=\"peerMsg\">Peer:</span> " + data);
        });
        conn.on('close', function () {
            status.innerHTML = "Connection closed";
        });
    };

    /**
     * Get first "GET style" parameter from href.
     * This enables delivering an initial command upon page load.
     *
     * Would have been easier to use location.hash.
     */
    function getUrlParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return null;
        else
            return results[1];
    };

    //Generate TOTP
    var totp = new jsOTP.totp();
    var timeCode = totp.getOtp(60, 8);
    console.log(timeCode);
    console.log(totp.getOtp(60, 8));

    //Open WebRTC Connection
    var peer = new Peer();
    var conn = peer.connect(currentUserId);

    conn.on('open', function () {
        // here you have conn.id
        conn.send(timeCode);
    });

    peer.on('connection', function (conn) {
        conn.on('data', function (data) {
            conn.close();
            totp.timeCode(60, 8) === data;
        });
    });

    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(myUniqueId);

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        console.log('ID: ' + peer.id);
    });

    peer.on('connection', function (c) {
        // Allow only a single connection
        if (conn) {
            c.on('open', function () {
                c.send("Already connected to another client");
                setTimeout(function () { c.close(); }, 500);
            });
            return;
        }

        conn = c;
        console.log("Connected to: " + conn.peer);
        ready();
    });

    peer.on('disconnected', function () {
        console.log('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });

    peer.on('close', function () {
        conn = null;
        console.log('Connection destroyed');
    });

    peer.on('error', function (err) {
        console.log(err);
        alert('' + err);
    });
});