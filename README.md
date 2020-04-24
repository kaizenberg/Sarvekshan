# Sarvekshan #

This app is a **PoC** for demonstrating how governments around the world can take systematic exit from lock-down by issuing **ePasses** to those who are not infected, or clinically proven **COVID-19 Negative** by authorized test labs, & are at lowest risk of contracting infection.

**Goals**

- Enable government to track movement of such individuals without compromising their **privacy** & **safety** in public
- Contact-tracing by back-tracking rather than invasive continuous monitoring 
- Integrate all useful government & 3rd-party resources pertaining to COVID-19
- Promote delivery of information through online survey to increase reach & feedback
- Assist in issuing ePasses to those without smartphones as well
- Persuade people to get lab tested to avail relief from lockdown restrictions
- Allow essential-services/health/supply-chain workers resume their services without facing challenges
- Help unoganized sector & daily-wagers obtain temporary identity to avail relief packages

I built this app within 20 days without spending a dime, using mostly open-source technologies, & without deploying any infrastructure. I wish this reaches the government & they refer this to build better solutions or enhance existing Arogya Setu app.

![Demo](https://github.com/kaizenberg/Sarvekshan/blob/master/assets/img/demo.gif)

## Demo ##

**Generating ePass**
1. Launch the app in the browser
2. Click on (Blue) Generate ePass button
3. Answer Self-Assessment questions
4. Provide contact details
5. Send answers & contact details to Government's WhatsApp Number
6. Or email to Government's Email address
7. Or just call on Government's Helpline numbers
8. Access helpful information & free services

**Verifying ePass**
1. Launch the app in the browser
2. Click on (Red) Verify ePass button
3. Grant access to your location & device camera
4. Ask the visitor to show you his QR code
5. Scan the QR code (Invalid QR Code will be rejected immediately)
6. Click on eVerify button to verify it

**Loading ePass file from backup**
1. Launch the app in the browser
2. Click on (Green) Upload ePass button
3. Click on Browse button
4. Search for saved ePass on your device
5. Click on Open button

## FAQ ##

**Who can use this app?**
- Anybody with a smart phone & internet connectivity can access this app
- No need to download or install the app on your smart phone
- No need to turn Bluetooth or location services ON continuously

**What do I need to do?**
- Open the app in the browser of your smart phone
- Click on Generate ePass (Blue) button
- Take an online self-screening/assessment test to identify your level of risk of exposure to COVID-19 infection
- Based on your answers the app will issue a colored QR Code. Color indicates your risk-level
    - Green for Low Risk
    - Blue for Medium Risk
    - Orange for High Risk
    - Red for Emergency
- The app also suggests further steps based on your answers, for e.g. it suggests if it is mandatory for you to get a lab test done for COVID-19 infection
    - It helps you find nearest ICMR approved test centers
    - It helps you view your travel history since January of this year if you have a Google account
- If you wish to seek immediate help then you can provide your contact details & follow on-screen instruction to seamlessly forward your assessment answers & contact information to Government's WhatsApp helpline or Email address with one click
- You can also avail free online consultation provided by 3rd party online aggregators / service providers

**What's the purpose of the QR Code?**
- You can use this QR code as an ePass to get exception from lock-down restrictions
- Only Green colored QR Codes are allowed entry at public places
- QR code is valid for only 7 days from the day it was generated
- Security or administration personnel of public places like malls, IT parks, factories, farmers markets, etc will ask for the QR Code
- They will scan & verify if the QR code really belongs to you
- Each scan creates a record of your visit
- This information can be pushed to government's database for later tracking your movement
- In the worst-case-scenario if you are later found COVID-19 positive then it is possible for the government to identify which places you visited in the past 7 days which helps in finding people who may have been contracted

**What's in the QR Code?**
- QR Code is tightly associated with the device (PC or Smart Phone) that generated it
- It serves as a digital surrogate identity that allows concealing users actual sensitive information 
- If you lose the device then all QR Codes associated to it will become invalid. You will have to generate new code on another device

**But what if I lie in the self-assessment?**
- Green QR code can only be generated by those who are at low risk & have undergone ICMR Approved COVID-19 lab tests (Rapid Antibodies Test, Polymerase Chain Reaction, etc.) at authorized private or government labs only
- These labs will issue a unique number for each test they conduct which gets stored in government's database against patient's identity information such as Pan Card, Aadhaar Card, Driving License, Passport, etc.
- Enter that unique number while taking the self-screening/assessment & that will generate Green QR code

**How is my privacy protected?**
- This app runs completely off of user's browser once the page is loaded
- It doesn't store any information whatsoever as there is no backend or database for this app
- You receive a digital surrogate identity in the form of the QR code so your real identity is never used in the process
- QR Code does not store any health related or contact information of the user
- Those who scan your QR code do not recive your contact or health information
- Your location information in tracked indirectly and only if you visit public places

**Can somebody steal my QR Code & use it?**
- QR Code is just a unique identifier for the device that generated it
- If QR code is intentionally shared with others, stolen by others, or fabricated by over-smart user then during verification that will be caught
- If your device is damage or stolen then you will have to regenerate QR Code from a new device
- All previously registered devices will be blacklisted

[**Note:** All integrations with government's systems are currently not implemented as this is just a prototype of the proposed solution.]

## Technical Details ##

![Workflow](https://github.com/kaizenberg/Sarvekshan/blob/master/assets/img/workflow.gif)

This tool does not store or distribute any user private information as there is no backend for this application. Also, it doesn't collect any user information without the user's consent. It is built using only opensource technologies. Together this whole idea can be enhanced & improved to fit many other peer-to-peer authorization scenarios.

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

**Expectations from the Government**
- Expose API endpoint to allow JavaScript client's to perform UID authentication
    - Register user's device by issuing it a unique ID which acts as surrogate identity
- Expose API endpoint to POST a record of each visit/scan
- Expose API endpoint to GET list of containment zones with their color code/category

**TODO**
- [ ] Node.js package management
- [ ] Code Refactoring for latest ECMA Script
- [ ] Use WebPack for assets optimization (minify, combine, uglify, watch, cache bursting)
- [ ] reCaptcha/'I am not a robot' test (Optional)
- [ ] Link to user privacy statement if needed (Optional)
- [ ] Government UID Authentication (Currently not supported for non-native apps / JavaScript clients)
- [ ] Convert to SPA (Maybe Angular)

Truth Table for COVID-19 Assessment Logic (Not up to date)

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
