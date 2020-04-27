//------------Survey Configuration-------------

localforage.config({
    name: 'sarvekshan.epass.saved'
});

Survey
    .StylesManager
    .applyTheme("modern");

window.survey = new Survey.Model(json);

var doAnimantion = true;
var lati, longi;

//------------Survey Events-------------

function animate(animitionType, duration) {
    if (!duration)
        duration = 1000;
    var element = document.getElementById("surveyElement");
    $(element).velocity(animitionType, { duration: duration });
    activateHyperlinks();
}

survey
    .onCurrentPageChanging
    .add(function (sender, options) {
        if (!doAnimantion)
            return;
        options.allowChanging = false;
        setTimeout(function () {
            doAnimantion = false;
            sender.currentPage = options.newCurrentPage;
            doAnimantion = true;
        }, 500);
        animate("fadeOut", 500);
    });

survey
    .onCurrentPageChanged
    .add(function (sender) {
        animate("fadeIn", 500);
    });

//------------Survey Custom Events-------------

function launchWhatsApp() {
    var appendUrl = "*" + survey.title + "*%0D%0A" + getAssessmentResult();
    window.open('https://wa.me/919013151515?text=' + appendUrl);
};

function launchEmail() {
    $("#launchEmailElement").attr('href', `mailto:ncov2019@gov.in?subject=${survey.title}&body=${getAssessmentResult()}`);
};

function getAssessmentResult() {
    var appendUrl = "";
    survey.getAllQuestions().map(function (q) {
        if (q.isParentVisible && !q.parent.readOnly) {
            if (q.isAnswered) {
                appendUrl += q.fullTitle + ": " + q.questionValue + "%0D%0A";
            }
        }
    })

    return appendUrl;
}

function toggleLanguage() {
    survey.locale = survey.locale === 'es' ? 'en' : 'es';
    survey.clear();
    survey.render();
    activateHyperlinks();
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function findTestingCenters() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(openICMRWebsite, function (error) {
            console.log(error);
        }, options);
    } else {
        alert("Your location is not known or maps aren't working");
    }
}

function openICMRWebsite(position) {
    lati = position.coords.latitude;
    longi = position.coords.longitude;
    window.open(`https://covid.icmr.org.in/index.php#${lati}/${longi}/12`);
}

function generateQrCode(colorCode, riskLevel) {
    setTimeout(function () {
        // Disabling serialization of actual answers for privacy
        //var clone = JSON.parse(JSON.stringify(survey.data));
        var clone = {};
        var today = new Date();
        clone["Risk Level"] = riskLevel;
        clone["Created On"] = today;
        clone["Device Id"] = new ClientJS().getFingerprint(); // Auto-generated Device ID
        var userId = String(UUID.generate()); // Case ID issued by government
        clone["User Id"] = userId;

        var qrOptions = {
            ecclevel: 'H',
            fgColor: colorCode,
            bgColor: 'white',
            margin: 2
        };

        var compressed = LZString.compress(JSON.stringify(clone));

        var imgData = QRCode.generatePNG(compressed, qrOptions);

        //Here should be the code to save the data into your database
        localforage.setItem(userId, imgData).then(function (value) {
            // Do other things once the value has been saved.
            console.log(userId + " : Saved to local storage");
        }).catch(function (err) {
            // This code runs if there were any errors
            console.log(err);
        });

        $('#qrCodePlaceholder').append("<img src='" + imgData + "' height='250px' width='250px'/>");
        $('#qrCodePlaceholder').attr('href', imgData);
        $('#qrCodePlaceholder').attr('download', userId + '.png');
        $('#spinner').hide();
    }, 0);
}

function activateHyperlinks() {
    setTimeout(function () {
        var ele1 = document.getElementById("findTestingCentersElement");
        if (ele1)
            ele1.onclick = findTestingCenters;

        var ele2 = document.getElementById("launchWhatsAppElement");
        if (ele2)
            ele2.onclick = launchWhatsApp;

        var ele4 = document.getElementById("launchEmailElement");
        if (ele4)
            launchEmail();

        var ele3 = document.getElementById("toggleLanguageElement");
        if (ele3)
            ele3.onclick = toggleLanguage;
    }, 0);
}

//------------Survey Execution-------------

$("#surveyElement").Survey({ model: survey });

animate("fadeIn", 1000);