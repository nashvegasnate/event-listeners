console.log("CONNECTED");

//BELOW ACTUALLY WORKS!! FOLLOW RECORDING TO ADD CONTAINER****

const button = document.querySelector('#main-btn');
const button2 = document.querySelector('#main-btn2');

button.addEventListener('click', (event) => {
  console.log(`You clicked ${event.target.id}!`);
})

const whatIsTheId = (event) => {
  console.log(`You clicked ${event.target.id}!`);
}



button2.addEventListener('click', whatIsTheId);
button2.addEventListener('click', (event) => {
 
})
