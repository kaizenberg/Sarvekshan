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

        jQuery.each(JSON.parse(qrCode.data), function (name, val) {
            html += "<div>" + name + ": " + val + "</div>";
        });

        $("#scannedData").append(html);
        $('#modalCenter').modal('show');
    }
}

$('#modalCenter').on('hidden.bs.modal', function (e) {
    cameraView.play();
    $("#statusMsg").text("Scanning...");
})