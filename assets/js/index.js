Survey
    .StylesManager
    .applyTheme("modern");

window.survey = new Survey.Model(json);

$("#surveyElement").Survey({ model: survey });

var lati, longi;

function openMyGovWhatsApp() {
    var appendUrl = "*" + survey.title + "*{#}{#}";
    survey.getAllQuestions().map(function (q) {
        if (q.isParentVisible && !q.parent.readOnly) {
            if (q.html !== undefined) {
                appendUrl += "Question: ";
                appendUrl += $('<div></div>').html(q.html.replace('</', '{#}</')).text() + "{#}"
            }
            if (q.isAnswered) {
                appendUrl += "Answer: *" + $('<div</div>').html(q.displayValue).text() + "*{#}{#}";
            }
        }
    })
    appendUrl = encodeURIComponent(appendUrl);
    appendUrl = appendUrl.replace(/%7B%23%7D/g, '%0A');
    window.open('https://wa.me/919013151515?text=' + appendUrl);
};

// Will refactor this logic later
function toggleLanguage() {
    survey.locale = survey.locale === 'es' ? 'en' : 'es';
    survey.clear();
    survey.render();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(openICMRWebsite);
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
    var clone = JSON.parse(JSON.stringify(survey.data));
    var today = new Date();
    clone.createdOn = today;
    clone.uid = "";
    var qrCodeImg = kjua({
        text: JSON.stringify(clone),
        fill: colorCode
    });
    // I don't know why JQuery version fails to render the image but plain old JavaScript does not
    document.getElementById("qrCodePlaceholder").appendChild(qrCodeImg);
    var placeHolderChild = $('#qrCodePlaceholder > img');
    $('#qrCodePlaceholder').attr('href', placeHolderChild.attr('src'));
    $('#qrCodePlaceholder').attr('download', today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear() + '.png');
}


function animate(animitionType, duration) {
    if (!duration) 
        duration = 1000;
    var element = document.getElementById("surveyElement");
    $(element).velocity(animitionType, {duration: duration});
}

var doAnimantion = true;
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
survey
    .onCompleting
    .add(function (sender, options) {
        if (!doAnimantion) 
            return;
        options.allowComplete = false;
        setTimeout(function () {
            doAnimantion = false;
            sender.doComplete();
            doAnimantion = true;
        }, 500);
        animate("fadeOut", 500);
    });
animate("fadeIn", 1000);
