# Weathrly Network (Requests)
This repo provides a front end to be used with this backend repo. Fork and clone this repository, and check out the client-side application with `open index.html`

## Backend Setup

1. Clone down backend repo in a directory on the same level as this one i.e. both the frontend and backend repo should be in the same folder, not within one or the other. 
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

