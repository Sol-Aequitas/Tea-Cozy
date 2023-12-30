 //Create an array or list of messages for the generator
 //WHERE BE THY BOOTY!?
const messages = [
    "Go left", "Go right", "Go forward", "Go Back", "You've found treasure!"
];
//Use JS Math.floor(Math.random)* length to generate a random index from array
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};
//use randomMessage to respond to the user's request
const userRequest = "Give me a random message.";
const randomResponse = getRandomMessage();
console.log(randomResponse);
// Set repository on gitHub.
//Submit