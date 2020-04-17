// Set constraints for the video stream
var constraints = {
    video: {
        facingMode: "environment",
        width: {
            ideal: 1280,
            max: 1920
        },
        height: {
            ideal: 720,
            max: 1080
        }
    },
    audio: false
};
let localMediaStream;
let currentUserId;

// Define constants
const cameraView = document.querySelector("#camera > video"),
    cameraOutput = document.querySelector("#camera > img"),
    cameraSensor = document.querySelector("#camera > canvas")

document.getElementById('stopScanning').addEventListener('click', function () {
    $("#statusMsg").text("Stopping...");

    $("#startScanning").prop("disabled", false);
    $("#stopScanning").prop("disabled", true);
    $("#eVerify").prop("disabled", true);
    $("#scannedData").html("");

    //stop the stream and cancel timeouts
    cameraView.pause();
    localMediaStream.getVideoTracks().forEach(function (videoTrack) {
        videoTrack.stop();
    });

    $("#statusMsg").text("Stopped!");
});

document.getElementById('startScanning').addEventListener('click', function () {
    $("#statusMsg").text("Scanning...");

    $("#startScanning").prop("disabled", true);
    $("#stopScanning").prop("disabled", false);
    $("#eVerify").prop("disabled", true);
    $("#scannedData").html("");

    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
            jsQR.track = stream.getTracks()[0];
            cameraView.srcObject = stream;
            localMediaStream = stream;
            cameraView.play();
        })
        .catch(function (error) {
            console.error("Oops. Something is broken.", error);
            $("#statusMsg").text("Error!");
        });
    start();
});

// Called after camera is setup
const start = () => {
    window.setInterval(scan, 0);
}

// Scans camera for QR code
const scan = () => {
    cameraSensor.width = cameraView.clientWidth;
    cameraSensor.height = cameraView.clientHeight;

    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.drawImage(cameraOutput, 0, 0);
    var imageData = ctx.getImageData(0, 0, cameraSensor.width, cameraSensor.height);

    const qrCode = jsQR(imageData.data, cameraSensor.width, cameraSensor.height);

    // If QR code is found
    if (qrCode != null) {
        cameraView.pause();
        $("#statusMsg").text("Detected!");

        $("#eVerify").prop("disabled", false);
        $("#scannedData").html("");
        var html = "";
        try {
            jQuery.each(JSON.parse(qrCode.data), function (name, val) {
                if (name === "Device ID") currentUserId = val;
                html += "<div>" + name + ": " + val + "</div>";
            });
        }
        catch (ex) {
            console.log("Scanned data is erroneous", ex);
        }

        $("#scannedData").append(html);
        $('#modalCenter').modal('show');
    }
}

$('#modalCenter').on('hidden.bs.modal', function (e) {
    cameraView.play();
    $("#statusMsg").text("Scanning...");
})

var lastPeerId = null;
var peer = null; // Own peer object
var peerId = null;
var conn = null;

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