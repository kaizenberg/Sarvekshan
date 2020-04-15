# Sarvekshan
 
This web tool is currently a PoC for showcasing how technology can be used to fight COVID-19 spread by identifying and tracking movement of people post lock-down without compromising their privacy. This should allow lifting of lock down restrictons for people may not be infected, especially considering that 21 days of lockdown are already over.

How is this tool better?
- This tool is more useful than Government of India's Arogya Setu App. 
- This tool is integrated with many other government sources of information & online resources.
- User's dont' have to install any app or reveal their location continuously.
- It can allow users to receive services from private vendors without sharing their health information.
- Also, users can visit public places guarded by the government to only allow people who are not infected.
 
How it works?
- People declare their current status by taking an online screening & generate QR Code
- They can also use the tool to utilize government resources very quickly
-  They can use that QR Code to visit public places like malls, theater, offices, factories.
- Security or supervisors or owners of that place can scan visitor's QR Code & quickly verify their authenticity without asking for other private information.
- Visitors with only Green colored QR code are allowed to enter.
- A unique hash key code is stored on the device that scanned the visitor for each visit along with date time.
- This information can also be uploaded to government database. An integration is possible if Government can support the implementation.
- This ensures only non-infected people are allowed to visit.
- In the worse case scenario, if the visitor is later declared COVID-19 positive then it is possible to identify all the places that he has visited without compromising their identify and privacy. It will help the government to identify others who may have visited the place at the same time to undergo COVID-19 tests.

# Technical Details

Technical Details

It does not collect, store, or distribute any user private information as there is no backend for this application.
The tool is using advanced tech to do this and can be utilized in many other peer-to-peer authorization scenarios.
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
