var remoteDeviceId;
var ePassTimestamp;
var currentScannedText = "";

$('#scannedDataModel').on('hidden.bs.modal', function () {
    $("#scannedData").html("");
    $('.qrPreviewVideo')[0].play();
    remoteDeviceId = null;
});

function onQRCodeScanned(scannedText) {
    try {
        if (currentScannedText === scannedText) return;
        currentScannedText = scannedText;
        $("#scannedData").html("");
        $('.qrPreviewVideo')[0].pause();

        var html = "";
        var decompressed = LZString.decompress(scannedText);
        jQuery.each(JSON.parse(decompressed), function (name, val) {
            if (name === "Device Id") remoteDeviceId = val;
            //if (name === "Created On") ePassTimestamp = val.getTime();
            html += "<div>" + name + ": " + val + "</div>";
        });

        $("#scannedData").append(html);
        $('#scannedDataModel').modal('show');
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

$('#eVerify').click(function () {
    setTimeout(() => {
        join();
    }, 1000);
});

var lastPeerId = String(new ClientJS().getFingerprint());
var peer = null; // own peer object
var conn = null;

function initialize() {
    $('#statusMsg').text("Initializing...");
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(lastPeerId);

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        if (id === null) {
            $('#statusMsg').text("Error! Refresh the page.");
            return;
        }
        console.log('ID: ' + peer.id);
        $('#statusMsg').text("Online!");
    });
    peer.on('disconnected', function () {
        $('#statusMsg').text("Offline! Retrying...");
        console.log('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });
    peer.on('close', function () {
        conn = null;
        console.log('Connection destroyed');
        $('#statusMsg').text("Offline! Refresh the page.");
    });
    peer.on('error', function (err) {
        console.log(err);
        $('#statusMsg').text("Error! Refresh the page.");
    });
};
function join() {
    $('#statusMsg').text("eVerification started...");

    //if (ePassTimestamp < new Date().getTime() - (7 * 24 * 60 * 60 * 1000)) {
    //    $('#statusMsg').text("ePass Expired!");
    //    setTimeout(() => {
    //        $('#statusMsg').text("Online!");
    //    }, 2000);
    //    return;
    //}

    // Close old connection
    if (conn) {
        conn.close();
    }

    // Create connection to destination peer specified in the input field
    conn = peer.connect(String(remoteDeviceId), {
        reliable: true
    });

    conn.on('open', function () {
        console.log("Connected to: " + conn.peer);

        setTimeout(() => {
            if (conn && conn.open) {
                var totp = new jsOTP.totp();
                var timeCode = totp.getOtp(60, 8);
                conn.send(String(timeCode));
                console.log("Sent: " + timeCode);
                $('#statusMsg').text("Request Sent");
            } else {
                console.log('Connection is closed');
                $('#statusMsg').text("Error! Retry eVerification.");
            }
        }, 1000);
    });
    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        var totp = new jsOTP.totp();
        var timeCode = totp.getOtp(60, 8);
        if (data === timeCode)
            $('#statusMsg').text("ePass Approved!");
        else
            $('#statusMsg').text("ePass Rejected!");

        console.log("Received: " + data);
    });
    conn.on('close', function () {
        console.log("Connection closed");
        $('#statusMsg').text("Online!");
    });
};

initialize();