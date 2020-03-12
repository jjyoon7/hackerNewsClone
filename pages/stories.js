import view from "../utils/view.js"

export default async function Stories(path) {
    const stories = await getStories(path)
    console.log(stories)
    view.innerHTML = `<div>${path}</div>`
}

async function getStories(path) {
    const isHomeRoute = path === "/";
    if(isHomeRoute) {
        path = "/news"
    }
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
}