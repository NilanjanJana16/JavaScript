// comment
console.log("Hello World");

let name = "John";  // variable
console.log(name);

// constants
 const  PI = 3.4;
 // PI = 1; will throw error while changing constant
 console.log(PI);

 //primitive data types

    let name1 = 'Mosh'; //string
    let age = 23; //numbers
    let isApproved = false; //boolean can be true or false
    let lastName = null; //null where we want to clear the value
    let firstName = undefined; //undefined
    //symbol

    // js is a dynamic language
    // we can change the type of variable

// objects
    let person = {
        name: 'Mosh',       //key value pair
        age: 30
    }; //object literal

    console.log(person);
    console.log(person.name); //dot notation
    //dot notation can be used to change the value

    person.name = 'John';
    console.log(person['name']); //bracket notation 
    // bracket notation is used when we don't know the key at compile time or we want to use a variable as key
    let selection = 'name';
    console.log(person[selection]);

// arrays
    let selectedColors = ['red', 'blue']; //array literal
    console.log(selectedColors[0]); 
    // arrays are dynamic in js we can add or remove elements 
    selectedColors[2] = 'green';
    console.log(selectedColors.length); //length of array
    selectedColors[3] = 1; // we can add different types of data in array
    console.log(selectedColors);

// functions
    function greet(name, lastName) //parameters
    { 
        console.log('Hello ' + name + ' ' + lastName);
    }

    greet('John', 'Smith'); //arguments