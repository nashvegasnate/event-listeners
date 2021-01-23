console.log("CONNECTED");

const firstObject = {};

const user = {
  username: 'biz.markie',
  password: 'abd123',
  lovesJavascript: true,
  favoriteNumber: 42,
}

// DOT NOTATION
// get values out of an object

// console.log(user.lovesJavascript);
//  console.log(user.username);

// BRACKET NOTATION
// const password = 'password';
// console.log(user[password]);  
//output: abd123
// console.log(user['username']);
//output: biz.markie

//console.log(user[favoriteNumber]);

// ASSIGNING VALUES

// const newUser = {
  // isNew: true,
// }

// newUser.username = 'fresh.prince'; //dot notation
// newUser['password'] = 'abcd1234'; //bracket notation
// console.log(newUser); 
//output: {isNew: true, username: 'fresh.prince', password: "abcd1234"}

/*const newObject = {
  username: 'Nathan',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

newObject.sayHello(); //output: Nathan says Hello!
*/
//METHODS (FUNCTIONS AS VALUE)
/*const newObject = {
  username: 'Nathan',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}
newObject.username = 'Aja';
newObject.sayHello(); //output: Aja
*/
  
//ITERATE OVER AN PBJECT 

/*const usertTwo = {
  username: 'triinity.christiana',
  password: 'xyz234',
  lovesJavascript: true,
  favoriteNumber: 12,
}
*/
/*
for (let key in userTwo) {
  console.log(key); // keys
  console.log(userTwo[key]); //values
  console.log(userTwo.key); //undefined
  console.log(userTwo); //values
} 
*/
// THIS DOES NOT WORK _ FIX IT******
// function speak(user) {
//   return `Hello ${user}!`;
// }
// function quiet(user) {
//   return `Shut up $[user]!`;
// }
// function createGreeting(user, cd) {
//   return cb(user);
// }
// console.log(createGreeting('Dan', speak));
