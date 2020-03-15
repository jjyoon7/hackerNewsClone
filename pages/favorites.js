import store from "../store.js"
import Story from "../components/Story.js"
import checkFavorite from "../utils/checkFavorite.js"
import view from "../utils/view.js"

export default async function Favorites() {
    const { favorites } = store.getState();
    const hasFavorites = favorites.length > 0;

    view.innerHTML = `<div>
        ${hasFavorites ? favorites.map((story, i) => Story({...story, index: i + 1, isFavorite: checkFavorite(favorites, story)})).join("") : "No favorites"}
    </div>`

    document.querySelectorAll('.favorite').forEach(favoriteButton => {
        favoriteButton.addEventListener('click', async function() {
          const story = JSON.parse(this.dataset.story);  
          const isFavorited = checkFavorite(favorites, story);
          store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })  
          await Favorites();
        });
    });
    
}