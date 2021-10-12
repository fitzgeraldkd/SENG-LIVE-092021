// ❗ Use console.log() To Check Answers

// ✅ Defining Functions

    // define a function 'printTemp' using function declaration that returns 'Today's temperature is 90 degrees fahrenheit'

        // function printTemp1() {
        //     return "Today's temperature is 90 degrees fahrenheit";
        // }

        // 💡 Check Answer: 
        // console.log(printTemp1());

    // define a function 'printTemp' using function expression that returns 'Today's temperature is 90 degrees fahrenheit'

        // const printTemp2 = function() {
        //     return "Today's temperature is 90 degrees fahrenheit";
        // };

        // 💡 Check Answer: 
        // console.log(printTemp2());

    // define a function 'printTemp' using arrow syntax that returns 'Today's temperature is 90 degrees fahrenheit'

        // const printTemp3 = () => "Today's temperature is 90 degrees fahrenheit";

        // 💡 Check Answer: 
        // console.log(printTemp3());

// ✅ Declaring vs. Invoking Functions

        // function printTemp() {
        //     return "Some temp";
        // }

    // print a reference to the 'printTemp' function

        // console.log(printTemp);

    // call function and evaluate logic

        // console.log(printTemp());

// ✅ Parameters vs Arguments

    // using the printTemp function again, let's define a parameter 'temperature'

    // how can we use the paramater to make our code more dynamic?

        // function printTemp4(temperature) {
        //     return `The temperature is: ${temperature}`;
        // }

    // now invoke the function and pass in an argument

        // console.log(printTemp4(75));

// ✅ First Class / Higher Order Functions

    // store a function inside of a variable

    // pass a function as an argument

    // functions are objects and can have properties


// ✅ Scopes

    // Global Scope

    // Function Scope


// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Defining, Declaring, and Invoking Functions 

    // ❗ Define a function that takes two numbers as arguments and returns their sum.

        // function addNumbers(num1, num2=5) {
        //     return num1 + num2;
        // }
        // console.log(addNumbers(1, 2));
        // console.log(addNumbers(3));
        // Example: addNumbers(5, 5) ➞ 10

        // ✨ BONUS: Try providing a default value for one of your arguments.

    // ❗ Define a function that takes an integer "minutes" and converts it to seconds.

        // function minutesToSeconds(minutes) {
        //     return minutes * 60;
        // }
        // console.log(minutesToSeconds(6));
        // Example: convert(6) ➞ 360

    // ❗ Define a function that takes any number between 1 and 1000. Sum all the numbers 
    // from 1 to the number passed to the function. For instance, if the input is 5 then 
    // your function should return 15 because 1 + 2 + 3 + 4 + 5 = 15.

        // function sumNumbers(value) {
        //     let sum = 0;
        //     for (let i = 1; i <= value; i++) {
        //         sum += i;
        //     }
        //     return sum;
        // }
        // console.log(sumNumbers(1));
        // console.log(sumNumbers(2));
        // console.log(sumNumbers(3));
        // console.log(sumNumbers(4));
        // console.log(sumNumbers(5));
        // console.log(sumNumbers(6));
        // Example: sumNumbers(5) ➞ 15

        // function sumNumbers(value) {
        //     return (value + 1) * value / 2;
        // }
    
    // 🚨 Be sure to comment out any code above before proceeding to the next activity.


// 🚧 Break Out Activity 2: Creating / Implementing Higher Order Functions

    // ❗ Define a function, compareFunctions(), that will be passed two parameterless functions, 
    // first and second. compareFunctions() should call each function and return a string indicating 
    // which function returned the larger number.

        // If first() returns the larger number, return the string "First Function is Higher!". 
        // If second() returns the larger number, return the string "Second Function is Higher!". 
        // If the functions return the same number, return the string "Draw!".

        // Example: compareFunctions(() => 1, () => 10) ➞ "First Function is Higher!"
        // Example: compareFunctions(() => 10, () => 1) ➞ "Second Function is Higher!"
        // Example: compareFunctions(() => 10, () => 10) ➞ "Draw!"


        function compareFunctions(first, second) {
            console.log(first);
            console.log(first());
            console.log(second);
            console.log(second());
            if (first() > second()) {
                return "First Function is Higher!";
            } else if (first() < second()) {
                return "Second Function is Higher!";
            } else {
                return "Draw!";
            }
        }

        console.log(compareFunctions(() => 1, () => 10));

    // 🚨 Be sure to comment out any code above before proceeding.


// 🚧 Break Out Activity 3: Advanced Functions

    // ❗ Define a function that reverses all the words in a sentence beginning with a particular letter.

        // 💡 Reverse the words themselves, not the entire sentence.

        // 💡 All characters in any sentence should remain in lower case.

        // Example: reverseWords("sally sells seashells by the sea shore", "s") ➞ "yllas slles sllehsaes by the aes erohs"
