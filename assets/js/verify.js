$('#scannedDataModel').on('hidden.bs.modal', function () {
    $("#scannedData").html("");
    $('.qrPreviewVideo')[0].play();
})

function onQRCodeScanned(scannedText) {
    try {
        var html = "";
        jQuery.each(JSON.parse(scannedText), function (name, val) {
            if (name === "Device Id") remoteDeviceId = val;
            html += "<div>" + name + ": " + val + "</div>";
        });
        $("#scannedData").append(html);
        $('#scannedDataModel').modal('show');
        $('.qrPreviewVideo')[0].pause();
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


//--------------eVerification Logic----------------

let remoteDeviceId;
var lastPeerId = new ClientJS().getFingerprint();
var peer = null; // Own peer object
var peerId = null;
var conn = null;

function initialize() {
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(String(lastPeerId), {
        debug: 2
    });

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        console.log('Your Id: ' + peer.id);
    });

    peer.on('disconnected', function () {
        $('#statusMsg').text("Vertification problem. Retrying...");
        console.log('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });

    peer.on('close', function () {
        conn = null;
        $('#statusMsg').text("");
        console.log('Connection destroyed');
    });

    peer.on('error', function (err) {
        console.log(err);
        $('#statusMsg').text("Error! Refresh the page.");
    });
}

function verify(remoteAddress) {
    // Close old connection
    if (conn) {
        conn.close();
    }

    // Create connection to destination peer specified in the input field
    conn = peer.connect(remoteAddress, {
        reliable: true
    });

    conn.on('open', function () {
        console.log("Connected to: " + conn.peer);

        //Generate TOTP
        var totp = new jsOTP.totp();
        var timeCode = totp.getOtp(60, 8);
        console.log(timeCode);
        conn.send(timeCode);
        $('#statusMsg').text("ePass verification request sent. Don't close the window.");
    });

    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        if (totp.timeCode(60, 8) === data)
            alert("ePass verification succeeded!");
        else
            alert("ePass verfication failed!");
        conn.close();
    });

    conn.on('close', function () {
        $('#statusMsg').text("");
    });
};

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

$('#eVerify').click(function () {
    if (remoteDeviceId === null) return;

    $('#statusMsg').text("ePass verification starting...");
    initialize();
    verify(remoteDeviceId);
});