import view from "../utils/view.js"

export default function Stories(path) {
    getStories(path)
    view.innerHTML = `<div>${path}</div>`
}

function getStories(path) {
    const isHomeRoute = path === "/";
    if(isHomeRoute) {
        path = "/news"
    }
    const response = fetch(`https://node-hnapi.herokuapp.com${path}`)
    const stories = response.json();
    return stories
}