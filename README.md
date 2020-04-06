# Sarvekshan

A simple little application but built in a week for a noble purpose.

This application is only for the citizen's of India to take self-assessment in English or Hindi language to identify their level of risk of exposure to COVID-19/Novel Coronavirus.

It does not collect, store, or distribute any user private information witout the consent of the end-user. There is not backend of the application.

It uses only open source tools & libraries because there is no money. :)
- Visual Studio Code
- Survey.js Lirary
- Click to WhatsApp link
- GitHub Pages
- Plain HTML & JavaScript

TODO
- Cache burst logic for assets
- Separate out survey files from the app
- Use WebPack for assets optimization (minify, combine, uglify, watch)

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

Assesment is created using https://surveyjs.io/create-survey.
