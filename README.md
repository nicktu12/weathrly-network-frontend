# Weathrly Network (Requests)
This repo provides a front end to be used with [this backend repo](https://github.com/nicktu12/weathrly-network-backend). Fork and clone this repository, and check out the client-side application with `open index.html`

## Backend Setup

1. Clone down [backend repo](https://github.com/nicktu12/weathrly-network-backend) in a directory on the same level as this one i.e. both the frontend and backend repo should be in the same folder, not within one or the other. 
1. `cd` into the cloned backend repo repo
1. Run `npm install`
1. Run `npm start` to start the backend server. The server should be running locally on `http://localhost:3001`. (_Note:_ If you navigate to `http://localhost:3001/` in your browser, you will see a screen that says `Cannot GET /`, which is to be expected. Follow the next step to see more useful information.)
1. Navigate to an endpoint you're trying to request in the browser (for example, if you want to GET users, navigate to http://localhost:3001/api/v1/death-valley in the browser) - see the tables below for possible endpoints.

## Endpoints

Available locations: `death-valley`, `mawsyram`, `denali`

| url | verb | req. body | 
| ----|------|---------|
| `http://localhost:3001/api/v1/${location}` | GET | 
| `http://localhost:3001/api/v1/${location}` | POST | `{ message: <String> }`
| `http://localhost:3001/api/v1/${location}` | DELETE | 

## TASKS
1. Make 7 day forecast appear on the dom
2. Implement populateHeader and populateAlertMessage functions
3. Implement postNewAlert function
4. Add error handling that will not POST an empty message
5. Create a function that will delete any current alerts
6. Add error handling that will not delete an alert if there is no alert to delete
7. SPICY: Create a closure that takes in our API base URL (OR request method) and saves that value for later, resulting in a function we call with our location only (fetch function w/ base URL (OR request method) is partially applied)

## REFLECTION QUESTIONS
1. When and where can I update the DOM based on async data responses?
2. How can stale data on the DOM from previous network requests be cleared off the display?
3. How do we ensure data remains up to date on the DOM when POST and DELETE requests happen?
4. How can global variables be leveraged to store the value of async data?
5. How can network request error handling be employed to let the user know they've done something wrong?
