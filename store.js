const initialState = {
    favorites: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_FAVORITE":
            const addedFavorite = action.payload.favorite;
            const favorites = [...state.favorite, addedFavorite];
            return {favorites};
        case "REMOVE_FAVORITE":
            //change state to remove
            const removedFavoriteId = action.payload.favorite.id;
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavoriteId)
            return {favorite};
        default:
            return state    
    }
}

const action = { type: "ADD_FAVORITE", payload: { favorite: { title: "story1", id: 1 } } }