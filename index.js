const letters = ["o", "a", "c", "x", "r", "b", "z"];

let order = letters.sort();
//console.log(order);

let lettersback = letters.reverse();

//console.log(lettersback);

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; //34
let multiplication = three * four; //12
let division = three / four; //0.
let subtraction = three - four; //-1
let lessThan1 = three < four; //true
let lessThan2 = parseInt(thirty) < four; //false

/* console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true"); */

/* for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
} */

/* async function fetchTest() {
  const res = await fetch("https://dummyjson.com/products/1");
  const json = await res.json();
  console.log(json);
} */
//fetchTest();
/* fetch("https://dummyjson.com/products/1").then((res) => {
  res.json().then((res) => console.log(res));
});
 */
console.log("==============================4=============================");

let a = 6, b = 5;
let result = `${a} + ${b} is `;
/* if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
} */

//if using the ternary/conditional
(a + b < 10) ? result += 'less than 10': result += 'greater than 10'; 

console.log(result)


console.log("==============================5=============================");
//# 5
function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("Brian"));
//Function expression

let getGreeting2 = function (name) {
  return "Hello " + name;
};
console.log(getGreeting2("Roman"));

//Arrow expression

const getGreeting3 = (name) => console.log("Hi " + name);

console.log(getGreeting3("Figueroa"));

//# 6
console.log("==============================6=============================");
const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  //Normal way
  /*  getCatchPhrase(person) {
    if (person.numFingers == 6){
      return 'You killed my father. Prepare to die.'
    }
    return "Nice to meet you.";
  } */

  //Arrow function in a json object Key : () =>
  getCatchPhrase: (person) =>
    person.numFingers == 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};

inigo.greeting(westley);
inigo.greeting(rugen);

//# 7
console.log("==============================7=============================");

const basketballGame = {
  score: 0,
  freeThrow: function () {
    this.score++;
    return this;
  },
  basket: function () {
    this.score += 2;
    return this;
  },
  threePointer: function () {
    this.score += 3;
    return this;
  },
  halfTime: function () {
    return console.log("Halftime score is " + this.score);
  },
};
//modify each of the above object methods to enable function chaining as below:
//console.log(basketballGame.basket().freeThrow());
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();



//# 8
console.log("==============================8=============================");
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const santiago = {
  name: "Santiago",
  population: 1_101_000,
  state: "Stg",
  founded: "26 January 1588",
  timezone: "Chile/Santiago",
};

function readCity(city) {
  for (var key in city) {
    // console.log("key: " + key);
    console.log(city[key]);
  }
}

readCity(sydney);
readCity(santiago);



//# 9
console.log("==============================9=============================");


let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//a
//let moreSports = teamSports; 
//e 
let moreSports = [...teamSports];
moreSports.push('Basketball');
moreSports.unshift('Soccer', 'Golf');
moreSports.sort(); 

//console.log(moreSports)

//b
let dog2 = dog1; 
dog2 = 'Rocky';
//console.log(dog1);

//c 
//let cat2 = cat1; 
//e
let cat2 = {...cat1};
cat2.name = 'Neko'
cat2.color = 'green'

//d
console.log('teamSports',teamSports);
console.log('dog1',dog1);
console.log('cat1',cat1);

//e
console.log('moreSports',moreSports);
console.log('cat2: ', cat2);

//# 10
console.log("==============================10=============================");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive= () => this.age > 18 ? true: false; 
  }

//d
class PersonClass{
  constructor(name, age){
    this.name = name;
    this.age = age ; 
  }
  canDrive= () => this.age > 18 ? true: false; 

}
//a
const person1 = new Person('Brian',18);

//b
const person2 = new Person('Gustavo',59);
person2.human = false;

//c
console.log("=== person1 ======================");
console.log(person1);

console.log("=== person1 Can Drive ============");
console.log(person1.canDrive())

console.log("=== person2 ======================");
console.log(person2);

//d
const person3 = new PersonClass('Lebron',34)

console.log("=== person3 ======================");
console.log(person3);

console.log("=== person3 Can Drive ============");
console.log(person3.canDrive());
