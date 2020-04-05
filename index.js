
Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "locale": "es",
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
         "default": "<P>This self-assessment form suggests further steps depending on your level of risk of exposure to COVID-19 (Novel Coronavirus).</p><p>You can complete this form for yourself or others who are not able.</P>\n<p>\n<a id=\"changeLanguageAnchor\" href=\"javascript:toggleLanguage();\">हिंदी<a/>\n</p>",
         "es": "<P>यह स्व-निर्धारण प्रपत्र COVID-19 (नोवेल कोरोनावायरस) संक्रमण के जोखिम के आपके स्तर के आधार पर आगे के चरणों का सुझाव देता है।</p><p>आप इस प्रपत्र को अपने या अन्य लोगों के लिए पूरा कर सकते हैं जो सक्षम नहीं हैं।</P>\n<p>\n<a id=\"changeLanguageAnchor\" href=\"javascript:toggleLanguage();\">English<a/>\n</p>"
        }
       }
      ]
     },
     {
      "name": "Page 1",
      "elements": [
       {
        "type": "html",
        "name": "Q1",
        "html": {
         "default": "Are you experiencing any of the following symptoms:<ul><li>\nDifficulty in breathing, such as:<ul><li>gasping for air while talking</li><li>shortness of breath at rest</li><li>difficulty in breathing after lying down</li></ul></li><li>Chest pain</li><li> Difficulty in waking up</li> <li>Fainting, or losing consciousness </li><li>Difficulty in performing daily routine</li><li>Increased symptoms of existing respiratory illness</li></ul>",
         "es": "क्या आप निम्नलिखित लक्षणों में से किसी का अनुभव कर रहे हैं:<ul><li>\nसाँस लेने में कठिनाई, जैसे:<ul><li>बात करते समय हवा के लिए हांफना</li><li>बिना किसी हलचल के भी\nसांस फूलना</li><li>लेटने के बाद सांस लेने में कठिनाई</li></ul></li><li>छाती में दर्द</li><li>नींद से जागने में कठिनाई</li><li>बेहोशी, या होश खो देना</li><li>दैनिक दिनचर्या करने में कठिनाई</li><li>मौजूदा श्वसन बीमारी के बढ़ते लक्षण</li><ul>"
        }
       },
       {
        "type": "radiogroup",
        "name": "A1",
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
          "value": "item1",
          "text": {
           "default": "Yes",
           "es": "हाँ"
          }
         },
         {
          "value": "item2",
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
         "default": "Are you experiencing any of the following symptoms:\n<ul>\n<li>\nFever\n</li><li>Cough\n</li><li>Shortness of breath\n</li><li>Sore throat\n</li><li>Muscle aches\n</li><li>Cold, Runny nose</li>\n</ul>",
         "es": "क्या आप निम्नलिखित लक्षणों में से किसी का अनुभव कर रहे हैं:\n<ul>\n<li>\nबुखार\n</li><li>खांसी\n</li><li>सांस लेने में दिक्कत\n</li><li>गले में खराश\n</li><li>मांसपेशियों में दर्द\n</li><li>सर्दी, बहती नाक</li>\n</ul>"
        }
       },
       {
        "type": "radiogroup",
        "name": "A2",
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
          "value": "item1",
          "text": {
           "default": "Yes",
           "es": "हाँ"
          }
         },
         {
          "value": "item2",
          "text": {
           "default": "No",
           "es": "नहीं"
          }
         }
        ]
       }
      ],
      "visible": false,
      "visibleIf": "{A1} = 'item2'"
     },
     {
      "name": "Page 3",
      "elements": [
       {
        "type": "html",
        "name": "Q3",
        "html": {
         "default": "Have you come in close contact with people who are:\n<ul><li>infected with COVID-19</li> <li>getting tested for COVID-19</li> <li>symptomatic and have traveled </li><li>\nin contact with biological laboratory material</li><li>\nproviding care to infected people, including family members, caretakers, and health workers who have not used protective equipment</li></ul>",
         "es": "क्या आप ऐसे लोगों के निकट संपर्क में आए हैं, जो:\n<ul><li>COVID-19 से संक्रमित है</li><li>\nCOVID-19 के लिए जांच की जा रही है</li><li>\nरोगसूचक है और यात्रा की है</li><li>\nजैविक प्रयोगशाला सामग्री के संपर्क में है</li><li>\nCOVID -19 संक्रमित लोगों को देखभाल प्रदान की, जिनमें परिवार के सदस्य, देखभाल करने वाले और स्वास्थ्य कार्यकर्ता शामिल हैं, जिन्होंने सुरक्षात्मक उपकरण का उपयोग नहीं किया है"
        }
       },
       {
        "type": "radiogroup",
        "name": "A3",
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
          "value": "item1",
          "text": {
           "default": "Yes",
           "es": "हाँ"
          }
         },
         {
          "value": "item2",
          "text": {
           "default": "No",
           "es": "नहीं"
          }
         }
        ]
       }
      ],
      "visible": false,
      "visibleIf": "{A1} = 'item2'"
     },
     {
      "name": "Page 4",
      "elements": [
       {
        "type": "html",
        "name": "Q4",
        "html": {
         "default": "In the last 30 days have you been outside of the country or your state, or attended any social gatherings, or visited crowded public places?",
         "es": "पिछले 30 दिनों में आप देश या अपने राज्य से बाहर रहे हैं, या किसी भी सामाजिक समारोहों में भाग लिया है, या भीड़भाड़ वाले सार्वजनिक स्थानों का दौरा किया है?"
        }
       },
       {
        "type": "radiogroup",
        "name": "A4",
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
          "value": "item1",
          "text": {
           "default": "Yes",
           "es": "हाँ"
          }
         },
         {
          "value": "item2",
          "text": {
           "default": "No",
           "es": "नहीं"
          }
         }
        ]
       }
      ],
      "visible": false,
      "visibleIf": "{A1} = 'item2'"
     },
     {
      "name": "Low Risk",
      "elements": [
       {
        "type": "html",
        "name": "R1",
        "html": {
         "default": "<h1 style=\"color:lightgreen;\">Low Risk</h1>\n<p><strong><ul><li>You have low risk of COVID-19 infection</li><li>Follow social isolation & suggested measures</li><li>Do self assessment again after 7 days</li></ul></strong></p>\n<p>\nDial the national helpline number below if your risk level changes.\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<p>For more information on COVID-19, please visit the website of <a href=\"www.mohfw.gov.in\">Ministry of Health & Family Welfare</a>.</p>",
         "es": "<h1 style=\"color:lightgreen;\">कम जोखिम </h1>\n<p><strong><ul><li>\nसामाजिक अलगाव और सुझाए गए उपायों का पालन करें</li><li>7 दिनों के बाद फिर से स्व-निर्धारण करें</li></ul></strong></p>\n<P>\nयदि आपका जोखिम स्तर बदलता है तो नीचे दिए गए राष्ट्रीय सहायता क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"www.mohfw.gov.in\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
        }
       }
      ],
      "visible": false,
      "visibleIf": "{A1} = 'item2' and {A2} = 'item2' and {A3} = 'item2' and {A4} = 'item2'"
     },
     {
      "name": "Medium Risk",
      "elements": [
       {
        "type": "html",
        "name": "R2",
        "html": {
         "default": "<h1 style=\"color:skyblue;\">Medium Risk</h1>\n<p><strong><ul><li>You have moderate risk of COVID-19 infection</li><li>Immediately isolate yourself to avoid infecting others for 7 days</li><li>It is NOT necessary for you to get tested for COVID-19 </li><li>Take the self assessment again after 7 days</li></ul></strong></p>\n<p>\nDial the national helpline number given below if your risk level changes.\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<p>For more information on COVID-19, please visit the website of <a href=\"www.mohfw.gov.in\">Ministry of Health & Family Welfare</a>.</p>",
         "es": "<h1 style=\"color:skyblue;\">मध्यम जोखिम </h1>\n<p><strong><ul><li>दूसरे लोगों को संक्रमित करने से बचने के लिए तुरंत 7 दिनों के लिए खुद को अलग कर लें</li><li>COVID-19 का परीक्षण करवाना आपके लिए आवश्यक नहीं है</li><li>7 दिनों के बाद फिर से स्व-निर्धारण करें</li></ul></strong></p>\n<P>\nयदि आपका जोखिम स्तर बदलता है तो नीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"www.mohfw.gov.in\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
        }
       }
      ],
      "visible": false,
      "visibleIf": "{A1} = 'item2' and {A2} = 'item2' and {A3} = 'item2' and {A4} = 'item1' or {A1} = 'item2' and {A2} = 'item1' and {A3} = 'item2' and {A4} = 'item2'"
     },
     {
      "name": "High Risk",
      "elements": [
       {
        "type": "html",
        "name": "R5",
        "html": {
         "default": "<h1 style=\"color:orange;\">High Risk</h1>\n<p><strong><ul><li>You have higher risk of COVID-19 infection</li><li>Immediately isolate yourself to avoid infecting others</li><li>It is necessary for you to get tested for COVID-19</li></ul></strong></p>\n<p>\nDial the national helpline number given below immediately.\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<p>For more information on COVID-19, please visit the website of <a href=\"www.mohfw.gov.in\">Ministry of Health & Family Welfare</a>.</p>",
         "es": "<h1 style=\"color:orange;\">उच्च जोखिम</h1>\n<p><strong><ul><li>दूसरे लोगों को संक्रमित करने से बचने के लिए तुरंत खुद को अलग कर लें</li><li>COVID-19 का परीक्षण करवाना आपके लिए आवश्यक है</li></ul></strong></p>\n<P>\nनीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"www.mohfw.gov.in\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
        }
       }
      ],
      "visible": false,
      "visibleIf": "{A1} = 'item2' and {A2} = 'item2' and {A3} = 'item1' or {A1} = 'item2' and {A2} = 'item1' and {A3} = 'item2' and {A4} = 'item1' or {A1} = 'item2' and {A2} = 'item1' and {A3} = 'item1'"
     },
     {
      "name": "Emergency",
      "elements": [
       {
        "type": "html",
        "name": "R4",
        "html": {
         "default": "<h1 style = \"color: red;\">Seek Urgent Help</h1>\n<strong><p>Dial the national helpline number given below immediately.</strong>\n<ul><li>+91-11-23978046</li><li>1075</li> </ul>\n<p>For more information about COVID-19, please visit the website of the <a href=\"www.mohfw.gov.in\"> Ministry of Health and Family Welfare</a>.</p>",
         "es": "<h1 style=\"color:red;\">तत्काल मदद लें</h1>\n<p><strong>नीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।</strong>\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"www.mohfw.gov.in\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p>"
        }
       }
      ],
      "visible": false,
      "visibleIf": "{A1} = 'item1'"
     }
    ],
    "showPageTitles": false,
    "showQuestionNumbers": "off",
    "startSurveyText": {
     "default": "Start",
     "es": "शुरू"
    },
    "pagePrevText": {
     "default": "Prev",
     "es": "पीछे"
    },
    "pageNextText": {
     "es": "आगे",
     "default": "Next"
    },
    "completeText": {
     "default": "Finish",
     "es": "समाप्त"
    },
    "requiredText": ""
   };

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({ model: survey });

function toggleLanguage() {
    var cVal = $('#changeLanguageAnchor').text() === "English" ? "हिंदी" : "English";
    survey.locale = cVal === "हिंदी" ? 'en' : 'es';

    survey.clear();
    survey.render();
    $('#changeLanguageAnchor').text(cVal);
}