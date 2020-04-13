const html5QrCode = new Html5Qrcode("scanner");
var constraints = { video: { facingMode: "environment" }, audio: false };

document.getElementById('stopScanning').addEventListener('click', function () {
    console.log('Stopping');
    html5QrCode.stop().then(ignore => {
        $("#startScanning").prop("disabled", false);
        $("#stopScanning").prop("disabled", true);
        $("#sendOtp").prop("disabled", true);
        $("#scannedData").html("");
    }).catch(err => {
        console.log(err);
    });
});
document.getElementById('startScanning').addEventListener('click', function () {
    console.log('Starting');
    Html5Qrcode.getCameras().then(cameras => {
        if (cameras.length == 0) {
            $("#startScanning").prop("disabled", false);
            $("#stopScanning").prop("disabled", true);
            $("#sendOtp").prop("disabled", true);
            $("#scannedData").html("");
            return;
        }
        html5QrCode.start(
            cameras[0].id,
            { fps: 10, qrbox: 250 },
            function (message) {
                $("#startScanning").prop("disabled", true);
                $("#stopScanning").prop("disabled", false);
                $("#sendOtp").prop("disabled", true);

                jsonData = JSON.parse(message);

                var html = "";
                $.each(jsonData, function (index, item) {
                    console.log(item);
                    html += "<div>" + item + "</div>";
                });
                $("#scannedData").append(html);
            },
            function (message) {
                console.log(message);
            })
            .catch(function (message) {
                console.log(message);
            });
    });
});