# Sarvekshan
 
This tool is a PoC for showcasing how technology can be used to fight COVID-19 spread by identifying and tracking movement of people post lock-down without compromising safety & privacy. This should allow lifting of lock-down restrictons for at least people who are at lowest risk, perfectly healthy, & declared COVID-19 Negative. e-Passes can be issued to such people especially essential-services/health/supply-chain workers so that they can go out. With this proposed design; government can track movement of these unique but anonymous users without compromising their privacy & hence also ensuring their safety while they are outside. Idea is to help the country reboot its economical activities especially for MSMEs.

Please see view the demo & workflow animations below. Then, visit the app to test it. Please provide your comments or suggestions on how this can be enhanced or fixed. Such tools can built without making huge investments & spending months. It can be used by ay country.

How to use the app?
- Open the tool in your browser
- Click on Generate button to view the Self-Screening page
- After answering all questions, providing required details, & submitting the assessment you will get an ePass that will be valid for next 7 days. Click on it to download to your device as a backup. You can also print it if you cannot carry the device to public places that you plan to visit.
- Also, you can checkout more information based on current location. Avail free online services from 3rd party.
- At any time, you can go back to the home page to view all ePasses generated. You must carry this device or the printout to the place you are visiting. When requested show the ePass to the authority at public places.
- Authority at the place will open this app on their device & click Verify button to scan your ePass. Both devices will talk to each-other automatically without revealing any user sensitive information. If your ePass is approved then you should be allowed to enter. 
- Additionally, if you accidentally clear your browser's history & lose saved ePasses then you can click on Upload button to upload their backup copies from your device folders into the app again.

![Demo](https://github.com/kaizenberg/Sarvekshan/blob/master/assets/img/demo.gif)

How this design maybe better?
- This tool is simple & lightweight than Government of India's Arogya Setu App as it does not require installation of an App, Bluetooth Connectivity, Continuous Publishing of User's Location.
- Also, this tool doesn't store any user sensitive information as there is no backened of this application.
- Information is directly stored on user's device & user has the right to download or delete it from the device as well.
- This app shows how one-stop-shop technical solution are much better than many scattered resources that state & central governments are maintaining separately.
- Only those with Green ePasses are allowed to go back to work.
- In the worst-case-scenario if a visitor is later found COVID-19 positive then it is possible to identify which places he/she visited in past 7 days which helps in tracking others who may have been exposed to that person.

# Technical Details

- Each QR code is only valid for 7 days from the date of its generation.
- Identity of the user is associated with their device. If they lose the device their ePasses will be invalid & hence should be regenerated.
- Each ePass contains the unique Id of their device that generated it. If government wants they can integrate UID authentication with this app to enhance the uniqueness by issuing a unique token to augment device id.
- Each scan of ePass creates a record that contains visitor's device Id, scanner device Id, & date-time. This will serve as information of which places these anonymous users are visiting. This information is also stored on scanner device currently. Government can decide if they want to synchronize with their servers.

![Workflow](https://github.com/kaizenberg/Sarvekshan/blob/master/assets/img/workflow.gif)

Tool does not store, or distribute any user private information as there is no backend for this application. Also it doesn't collect any user information without their consent. The tool uses only opensource technologies & libraries. Together this whole idea can be enhanced & improved to fit many other peer-to-peer authorization scenarios.

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
