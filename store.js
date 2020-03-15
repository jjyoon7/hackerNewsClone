function createStore(reducer) {
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action)
        }
    }
}

const initialState = {
    favorites: []
}

function favoritesReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_FAVORITE":{
            const addedFavorite = action.payload.favorite;
            const favorites = [...state.favorites, addedFavorite];
            return {favorites};}
        case "REMOVE_FAVORITE":{
            //change state to remove
            const removedFavoriteId = action.payload.favorite.id;
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavoriteId);
            return {favorites};}
        default:
            return state;    
    }
}

// const action = { type: "ADD_FAVORITE", payload: { favorite: { title: "story1", id: 1 } } };

const store = createStore(favoritesReducer);

export default store;