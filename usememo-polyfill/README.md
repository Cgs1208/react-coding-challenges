    • We create two counter , one for increment and one for decrement
    • Another value for square of the counter value (this operation is done in separate function)
    • Lets imagine that what happens inside the square function is an expensive operation
    • When decrement button is clicked it should not run expensive operation inside square function since two counters have 2 separate states and any change in any state results in re-rendering of the component
    So we use useMemo hook and memoise the value of square and call the function only when the first counter value changes
