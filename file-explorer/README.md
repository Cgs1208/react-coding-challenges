    • https://github.com/piyush-eon/frontend-interview-questions/tree/master/reactjs-interview-questions github url of all coding challenges of this playlist
    • React JS Interview Questions ( File Explorer ) - Frontend Machine Coding Interview Experience

    • First we create a json file to which we are creating a folder structure
    • Bring the json data  into app.js and put it in a state
    • We create a new component to render that data and pass the data to new file called Folder.js
    • First we display the first name and then map the items and display remaining things inside folder
    • We make if else conditions to show folder or file icon depending on isFolder property of json data
    • We make a state to show and hide items when clicked
    • Now we add 2 buttons to add folder and files
    • Both should open the input box to add file name , where we need state with initial state as object with visible and isFolder prooperty
    • We check the keycode of the key entered , 13 is keycode of enter button , then we build logic
    • we create a new hook to put the logic of inserting new item into the tree
