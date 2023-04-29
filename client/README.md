# OnTheStage

# Setup

1. Clone the repository

Run following in the repo:

2. `npm install`
3. `npm start`

Visit `http://localhost:3000`

# Codesandbox

Visit `https://codesandbox.io/s/github/shwetakilledar/OnTheStage`

# How to test

1. Ensure that app renders following

- datetime-local input box
- a save button

2. Ensure you are able to see `5/13/2023 7PM` in the datetime-local input box

3. To check payload sent to the server

- Right click into the browser
- Click inspect
- Click console tab datetime-local input box
- Click on save
- Ensure you are able to see payload in the console (e.g {`Date: 2023-05-14 06:00:00`})
- Make sure that no matter in the world you are saving the DateTime it saves in UTC
