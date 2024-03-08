    • Take the icons given by the file icons.js , called HeartButton and SpinnerIcon
    • State for liked and like
    • Develp the UI and and give proper hover class and colors
    • Create states for fetching and error
    • Send post request with appropriate headers and set error state if there is error received back
    • According to error state and fetching state , show the icons conditionally
    We need to cover the edge case of user clicking the button continuosly which the api call is made so we disable the like button when the isFetching state is true
