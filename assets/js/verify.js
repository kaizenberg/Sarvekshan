$('#scannedDataModel').on('hidden.bs.modal', function () {
    $("#scannedData").html("");
    $('.qrPreviewVideo')[0].play();
})

var currentScannedText = "";

function onQRCodeScanned(scannedText) {
    try {
        if (currentScannedText === scannedText) return;
        currentScannedText = scannedText;
        $("#scannedData").html("");
        $('.qrPreviewVideo')[0].pause();
        var html = "";
        jQuery.each(JSON.parse(scannedText), function (name, val) {
            if (name === "Device Id") remoteDeviceId = val;
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


//--------------eVerification Logic----------------

let remoteDeviceId;
var lastPeerId = new ClientJS().getFingerprint();
var peer = null; // Own peer object
var conn = null;

function initialize() {
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(String(lastPeerId), {
        debug: 3
    });

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        if (peer.id === null) {
            $('#statusMsg').text("Error! Refresh the page!");
            return;
        }

        console.log('Your Id: ' + peer.id);
        $('#statusMsg').text("Start ePass verification!");
    });

    peer.on('disconnected', function () {
        $('#statusMsg').text("Connection problem. Retrying...");
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

        if (conn && conn.open) {
            //Generate TOTP
            var totp = new jsOTP.totp();
            var timeCode = totp.getOtp(60, 8);
            console.log(timeCode);
            conn.send(timeCode);

            $('#statusMsg').text("ePass verification request sent.");
        } else {
            console.log('Error! Refresh the page');
        }
    });

    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        if (data === totp.timeCode(60, 8))
            alert("ePass verification succeeded!");
        else
            alert("ePass verfication failed!");
        conn.close();
    });

    conn.on('close', function () {
        $('#statusMsg').text("");
    });
};

$('#scannedDataModel').on('shown.bs.modal', function () {
    $('#statusMsg').text("Initializing...");
    initialize();
})

$('#eVerify').click(function () {
    if (remoteDeviceId === null) return;
    verify(remoteDeviceId);
});