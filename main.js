// console.log("It worked");

const firstObj = {};

const user = {
  username: 'elliewalkersm',
  password: '106Abc',
  lovesJavaScript: true,
  favoriteNumber: 23,
};

// ***DOT NOTATION
// console.log(user.lovesJavaScript);
// console.log(user.username);
// console.log(user.favoriteNumber);

// ***BRACKET NOTATION
// console.log(user['password']);
// console.log(user['favoriteNumber']);

// ASSIGNING VALUES
const newUser = {
  isNew: true,

};
// newUser['password'] = 'ABC123';
// newUser.username = 'fresh.prince';
// console.log(newUser);


// ****METHODS
// const newObject = {
//   username: 'Ellie',
//   sayHello: function () {
//     console.log(`${this.username} says hello`);
//   }
// };

// newObject.username = 'Aja';
// newObject.sayHello ();

// ***ITERATE OVER AN OBJECT
const user2 = {
  username: 'Trinity',
  password: 'XYZ432',
  lovesJavascript: false,
  favoriteNumber: 12,
}

//dot notation will not work here
for (let key in user2) {
  console.log(user2[key]); //values
  console.log(key); //keys
}
