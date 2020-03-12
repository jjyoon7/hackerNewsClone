import view from "../utils/view.js"
import Story from "../components/Story.js"

export default async function Item() {
    let story = null;
    let hasComments = false;
    let hasError = false;

    try {
        story = await getStory()
        hasComments = story.comments.length > 0
    } catch(error) {
        hasError = true;
        console.log(error)
    }

    if(hasError) {
        view.innerHTML = `<div>Error fetch story</div>`
    }
    
    view.innerHTML = `
        <div>
            ${Story(story)}
        </div>
        <hr/>
        ${hasComments ? story.comments.map(comment => JSON.stringify(comment)).join("") : "No comments"}
    `
}

async function getStory() {
    const storyId = window.location.hash.split("?id=")[1];
    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    const story = await response.json();
    return story
}

// ${story.comments.map(comment => `<div>${comment}</div>`).join("")}