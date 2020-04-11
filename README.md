# Sarvekshan

A simple little application but built in a week for a noble purpose.

This application is only for the citizen's of India to take self-assessment in English or Hindi language to identify their level of risk of exposure to COVID-19/Novel Coronavirus.

It does not collect, store, or distribute any user private information as there is no backend for this application.

It uses only open source tools & libraries because there is no money. :)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Survey.js Library](https://surveyjs.io/Overview/Library)
- [WhatsApp Click to Chat](https://faq.whatsapp.com/en/android/26000030/)
- [GitHub Pages](https://pages.github.com/)
- [JQuery](https://jquery.com/download/)
- [HTML5 Geolocation](https://www.w3schools.com/html/html5_geolocation.asp)
- [HTML5 Download Attribute](https://www.w3schools.com/tags/att_a_download.asp)
- [Velocity.js Animations](http://velocityjs.org/)
- [Dynamic QR Code](https://larsjung.de/kjua/)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Penetration Testing/Vulnerability Scanner](https://observatory.mozilla.org/)

TODO
- Node.js package management
- Code Refactoring for latest ECMA Script
- Use WebPack for assets optimization (minify, combine, uglify, watch, cache bursting)
- reCaptcha/'I am not a robot' test (Optional)
- Link to user privacy statement if needed (Optional)

Truth Table for COVID-19 Assessment Logic
|Severe Respiratory Symptoms|Flu Symptoms|Close Contact|Traveled|Low Risk|Medium Risk|High Risk|Emergency|
|-|-|-|-|-|-|-|-|
|y|-|-|-|-|-|-|y|
|n|y|y|-|-|-|y|-|
|n|y|n|y|-|-|y|-|
|n|y|n|n|-|y|-|-|
|n|n|y|-|-|-|y|-|
|n|n|n|y|-|y|-|-|
|n|n|n|n|y|-|-|-|

Assesment is created using [Survey.js Creator](https://surveyjs.io/create-survey)
