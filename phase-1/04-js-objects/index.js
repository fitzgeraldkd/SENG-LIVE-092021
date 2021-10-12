/*

// ❗ Use console.log() To Check Answers

// ✅ Creating & Accessing Objects

    // creating object literals

        // empty object (no key / value pairs)

        let myObj1 = {};

        // object with single property (one key / value pair)

        let myObj2 = {myKey: "myValue"};

        // object with multiple properties of different data types (multiple key / value pairs)

        const episode = {
            season: 4,
            num: 5,
            title: "The One with Joeys New Girlfriend",
            air_date: "October 30, 1997",
            run_time: "22 min",
            printEpisode: function(){console.log(episode.title)}
        };

    // accessing object properties

        // bracket notation (in what situations would we need to use this?)
        
            // can use bracket notation for placeholders

            function someFunction(myObject, myKey) {
                return myObject[myKey];
            }

            console.log(someFunction(episode, "season"))

        // dot notation (better for readability)
        
    // convert object properties and values into an array

            console.log(Object.keys(episode));
            console.log(Object.values(episode));
            console.log(Object.entries(episode));

// ✅ Modifying Objects

    // destructively

        // adding a property

        episode.newKey = "value";
        console.log(episode);

        // changing a property value
            
        episode.newKey = [1, 2, 3];
        console.log(episode);

        // removing a property 

        // delete episode.newKey

    // nondestructively

        // use the spread operator {...} to create a clone of the original object...

        let newEpisode = {...episode};
        newEpisode.newKey.splice(1, 1);
        console.log(newEpisode);
        console.log(episode);

        // ...that you can then modify without altering the original object
        
let myOriginalObject = {
    letters: ["a", "b", "c"]
}

let myShallowCopy = {...myOriginalObject};

// directly & destructively mutating an array in the shallow copy affects the original
myShallowCopy.letters.splice(0, 2);

console.log(myOriginalObject);
console.log(myShallowCopy);

// ✅ Iterating Over Objects vs. Arrays
        
    // what is the main distinction between looping and iterating?

    // for...in (iterate over keys of an object)

    // for...of (iterate over values of an iterable object (e.g., array, string, etc.))

// ✅ Prototypal Inheritance

    // every object contains a hidden property, [[Prototype]], which can be used to add other objects' methods and properties
    
        // firstPerson object
        let firstPerson = {
            age: "25",
            canCode: true,
            sayHello: () => "Hello!", 
        };
       
        // secondPerson object
        let secondPerson = {
            age: "35",
            
        //  inherit the properties and methods of firstPerson
            __proto__: firstPerson, 
        };

    // "canCode" is now available as a property of secondPerson
    // console.log("The secondPerson canCode: " + secondPerson.canCode);
    // console.log("The secondPerson can sayHello: " + secondPerson.sayHello()); 

*/

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating & Accessing Objects / Object Methods

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an object (dimensions) and returns the computed volume.  

        // Example: computeVolume({ length: 2, width: 2, height: 2 }) => 8
        // Example: computeVolume({ length: 3, width: 5, height: 7 }) => 105

        // ❗ volume => length * width * height

        function computeVolume(dimensions) {
            return dimensions.length * dimensions.width * dimensions.height;
        }

        let object = { 
            length: 3,
            width: 5, 
            height: 7 
        };
        console.log(computeVolume(object));
        
        // ✅ Check Answer: 
        // console.log(computeVolume(dimensions));

    // 2️⃣ Create a function that accepts an object (myObject) and converts it into / returns an array (myArray).
        
        // ❗ Each element of newArray should represent a key-value pairing from myObject

        // Example: convertToArray({ x: 1, y: 2, z: 3 }) => [["x", 1], ["y", 2], ["z", 3]]
        // Example: convertToArray({ firstName: "John", lastName: "Smith" }) => [["firstName", "John"], ["lastName", "Smith"]]

        // ❗ If the provided object (myObject) is empty, return an empty array
        
        // Example: convertToArray({}) => []

        // 💡 Consider using a combination of Object.keys and map() in your solution.

        function convertToArray(myObject) {
            return Object.entries(myObject);
        }

        console.log(convertToArray({ x: 1, y: 2, z: 3 }));
        console.log(convertToArray({}));

        // ✅ Check Answer: 
        // console.log(convertToArray(myObject));

// 🚧 Break Out Activity 2: Modifying / Iterating Over Objects

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an object (normalObject), inverts its keys / values, and returns the new object (invertedObject)

        // Example: invertObject({ x: 1, y: 2, z: 3 }) => { 1: x, 2: y, 3: z }

        // 💡 Try making use of a "for...in" loop to iterate over originalObject's keys.

        function invertObject(normalObject) {
            let invertedObject = {};
            for (const key in normalObject) {
                let value = normalObject[key];
                invertedObject[value] = key;
            }
            return invertedObject;
        }

        let normalObject = {
            x: 1,
            y: 2, 
            z: 3
        };


        // ✅ Check Answer: 
        console.log(invertObject(normalObject));

// 🚧 Break Out Activity 3: Stretch Challenge

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an object (groupOfPeople) containing names and ages and returns the name of the youngest person.

        // Example: findYoungest({
        //   Jeremy: 65,
        //   Alice: 32,
        //   Bob: 18,
        //   Megan: 29
        // }) => "Bob"

        // ❗ All ages must be different.

        // 💡 Consider using Object.keys(), map(), and / or sort() in your solution.

        function findYoungest(groupOfPeople) {

        }

        let people = {
            Jeremy: 65,
            Alice: 32,
            Bob: 18,
            Megan: 29
        }

        // ✅ Check Answer: 
        console.log(findYoungest(people));