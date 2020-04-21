# Sarvekshan
 
This tool is a PoC for showcasing how technology can be used to fight COVID-19 spread by identifying and tracking movement of people post lock-down. This should allow lifting of lock-down restrictons for at least people who are at lowest risk, perfectly healthy, & tested-negative by issuing them e-passes. e-Passes can be issued to essential-services/health/supply-chain workers first. 

With this proposed soution; government can track movement of these unique but anonymous users without compromising their privacy & hence also ensuring their safety while being outside. See all screenshots below, go through the workflow diagram, visit the app and provide your comments or suggestions on how this can be enhanced or fixed.

How to use the app?

1. Open the tool in your browser
![Home Page](https://github.com/kaizenberg/Sarvekshan/blob/master/home.png)

2. Click on Generate button to view the Self-Screening page
![View Survey](https://github.com/kaizenberg/Sarvekshan/blob/master/generate.png)

3. Afer answering all questions, providing required details, & submitting the assessment you will get an ePass that will be valid for next 7 days. Click on it to download to your device as a backup. You can also print it if you cannot carry the device to public places that you plan to visit.
![Get ePass](https://github.com/kaizenberg/Sarvekshan/blob/master/result.png)

4. Also, you can checkout more information based on current location. Avail free online services from 3rd party.
![View Location-based Info](https://github.com/kaizenberg/Sarvekshan/blob/master/info.png)

5. Go back to home page to view all ePasses generated. You must carry this device or the printout to the place you are visiting. When requested view the ePass & show it to authority at the place.
![View ePass](https://github.com/kaizenberg/Sarvekshan/blob/master/view.png)

6. Authority at the place will open this same app on their device & click Verify button to scan your ePass. Both devices will talk to each-other automatically without revealing any user sensitive information. If ePass is approved you are allowed to enter. 
![Verify ePass](https://github.com/kaizenberg/Sarvekshan/blob/master/verify.png)

Additionally, if you accidentaly clear browser history you can click on Upload button to upload backed up copy of ePasses from your device into the app again.
![Upload ePass](https://github.com/kaizenberg/Sarvekshan/blob/master/upload.png)

How this design maybe better?
- This tool is more useful than Government of India's Arogya Setu App as it doesn't require installation of an App, Bluetooth Connectivity, Continuous Publishing of User's Location.
- Also, this tool doesn't store any user sensitive private information on any servers.
- Information is directly stored on user's device & user has the right to download or delete it from the device as well.
- This app shows how a one-stop-shop technical solution is more efficient than too many scattered resources that state & central governments are maintaining.
 
How it works?
- People declare their current health status by taking an online screening/assessment & generate an ePass/QR Code which can be stored on the device or printed on paper.
- Each QR code is only valid for 7 days from the date of its generation.
- They can carry that ePass to public places like malls, theater, offices, factories, etc.
- Admnistration/Security/Supervisors/Owners of that place can scan visitor ePasses using the same app to verify their authenticity by sending a web TOTP to the device that generated it.
- If the TOTP is verified a copy of the ePass is stored on device that scanned it to serve as a proof of the visit.
- This information can also be uploaded to government database as a virtual identity & location of visit or annoymous visitor.
- ePass should not be deleted from the device that generated it otherwise verification will fail. In such case administration is allowed to either gather visitor's contact details, other identify, or deny entry.
- Visitors with only Green colored QR code should be allowe to enter.

How it may help?
- This ensures only healthy people are allowed to visit their office or public places.
- This keeps user's information competely private only until his health status changes to Blue, Orange, or Red.
- So in the worse case scenario, if the visitor is later declared COVID-19 positive then it is possible to identify all the places & potentially infected people.
- If government can use this idea then they can also issue ePasses using their own virtual identity issuer especially if they only want to issue them to people who have undergone COVID-19 medical lab tests.

# Technical Details

Tool does not store, or distribute any user private information as there is no backend for this application. Also it doesn't collect any user information without their consent.

Following diagram shows how ePass generation & verification process can be implemented.
![Workflow Diagram](https://github.com/kaizenberg/Sarvekshan/blob/master/workflow.png)

The tool is using opensource dependencies. Together this whole idea can be enhanced & improved to fit many other peer-to-peer authorization scenarios.

List of open source tools & libraries.
- [Visual Studio Code](https://code.visualstudio.com/)
- [Survey.js Library](https://surveyjs.io/Overview/Library)
- [WhatsApp Click to Chat](https://faq.whatsapp.com/en/android/26000030/)
- [GitHub Pages](https://pages.github.com/)
- [JQuery](https://jquery.com/download/)
- [HTML5 Geolocation](https://www.w3schools.com/html/html5_geolocation.asp)
- [HTML5 Download Attribute](https://www.w3schools.com/tags/att_a_download.asp)
- [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
- [Velocity.js Animations](http://velocityjs.org/)
- [QR Code Generator](https://github.com/lifthrasiir/qr.js)
- [QR Code Scanner](https://github.com/robinsonmax/QR-Code-Scanner)
- [TOTP Generator](https://github.com/jiangts/JS-OTP)
- [WebRTC Peers](https://github.com/peers/peerjs)
- [Device Fingerprinting](https://github.com/jackspirou/clientjs)
- [Browser Storage](https://github.com/localForage/localForage)
- [String Compression](https://github.com/pieroxy/lz-string)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Penetration Testing/Vulnerability Scanner](https://observatory.mozilla.org/)

These dependencies may be replaced after Node.js refactoring.

TODO
- Node.js package management
- Code Refactoring for latest ECMA Script
- Use WebPack for assets optimization (minify, combine, uglify, watch, cache bursting)
- reCaptcha/'I am not a robot' test (Optional)
- Link to user privacy statement if needed (Optional)
- Government UID Authentication (Currently not supported for non-native apps / JavaScript clients)
- Convert to SPA (Maybe Angular)

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
