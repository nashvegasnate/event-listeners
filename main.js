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

// console.log(user.lovesJavscript);
//  console.log(user.username);

// BRACKET NOTATION
//const password = 'password';
//console.log(user[password]);
//console.log(user['username']);

//console.log(user[favoriteNumber]);

// ASSIGNING VALUES

//const newUser = {
  //isNew: true,
//}

//newUser.username = 'fresh.prince'; //dot notation
//newUser['password'] = 'abcd1234'; //bracket notation
//console.log(newUser);

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

const usertTwo = {
  username: 'triinity.christiana',
  password: 'xyz234',
  lovesJavascript: true,
  favoriteNumber: 12,
}

//
for (let key in userTwo) {
  console.log(key); // keys
  console.log(userTwo[key]); //values
  console.log(userTwo.key); //undefined
  console.log(userTwo); //values
} 
