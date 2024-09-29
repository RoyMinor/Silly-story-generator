// Variables and Function Definitions  
const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = "It was 94 Fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "The White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Event handler
randomize.addEventListener('click', result);

function result() {
    let newStoryText = storyText;
    console.log("Initial story:", newStoryText);

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStoryText = newStoryText.replace(/:insertX:/g, xItem);
    newStoryText = newStoryText.replace(/:insertY:/, yItem);
    newStoryText = newStoryText.replace(/:insertZ:/, zItem);
    
    console.log("After replacements:", newStoryText);

    let weight = "300 pounds";
    let temperature = "94 Fahrenheit";

    if (document.getElementById("uk").checked) {
        weight = Math.round(300 / 14) + ' stone';
        temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        console.log("Converted values:", weight, temperature);
    }

    newStoryText = newStoryText.replace(/94 Fahrenheit/g, temperature);
    newStoryText = newStoryText.replace(/300 pounds/g, weight);
    
    if (customName.value !== '') {
        const name = customName.value;
        newStoryText = newStoryText.replace(/Bob/g, name);
    }

    story.textContent = newStoryText;
    story.style.visibility = 'visible';
}
