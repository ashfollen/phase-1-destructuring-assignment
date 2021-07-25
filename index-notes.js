//DESTRUCTURING ASSIGNMENT NOTES

// Sometimes we receive info in a collection (e.g. an Object) and we want to "pick and choose" elements out of the collection. It can be a pain to individually extract each property/value pair out of an Object and then assign it to a variable. 

//Destructuring lets us type less and be more clear about what we want to pull out of an Object. 

//Destructuring is important towards understanding how to get JS to include third-party code (like you find on npm)

//Repetitive & long way - Assigning data from an object to single variables 

const doggie = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFood: 'hot dogs'
};

const name = doggie.name;
const breed = doggie.breed;
name; // => "Buzz"
breed; // => "Great Pyrenees"

//^^^ Process: 
//1. Declare a variable with a name (e.g. name or breed)
//2. Use that variable's name to point to an attribute in the Object whose name matches the name of the variable (e.g. doggie.breed or doggie.name)
//3. Assign the attribute's value to the created variable. 

//Shorter way in a simpler line of code

const doggie2 = {
    name2: 'Buzz',
    breed2: 'Great Pyrenees',
    furColor2: 'black and white',
    activityLevel2: 'sloth-like',
    favoriteFood2: 'hot dogs'
};

const {name2, breed2} = doggie2; // the {} tells the JS engine that it's going to be pulling values from an Object. The engine looks inside the doggie object for the attributes name2 and breed2 and assigns the values associated with those keys to the corresponding variable names. ***This is known as destructuring assignment*** 
name2; // => "Buzz"
breed2; // => "Great Pyrenees"

// Using Destructuring Assignment with a nested data structure: 

const doggie3 = {
    name3: 'Buzz', 
    breed3: 'Great Pyrenees',
    furColor3: 'black and white', 
    activityLevel3: 'sloth-like',
    favoriteFoods3: {
        meats:{
            ham: 'smoked',
            hotDog: 'Oscar Meyer'
        },
        cheese: {
            american: 'kraft'
        }
    }
};

const {ham, hotDog} = doggie3.favoriteFoods3.meats; // drilled down to the object we want to access by chaining the keys
ham; // => "smoked"
hotDog; // => "Oscar Meyer"

//Using Destructuring Assignment with Arrays

//same syntax as objects can be used with arrays

const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [, small, giant] = dogs; // initial comma tells engine to skip the first element and start assignments with second element
console.log(small, giant); //LOG: Pug Bull Mastiff


//Using Destructuring Assignment with Strings

//we can destructure with strings by using the String.prototype.split() method to turn the string into an array:

const dogsName = 'Sir Woody BarksALot';
const [title, , lastName] = dogsName.split(' ');
console.log(title, lastName); // LOG: Sir BarksALot