#On The Stage

# Setup

1. `npm run build`
2. `npm start`

# How to test

1. Visit `http://localhhost:3000` or visit `https://ots.onrender.com`
2. Ensure you are able to see
   - datetime-local input box
   - a save button
3. Ensure you are able to see `5/13/2023 7PM` in a datetime-local input box
4. Open network tab to check the payload when you click save after changing date
5. Change the date by clicking into input box and hit `save`
6. Ensure date being sent to the `/api/savePerformance` is in utc regardless of your local time
