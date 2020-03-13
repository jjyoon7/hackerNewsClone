function reducer(state, action) {
    switch(action.type) {
        case "ADD_FAVORITE":
            //change state to add
        case "REMOVE_FAVORITE":
            //change state to remove
        default:
            return state    
    }
}

const action = { type: "ADD_FAVORITE" }