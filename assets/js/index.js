var json = {
    "title": {
        "default": "COVID-19 Self Assessment",
        "es": "COVID-19 स्व-निर्धारण"
    },
    "completedHtml": {
        "default": "Thank you!",
        "es": "धन्यवाद!"
    },
    "loadingHtml": {
        "default": "Please wait",
        "es": "कृपया प्रतीक्षा कीजिये"
    },
    "pages": [
        {
            "name": "Information",
            "elements": [
                {
                    "type": "html",
                    "name": "Intro",
                    "html": {
                        "default": "<P>This self-assessment form suggests further steps depending on your level of risk of exposure to COVID-19 (Novel Coronavirus).</p><p>You can complete this form for yourself or others who are not able.</P>\n<a id=\"changeLanguageAnchor\" href=\"javascript:toggleLanguage();\">हिंदी<a/>",
                        "es": "<P>यह स्व-निर्धारण प्रपत्र COVID-19 (नोवेल कोरोनावायरस) संक्रमण के जोखिम के आपके स्तर के आधार पर आगे के चरणों का सुझाव देता है।</p><p>आप इस प्रपत्र को अपने या अन्य लोगों के लिए पूरा कर सकते हैं जो सक्षम नहीं हैं।</P>\n<a id=\"changeLanguageAnchor\" href=\"javascript:toggleLanguage();\">English</a>"
                    }
                }
            ],
            "readOnly": true
        },
        {
            "name": "Page 1",
            "elements": [
                {
                    "type": "html",
                    "name": "Q1",
                    "html": {
                        "default": "<p>Are you experiencing any of the following symptoms:</p><ul><li>Sudden difficulty in breathing, such as:<ul><li>gasping for air while talking</li><li>shortness of breath at rest</li><li>difficulty in breathing after lying down</li></ul></li><li>Chest pain</li><li>Difficulty in waking up</li><li>Fainting, or losing consciousness</li><li>Difficulty in performing daily routine</li><li>Increased symptoms of existing respiratory illness</li></ul>",
                        "es": "<p>क्या आप निम्नलिखित लक्षणों में से किसी का अनुभव कर रहे हैं:</p><ul><li>अचानक साँस लेने में कठिनाई, जैसे:<ul><li>बात करते समय हवा के लिए हांफना</li><li>बिना किसी हलचल के भी सांस फूलना</li><li>लेटने के बाद सांस लेने में कठिनाई</li></ul></li><li>छाती में दर्द</li><li>नींद से जागने में कठिनाई</li><li>बेहोशी, या होश खो देना</li><li>दैनिक दिनचर्या करने में कठिनाई</li><li>मौजूदा श्वसन बीमारी के बढ़ते लक्षण</li><ul>"
                    }
                },
                {
                    "type": "radiogroup",
                    "name": "Severe Respiratory Condition",
                    "title": {
                        "default": "Select your answer",
                        "es": "अपना जवाब चुनें"
                    },
                    "isRequired": true,
                    "requiredErrorText": {
                        "es": "एक विकल्प चुनें"
                    },
                    "titleLocation": "hidden",
                    "choices": [
                        {
                            "value": "Yes",
                            "text": {
                                "default": "Yes",
                                "es": "हाँ"
                            }
                        },
                        {
                            "value": "No",
                            "text": {
                                "default": "No",
                                "es": "नहीं"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "Page 2",
            "elements": [
                {
                    "type": "html",
                    "name": "Q2",
                    "html": {
                        "default": "<p>Are you experiencing any of the following symptoms:</p><ul><li>Fever\n</li><li>Cough</li><li>Shortness of breath</li><li>Sore throat</li><li>Muscle aches</li><li>Cold, Runny nose</li></ul>",
                        "es": "<p>क्या आप निम्नलिखित लक्षणों में से किसी का अनुभव कर रहे हैं:</p><ul><li>बुखार</li><li>खांसी</li><li>सांस लेने में दिक्कत</li><li>गले में खराश</li><li>मांसपेशियों में दर्द</li><li>सर्दी, बहती नाक</li></ul>"
                    }
                },
                {
                    "type": "radiogroup",
                    "name": "Flu Symptoms",
                    "title": {
                        "default": "Select your answer",
                        "es": "अपना जवाब चुनें"
                    },
                    "isRequired": true,
                    "requiredErrorText": {
                        "es": "एक विकल्प चुनें"
                    },
                    "titleLocation": "hidden",
                    "choices": [
                        {
                            "value": "Yes",
                            "text": {
                                "default": "Yes",
                                "es": "हाँ"
                            }
                        },
                        {
                            "value": "No",
                            "text": {
                                "default": "No",
                                "es": "नहीं"
                            }
                        }
                    ]
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'No'"
        },
        {
            "name": "Page 3",
            "elements": [
                {
                    "type": "html",
                    "name": "Q3",
                    "html": {
                        "default": "<p>Have you come in close contact with people who are:</p><ul><li>infected with COVID-19</li><li>getting tested for COVID-19</li><li>symptomatic and have traveled</li><li>in contact with biological laboratory material</li><li>\nproviding care to infected people, including family members, caretakers, and health workers who have not used protective equipment</li></ul>",
                        "es": "<p>क्या आप ऐसे लोगों के निकट संपर्क में आए हैं, जो:</p><ul><li>COVID-19 से संक्रमित है</li><li>COVID-19 के लिए जांच की जा रही है</li><li>रोगसूचक है और यात्रा की है</li><li>जैविक प्रयोगशाला सामग्री के संपर्क में है</li><li>COVID -19 संक्रमित लोगों को देखभाल प्रदान की, जिनमें परिवार के सदस्य, देखभाल करने वाले और स्वास्थ्य कार्यकर्ता शामिल हैं, जिन्होंने सुरक्षात्मक उपकरण का उपयोग नहीं किया है</li></ul>"
                    }
                },
                {
                    "type": "radiogroup",
                    "name": "Close Contact With Infected",
                    "title": {
                        "default": "Select your answer",
                        "es": "अपना जवाब चुनें"
                    },
                    "isRequired": true,
                    "requiredErrorText": {
                        "es": "एक विकल्प चुनें"
                    },
                    "titleLocation": "hidden",
                    "choices": [
                        {
                            "value": "Yes",
                            "text": {
                                "default": "Yes",
                                "es": "हाँ"
                            }
                        },
                        {
                            "value": "No",
                            "text": {
                                "default": "No",
                                "es": "नहीं"
                            }
                        }
                    ]
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'No'"
        },
        {
            "name": "Page 4",
            "elements": [
                {
                    "type": "html",
                    "name": "Q4",
                    "html": {
                        "default": "<p>In the last 30 days have you been outside of the country or your state, or attended any social gatherings, or visited crowded public places?</p>",
                        "es": "</p>पिछले 30 दिनों में आप देश या अपने राज्य से बाहर रहे हैं, या किसी भी सामाजिक समारोहों में भाग लिया है, या भीड़भाड़ वाले सार्वजनिक स्थानों का दौरा किया है?</p>"
                    }
                },
                {
                    "type": "radiogroup",
                    "name": "Traveled OR Attended Social Event",
                    "title": {
                        "default": "Select your answer",
                        "es": "अपना जवाब चुनें"
                    },
                    "isRequired": true,
                    "requiredErrorText": {
                        "es": "एक विकल्प चुनें"
                    },
                    "titleLocation": "hidden",
                    "choices": [
                        {
                            "value": "Yes",
                            "text": {
                                "default": "Yes",
                                "es": "हाँ"
                            }
                        },
                        {
                            "value": "No",
                            "text": {
                                "default": "No",
                                "es": "नहीं"
                            }
                        }
                    ]
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'No'"
        },
        {
            "name": "Low Risk",
            "elements": [
                {
                    "type": "html",
                    "name": "R1",
                    "html": {
                        "default": "<h1 style=\"color:lightgreen;\">Low Risk</h1>\n<p><strong><ul><li>You have low risk of COVID-19 infection</li><li>Follow social isolation & suggested measures</li><li>Do self assessment again after 7 days</li></ul></strong></p>\n<p>\nDial the national helpline number below if your risk level changes.\n<ul><li>+91-11-23978046</li><li>1075</li><li>+91 90131 51515 (WhatsApp)</li></ul>\n<p>For more information on COVID-19, please visit the website of <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\">Ministry of Health & Family Welfare</a>.</p>",
                        "es": "<h1 style=\"color:lightgreen;\">कम जोखिम </h1>\n<p><strong><ul><li>\nसामाजिक अलगाव और सुझाए गए उपायों का पालन करें</li><li>7 दिनों के बाद फिर से स्व-निर्धारण करें</li></ul></strong></p>\n<P>\nयदि आपका जोखिम स्तर बदलता है तो नीचे दिए गए राष्ट्रीय सहायता क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li><li>WhatsApp: +91 90131 51515</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
                    }
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'No' and {Close Contact With Infected} = 'No' and {Traveled OR Attended Social Event} = 'No'",
            "readOnly": true
        },
        {
            "name": "Medium Risk",
            "elements": [
                {
                    "type": "html",
                    "name": "R2",
                    "html": {
                        "default": "<h1 style=\"color:skyblue;\">Medium Risk</h1>\n<p><strong><ul><li>You have moderate risk of COVID-19 infection</li><li>Immediately isolate yourself to avoid infecting others for 7 days</li><li>It is NOT necessary for you to get tested for COVID-19</li><li>Take the self assessment again after 7 days</li></ul></strong></p>\n<p>\nDial the national helpline number given below if your risk level changes.\n<ul><li>+91-11-23978046</li><li>1075</li><li>+91 90131 51515 (WhatsApp)</li></ul>\n<a id=\"testingCentersMap\" href=\"javascript:getLocation();\">Find testing centers near you</a>\n<p>For more information on COVID-19, please visit the website of <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\">Ministry of Health & Family Welfare</a>.</p>",
                        "es": "<h1 style=\"color:skyblue;\">मध्यम जोखिम </h1>\n<p><strong><ul><li>दूसरे लोगों को संक्रमित करने से बचने के लिए तुरंत 7 दिनों के लिए खुद को अलग कर लें</li><li>COVID-19 का परीक्षण करवाना आपके लिए आवश्यक नहीं है</li><li>7 दिनों के बाद फिर से स्व-निर्धारण करें</li></ul></strong></p>\n<P>\nयदि आपका जोखिम स्तर बदलता है तो नीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li><li>WhatsApp: +91 90131 51515</li></ul>\n<a id=\"testingCentersMap\" href=\"javascript:getLocation();\">नज़दीकी परिक्षण केंद्र खोजें</a>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
                    }
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'No' and {Close Contact With Infected} = 'No' and {Traveled OR Attended Social Event} = 'Yes' or {Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'Yes' and {Close Contact With Infected} = 'No' and {Traveled OR Attended Social Event} = 'No'",
            "readOnly": true
        },
        {
            "name": "High Risk",
            "elements": [
                {
                    "type": "html",
                    "name": "R5",
                    "html": {
                        "default": "<h1 style=\"color:orange;\">High Risk</h1>\n<p><strong><ul><li>You have higher risk of COVID-19 infection</li><li>Immediately isolate yourself to avoid infecting others</li><li>It is necessary for you to get tested for COVID-19</li></ul></strong></p>\n<p>\nDial the national helpline number given below immediately.\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<a id=\"testingCentersMap\" href=\"javascript:getLocation();\">Find testing centers near you</a>\n<p>You can also send your answers to <a id=\"whatsAppLinkId\" href=\"javascript:openMyGovWhatsApp();\">MyGov WhatsApp Helpline.<img src=\"assets/img/whatsapp.png\"/></a></p>\n<p>For more information on COVID-19, please visit the website of <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\">Ministry of Health & Family Welfare</a>.</p>\n",
                        "es": "<h1 style=\"color:orange;\">उच्च जोखिम</h1>\n<p><strong><ul><li>दूसरे लोगों को संक्रमित करने से बचने के लिए तुरंत खुद को अलग कर लें</li><li>COVID-19 का परीक्षण करवाना आपके लिए आवश्यक है</li></ul></strong></p>\n<P>\nनीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li></ul><a id=\"testingCentersMap\" href=\"javascript:getLocation();\">नज़दीकी परिक्षण केंद्र खोजें</a>\n<p>आप अपने जवाब <a id=\"whatsAppLinkId\" href=\"javascript:openMyGovWhatsApp();\">MyGov WhatsApp हेल्पलाइन<img src=\"assets/img/whatsapp.png\"/></a> पर भी भेज सकते हैं।</p>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
                    }
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'No' and {Close Contact With Infected} = 'Yes' or {Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'Yes' and {Close Contact With Infected} = 'No' and {Traveled OR Attended Social Event} = 'Yes' or {Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'Yes' and {Close Contact With Infected} = 'Yes'",
            "readOnly": true
        },
        {
            "name": "Emergency",
            "elements": [
                {
                    "type": "html",
                    "name": "R4",
                    "html": {
                        "default": "<h1 style = \"color: red;\">Seek Urgent Help</h1>\n<strong><p>Dial the national helpline number given below immediately.</strong>\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<a id=\"testingCentersMap\" href=\"javascript:getLocation();\">Find testing centers near you</a>\n<p>You can also send your answers to <a id=\"whatsAppLinkId\" href=\"javascript:openMyGovWhatsApp();\">MyGov WhatsApp Helpline.<img src=\"assets/img/whatsapp.png\"/></a></p>\n<p>For more information about COVID-19, please visit the website of the <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> Ministry of Health and Family Welfare</a>.</p>",
                        "es": "<h1 style=\"color:red;\">तत्काल मदद लें</h1>\n<p><strong>नीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।</strong>\n<ul><li>+91-11-23978046</li><li>1075</li></ul><a id=\"testingCentersMap\" href=\"javascript:getLocation();\">नज़दीकी परिक्षण केंद्र खोजें</a><p>आप अपने जवाब <a id=\"whatsAppLinkId\" href=\"javascript:openMyGovWhatsApp();\">MyGov WhatsApp हेल्पलाइन<img src=\"assets/img/whatsapp.png\"/></a> पर भी भेज सकते हैं।</p>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
                    }
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'Yes'",
            "readOnly": true
        }
    ],
    "showPageTitles": false,
    "showQuestionNumbers": "off",
    "startSurveyText": {
        "default": "Start",
        "es": "शुरू करें"
    },
    "pagePrevText": {
        "default": "Previous",
        "es": "पीछे जाएं"
    },
    "pageNextText": {
        "es": "आगे बढ़ें",
        "default": "Next"
    },
    "completeText": {
        "default": "Finish",
        "es": "समाप्त करें"
    },
    "requiredText": ""
};

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