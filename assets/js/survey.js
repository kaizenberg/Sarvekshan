var json = {
    "locale": "es",
    "title": {
        "default": "COVID-19 Self Assessment",
        "es": "COVID-19 स्व-निर्धारण"
    },
    "completedHtml": {
        "default": "Thank You!",
        "es": "धन्यवाद!"
    },
    "pages": [
        {
            "name": "Disclaimer",
            "elements": [
                {
                    "type": "html",
                    "name": "Intro",
                    "html": {
                        "default": "<P>This self-assessment form suggests further steps depending on your level of risk of exposure to COVID-19 (Novel Coronavirus). You can complete this form for yourself or others who are not able.</P>\n<p><i><sup>Privacy Statement: This tool does not collect, store or distribute any sensitive information without user consent.</sup></i></p><p><sup><a id=\"toggleLanguageElement\" href=\"#\">हिंदी के लिए <a/></sup></p>",
                        "es": "<P>यह स्व-निर्धारण प्रपत्र COVID-19 (नोवेल कोरोनावायरस) संक्रमण के जोखिम के आपके स्तर के आधार पर आगे के चरणों का सुझाव देता है। आप इस प्रपत्र को अपने या अन्य लोगों के लिए पूरा कर सकते हैं जो सक्षम नहीं हैं।</P>\n<p><i><sup>गोपनीयता विवरण: यह उपकरण उपयोगकर्ता की सहमति के बिना किसी भी संवेदनशील जानकारी को इकट्ठा, संग्रहीत या वितरित नहीं करता है।<sup></i></p>\n<p>\n<sup><a id=\"toggleLanguageElement\" href=\"#\">For English</a><sup></p>"
                    }
                }
            ],
            "readOnly": true
        },
        {
            "name": "Hospitalization",
            "elements": [
                {
                    "type": "html",
                    "name": "HQ1",
                    "html": {
                        "default": "<p>Have you received any treatment in any  hospital in the past 7 days?</p>",
                        "es": "<p>क्या आपने पिछले 7 दिनों में किसी भी अस्पताल में कोई उपचार प्राप्त किया है?</p>"
                    }
                },
                {
                    "type": "radiogroup",
                    "name": "Discharged from Hospital",
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
            "visibleIf": "{Discharged from Hospital} = 'No'"
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
                        "default": "<p>In the last 30 days have you been outside of the country or your state, or attended any social gatherings, or visited crowded public places?</p>\n<p><a target=\"_blank\" href=\"https://www.google.com/maps/timeline?pli=1&pb=!1m2!3m1!1s2020\">View places that you have visited this year.</a></p>",
                        "es": "</p>पिछले 30 दिनों में आप देश या अपने राज्य से बाहर रहे हैं, या किसी भी सामाजिक समारोहों में भाग लिया है, या भीड़भाड़ वाले सार्वजनिक स्थानों का दौरा किया है?</p>\n<p><a target=\"_blank\" href=\"https://www.google.com/maps/timeline?pli=1&pb=!1m2!3m1!1s2020\">इस वर्ष आप जिन स्थानों पर गए हैं, उन्हें देखें।</a></p>"
                    }
                },
                {
                    "type": "radiogroup",
                    "name": "Traveled OR Attended Social Event",
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
                        "default": "<h2>Advice\n</h2><p>Your answers are stored in this QR Code. Click on it to download.</p>\n<a download href=\"#\" id=\"qrCodePlaceholder\"></a><p><strong><ul><li>You may be at Low Risk</li><li>Follow social isolation & suggested measures</li><li>Do self assessment again after 7 days</li></ul></strong></p><p>Dial the national helpline number below if your risk level changes.<ul><li>+91-11-23978046</li><li>1075</li><li>+91 90131 51515 (WhatsApp)</li></ul><p>For more information on COVID-19, please visit the website of <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\">Ministry of Health & Family Welfare</a>.</p><script>generateQrCode('green', 'Low');</script>",
                        "es": "<h2>सलाह</h2>\n<p>आपके उत्तर इस QR कोड में संग्रहीत हैं। डाउनलोड करने के लिए QR कोड पर क्लिक करें।</p>\n<a id=\"qrCodePlaceholder\" href=\"#\"></a>\n<p><strong><ul><li>आप कम जोखिम में हो सकते हैं</li><li>\nसामाजिक अलगाव और सुझाए गए उपायों का पालन करें</li><li>7 दिनों के बाद फिर से स्व-निर्धारण करें</li></ul></strong></p>\n<P>\nयदि आपका जोखिम स्तर बदलता है तो नीचे दिए गए राष्ट्रीय सहायता क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li><li>WhatsApp: +91 90131 51515</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p><script>generateQrCode('green', 'Low');</script>"
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
                        "default": "<h2>Advice\n</h2><p>Your answers are stored in this QR Code. Click on it to download.</p>\n<a download href=\"#\" id=\"qrCodePlaceholder\"></a>\n<p><strong><ul><li>You may be at Medium Risk</li><li>Isolate yourself for 7 days to avoid infecting others</li><li>It is NOT necessary for you to get tested for COVID-19</li><li>Take the self assessment again after 7 days</li></ul></strong></p>\n<p>\nDial the national helpline number given below if your risk level changes.\n<ul><li>+91-11-23978046</li><li>1075</li><li>+91 90131 51515 (WhatsApp)</li></ul>\n<p>For more information on COVID-19, please visit the website of <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\">Ministry of Health & Family Welfare</a>.</p><script>generateQrCode('blue', 'Medium');</script>",
                        "es": "<h2>सलाह</h2>\n<p>आपके उत्तर इस QR कोड में संग्रहीत हैं। डाउनलोड करने के लिए QR कोड पर क्लिक करें।</p>\n<a id=\"qrCodePlaceholder\" href=\"#\"></a>\n<p><strong><ul><li>आप मध्यम जोखिम में हो सकते हैं</li><li>दूसरे लोगों को संक्रमित करने से बचने के लिए 7 दिनों के लिए खुद को अलग कर लें</li><li>COVID-19 का परीक्षण करवाना आपके लिए आवश्यक नहीं है</li><li>7 दिनों के बाद फिर से स्व-निर्धारण करें</li></ul></strong></p>\n<P>\nयदि आपका जोखिम स्तर बदलता है तो नीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li><li>WhatsApp: +91 90131 51515</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p><script>generateQrCode('blue', 'Medium');</script>"
                    }
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'No' and {Close Contact With Infected} = 'No' and {Traveled OR Attended Social Event} = 'Yes' or {Severe Respiratory Condition} = 'No' and {Flu Symptoms} = 'Yes' and {Close Contact With Infected} = 'No' and {Traveled OR Attended Social Event} = 'No' or {Discharged from Hospital} = 'Yes'",
            "readOnly": true
        },
        {
            "name": "High Risk",
            "elements": [
                {
                    "type": "html",
                    "name": "R5",
                    "html": {
                        "default": "<h2>Advice\n</h2><p>Your answers are stored in this QR Code. Click on it to download.</p>\n<a download href=\"#\" id=\"qrCodePlaceholder\"></a>\n<p><strong><ul><li>You may be at High Risk</li><li>Immediately isolate yourself to avoid infecting others</li><li>It is necessary for you to get tested for COVID-19</li></ul></strong></p>\n<p>\nDial the national helpline number given below immediately.\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\nAdditionally you can;<ul><li>Find nearby <a id=\"findTestingCentersElement\" href=\"#\">Authorized Testing Centers</a>.</li>\n<li>Send your answers to <a id=\"launchWhatsAppElement\" href=\"#\">MyGov WhatsApp Helpline.</a></li></ul>\n<p>For more information on COVID-19, please visit the website of <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\">Ministry of Health & Family Welfare</a>.</p><script>generateQrCode('orange', 'High');</script>\n",
                        "es": "<h2>सलाह</h2>\n<p>आपके उत्तर इस QR कोड में संग्रहीत हैं। डाउनलोड करने के लिए QR कोड पर क्लिक करें।</p>\n<a id=\"qrCodePlaceholder\" href=\"#\"></a>\n<p><strong><ul><li>आप उच्च जोखिम में हो सकते हैं</li><li>दूसरे लोगों को संक्रमित करने से बचने के लिए तुरंत खुद को अलग कर लें</li><li>COVID-19 का परीक्षण करवाना आपके लिए आवश्यक है</li></ul></strong></p>\n<P>\nनीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।\n<ul><li>+91-11-23978046</li><li>1075</li></ul>इसके अलावा आप;<ul><li>नज़दीकी <a id=\"findTestingCentersElement\" href=\"#\">अधिकृत परिक्षण केंद्र</a> ढूंढ सकते है।</li><li>अपने जवाब <a id=\"launchWhatsAppElement\" href=\"#\">MyGov WhatsApp हेल्पलाइन</a> पर भेज सकते हैं।</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p><script>generateQrCode('orange', 'High');</script>"
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
                        "default": "<h2>Advice\n</h2><p>Your answers are stored in this QR Code. Click on it to download.</p>\n<p><a download href=\"#\" id=\"qrCodePlaceholder\"></a></p>\n<strong><p>Dial the national helpline number given below immediately.</p></strong>\n<ul><li>+91-11-23978046</li><li>1075</li></ul>\nAdditionally you can;<ul><li>Find nearby <a id=\"findTestingCentersElement\" href=\"#\">Authorized Testing Centers</a>.</li>\n<li>Send your answers to <a id=\"launchWhatsAppElement\" href=\"#\">MyGov WhatsApp Helpline.</a></li></ul>\n<p>For more information about COVID-19, please visit the website of the <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> Ministry of Health and Family Welfare</a>.</p><script>generateQrCode('red', 'Critical');</script>",
                        "es": "<h2>सलाह</h2>\n<p>आपके उत्तर इस QR कोड में संग्रहीत हैं। डाउनलोड करने के लिए QR कोड पर क्लिक करें।</p>\n<p><a id=\"qrCodePlaceholder\" href=\"#\"></a></p>\n<p><strong>नीचे दिए गए राष्ट्रीय सहायता दूरध्वनी क्रमांक पर तुरंत संपर्क करें।</strong>\n<ul><li>+91-11-23978046</li><li>1075</li></ul>इसके अलावा आप;<ul><li>नज़दीकी <a id=\"findTestingCentersElement\" href=\"#\">अधिकृत परिक्षण केंद्र</a> ढूंढ सकते है।</li><li>अपने जवाब <a id=\"launchWhatsAppElement\" href=\"#\">MyGov WhatsApp हेल्पलाइन</a> पर भेज सकते हैं।</li></ul>\n<p>COVID-19 के बारे में अधिक जानकारी के लिए, कृपया <a href=\"https://www.mohfw.gov.in/\" target=\"_blank\"> स्वास्थ्य और परिवार कल्याण मंत्रालय</a> की वेबसाइट पर जाएँ।</p><script>generateQrCode('red', 'Critical');</script>"
                    }
                }
            ],
            "visible": false,
            "visibleIf": "{Severe Respiratory Condition} = 'Yes' or {Tested for COVID19} = 'Yes' and {Found COVID19 Positive} = 'Yes'",
            "readOnly": true
        },
        {
            "name": "More Information",
            "elements": [
                {
                    "type": "html",
                    "name": "OI",
                    "html": {
                        "default": "<h2>More Information</h2>\n<p>Free online medical consultation provided by private companies:<ul><li><a href=\"https://www.practo.com/consult/direct/new_consultation\" target=\"_blank\">Practo<a/></li><li><a href=\"https://www.lybrate.com/lp/questions/ask\" target=\"_blank\">Lybrate<a/></li><li><a href=\"https://www.1mg.com/online-doctor-consultation\" target=\"_blank\">1mg<a/></li></ul></p>\n<p>Containment Zones:<ul><li><a href=\"http://stopcoronavirus.mcgm.gov.in/insights-on-map\" target=\"_blank\">Municipal Corporation of Greater Mumbai</a></li></ul></p>Other Information:<ul><li><a id=\"findTestingCentersElement\" href=\"#\">Authorized Testing Centers</a></li></ul>",
                        "es": "<h2>अधिक जानकारी</h2>\n<p>निजी कंपनियों द्वारा दी जाने वाली मुफ्त ऑनलाइन चिकित्सा परामर्श:<ul><li><a href=\"https://www.practo.com/consult/direct/new_consultation\" target=\"_blank\">प्रैक्टो<a/></li><li><a href=\"https://www.lybrate.com/lp/questions/ask\" target=\"_blank\">लिब्रटे<a/></li><li><a href=\"https://www.1mg.com/online-doctor-consultation\" target=\"_blank\">1एमजी<a/></li></ul></p>\n<p>रोकथाम क्षेत्र:<ul><li><a href=\"http://stopcoronavirus.mcgm.gov.in/insights-on-map\" target=\"_blank\">बृहन्मुंबई महानगरपालिका</a></li></ul></p>\n<p>अन्य सूचना:<ul><li><a id=\"findTestingCentersElement\" href=\"#\">नज़दीकी अधिकृत परिक्षण केंद्र</a></li></ul></p>"
                    }
                }
            ],
            "readOnly": true
        }
    ],
    "showPageTitles": false,
    "showQuestionNumbers": "off",
    "goNextPageAutomatic": true,
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