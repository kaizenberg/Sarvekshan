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