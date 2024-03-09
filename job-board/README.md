    • The question can be found in here - https://www.greatfrontend.com/questions/user-interface/job-board
    • First make all the constants in a separate constants.js file (api-endpoint, items-per-page)
    • Take reference of the example response of a particular job details to build the UI (given in question in above URL)
    • Send the exmaple data to new component by mapping the items array
    • JobPosting tag takes the required data to display (URL,by,time,title)
    By using example json data given we can place these data and style them properly so it matches the UI result given in question.
    • Then we fetch all ID and then slice them to adjust the id required per page and then again fetch the details using those ID's
    • Also cover the edge case of disabling the button when fetching is in process.
