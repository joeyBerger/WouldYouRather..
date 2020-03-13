# MyReads Project

This project demonstrates the use of React, Redux, react-redux, store,  action creators, middleware, reducers, thunk, API calls, BrowserRouter and the use of stateful, stateless components.

## Starting

Once the project lives locally, install npm and start the server.

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Using the application

* The database supplies 3 users and multiple questions. Login with a supplied user or create a new user. Upon logging in feel free to navigate through the application by using the navigation bar.
* The `/home` page contains a list of answered and unanswered questions pertaining to the signed in user. These lists are filtered by a tab selector. When in the 'Unanswered' tab, unanswered questions are filtered by timestamp (newest to oldest) and contain buttons to answer the posed question. Upon clicking on said 'View Poll' button, the page redirects to `/question:id`, where a binary choice is presented. Upon successful submission or upon clicking on the View Poll' within the 'Answered' tab, a summary of the questions' answers is rendered, along with the highlighted user's answer.
* The `/add` page contains input fields necessary to create a new question. Once a question is successfully created, the user is redirected to the `/home` page.
* The `/leaderboard` page contains a list of available users and their rank. The score is calculated by adding questions answered and created.
* Once the user logs out, they directed to the `/login` page. Upon logging in again, the state is consistent, as all data is handled persistenly.
* Anytime the user attempts to manually enter a URL, the user is logged out and directed to an error page, which navigates to the `/login` page.