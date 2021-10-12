/*

// ❗ Use console.log() To Check Answers

// ✅ Creating / Accessing Arrays

    // what are arrays?

    let myArray1 = [];
    let myArray2 = new Array("test", "t");
    console.log(myArray1, myArray2);

    // define an array with several values
    // what is the technical term for these individual items?

    // count items in an array

    console.log(myArray2.length);

    // access elements in an array

    console.log(myArray2[1]);

// ✅ Modifying Arrays

    // adding elements to an array

        // add element to end of array

        myArray2.push("My Name");
        myArray2.push("Kenny");
        console.log(myArray2);
        
        myArray3 = [...myArray2, "Fitzgerald"]
        console.log(myArray3)
        // add element to beginning of array

        myArray2.unshift("array");
        console.log(myArray2);

    // removing elements from an array
        
        // remove last element and return that element

        myArray2.pop();
        console.log(myArray2);
    
        // remove first element and return that element
    
        myArray2.shift();
        console.log(myArray2);

        // return the element at the index provided in a new array
    
        console.log(myArray2.slice(-2));

        // return all elements where index >= 0 and index < 2
    
        console.log(myArray2.slice(0, 2));

        // starting at index 1, return 2 elements
    
        console.log(myArray2.splice(1, 2));

        // add elements where others are removed

        let myArray4 = ["a","b","c","d"];
        console.log(myArray4.slice(1, 3))

// ✅ Iterating Through Arrays

    // looping over arrays
        
        // for loop
        
        for (let i = 0; i < myArray4.length; i++) {
            console.log(myArray4[i]);
        }

        // do while loop
        
        let j = 0;
        do {
            console.log(myArray4[j]);
            j++;
        } while (j < myArray4.length)

        // for...of loop
        
        for (const element of myArray4) {
            console.log(element);
        }

        // while loop
        
        let i = 0;
        while (i < myArray4.length) {
            console.log(myArray4[i]);
            i++;
        }

// ✅ Array Iteration Methods

        // .forEach()
        
        myArray4.forEach(element => console.log(element));

        // .map()
        
        myArray4.map(element => console.log(element));

        // .filter()
        
        // .find()

*/

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Accessing / Modifying Arrays

    // ✨ BONUS: Try using different ways to define your functions (i.e., const, arrow syntax, etc.) 

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an array of numbers and returns the first element

        function getFirstElement(array) {
            return array[0];
        }

        // Example: getFirstElement([10, 9, 8]) => 10
        // Example: getFirstElement([1, 2, 3]) => 1
        // Example: getFirstElement([-10, 0, 10]) => -10

        // ✅ Check Answer: 
        console.log(getFirstElement([10, 9, 8]));
        console.log(getFirstElement([1, 2, 3]));
        console.log(getFirstElement([-10, 0, 10]));

    // 2️⃣ Create a function that returns an array of unique strings sorted by length in ascending order.

        function sortWords(array) {
            return array.sort((first, second) => first.length - second.length)
            // let newArray = [];

        }
        console.log(sortWords(["i'm", "louis", "hi"]));
        // Example: sortWords(["i'm", "louis", "hi"]) => ["hi", "i'm", "louis"]
        // Example: sortWords(["yellow", "red", "blue"]) => ["red", "blue", "yellow"]
        
        // ❗ If the provided array is empty, return an empty array

        // Example: sortWords([]) => []

        // ✅ Check Answer: 
        // console.log(sortWords());

// 🚧 Break Out Activity 2: Iterating Through Arrays

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that sorts and removes all duplicate elements from an array of numbers
    // before returning the new array.

        // Example: removeDuplicates([1, 1, 2, 2, 3, 3]) => [1, 2, 3]
        // Example: removeDuplicates([1, 1, 1, 1]) => [1]
        // Example: removeDuplicates([3, 3, 3, 2, 1]) => [1, 2, 3]

        // ❗ Aim to use loops, ".map()" or other Array methods that we have covered

        function removeDuplicates(array) {
            return array.sort().filter((value, index, arr) => index === arr.indexOf(value))
        }

        // ✅ Check Answer: 
        console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
        console.log(removeDuplicates([1, 1, 1, 1]));
        console.log(removeDuplicates([3, 3, 3, 2, 1]));
        console.log(removeDuplicates([]));

// 🚧 Break Out Activity 3: Advanced Array Challenge

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that returns the total sum of cubes for a given array of numbers.

        // Example: sumCubes([1, 2, 3]) => 99
            // 1^3 + 2^3 + 3^3 = 1 + 8 + 27 => 36
        // Example: sumCubes([1]) => 1
        // Example: sumCubes([3]) => 27

        // ❗ If the provided array is empty, return 0
        
        function sumCubes(array) {
            return array.reduce((previousValue, currentValue) => previousValue + currentValue ** 3);
        }
        console.log(sumCubes([1, 2, 3]));
        // Example: sumCubes([]) => 0

        // ✅ Check Answer: 
        // console.log(sumCubes());