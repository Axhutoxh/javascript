# Javascript Keywords

<div dir="rtl">
    <a href="https://github.com/Axhutoxh/javascript/blob/main/study/chapter2/README.md"><< Next</a>
</div>
  <a href="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/README.md"><< Back</a>

# Index

1. [JavaScript Style Guide](#javascript-style-guide)
2. [Hello world Program](#hello-world-program)
3. [variables](#variables)

   1. [var](#var-variable)
   2. [let](#let-variable)
   3. [const](#const-variable)

4. [Strings](#strings)
5. [Template Strings](#javascript-template-literals)
6. [Null, undefined, Bigint, typeof](#data-types-primitive-data-types)
7. [Booleans and comparison Operator](#)
8. [Truthy and Falsy Values](#)
9. [If else statement](#)
10. [Ternary Operator](#)
11. [&& || operator](#)
12. [Nested if else, If elseif else](#)
13. [Switch statement](#)
14. [While loop, for loop, Do while loop, forEach loop](#)
15. [Break and continue keyword](#)

<h3>Basic Setup to Run Javascript code</h3>
 Either you have any browser in Your System or have Nodejs server

<h2>Let's Start</h2>

Open any browser press <b>Ctrl+Shift+i</b> to open inspector and click on <b>console</b> menu.

<h3>For best practice set up folder structure like below</h3>

    📁 javascriptPractice
        - 📁 css
        - 📁 js
        - 📄 index.html

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/assets/fun/master.gif" width="800"  height="400" />
</div>

# JavaScript Style Guide

Coding conventions secure quality:

- Improve code readability
- Make code maintenance easier

<h3>Variable Names</h3>

1.  use camelCase for identifier names (variables and functions).
2.  All names start with a letter.

        variableExample = "DBZ";
        example = "dbz";

3.  Always put spaces around operators ( = + - \* / ), and after commas

        let sum = x + y;

4.  Always use 2 spaces for indentation of code blocks:

        function codeIndentation(){
        return 'Dbz';
        }

- Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.

5.  Always end a simple statement with a semicolon.

        const dbzCharacter = ["goku", "vegita", "bulma"];

        const characterDetail = {
        firstName: 'Son',
        lastName: 'Goku',
        age: 38,
        eyeColor: ['red', 'black', 'blue', 'grey']
        };

General rules for complex (compound) statements

- Put the opening bracket at the end of the first line.
- Use one space before the opening bracket.
- Put the closing bracket on a new line, without leading spaces.
- Do not end a complex statement with a semicolon.

General rules for object definitions

- Place the opening bracket on the same line as the object name.
- Use colon plus one space between each property and its value.
- Use quotes around string values, not around numeric values.
- Do not add a comma after the last property-value pair.
- Place the closing bracket on a new line, without leading spaces.
- Always end an object definition with a semicolon.

<h3>Naming Conventions</h3>
Always use the same naming convention for all your code. For example:

- Variable and function names written as camelCase
- Global variables written in UPPERCASE (We don't, but it's quite common)
- Constants (like PI) written in UPPERCASE

Hyphens in HTML and CSS:

1. HTML5 attributes can start with data- (data-quantity, data-price).

2. CSS uses hyphens in property-names (font-size).

- Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.

1. Many programmers prefer to use underscores (date_of_birth), especially in SQL databases.
2. Underscores are often used in PHP documentation
3. PascalCase is often preferred by C programmers.
4. camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.

<br>

# Hello world program

     console.log('Hello World');

     console.log("🔥 ka mai ha mai ha 🔥");

     console.log(`multiline
     printing `);

In order to print any string we can use either single quote <b> ' </b>or double quote<b> " </b>or backtic<b> ` </b>.

<h2>Yahoo! completed first task</h2>

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/assets/fun/champ.gif" width="800"  height="500" />
</div>

# Variables

- In Js there are 3 ways to declare variables

1. Using <b>var</b>
2. Using <b>let</b>
3. Using <b>const</b>

<h4>What are Variables?</h4>

- Variables are containers for storing data (storing data values).

## var variable

The var keyword is used in all JavaScript code from 1995 to 2015.If you want your code to run in older browsers, you must use var.

- The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function.

      var x = 10;

      function sum(){
      var y = 5;
      console.log(x+y); //Output is 15
      }

      sum();

- Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable.

      var x = 10;
      console.log("value of x is",x);   //Output is 10

      var x = 100;
      console.log("value of second variable x",x);  //Output is 100

      x = 20;
      console.log("value of x after reassign",x);   //Output is 20

- If users use the var variable before the declaration, it initializes with the undefined value

      console.log(a);
      var a = 10;

## let variable

The let keyword is an improved version of the var keyword.

- The scope of a let variable is only block scoped. It can’t be accessible outside the particular block

      let a = 10;
      function scope() {
      if (true) {
      let b = 20;
      console.log(20); // It prints 20
      }
      console.log(b); // It gives error as it defined in if block

      }
      scope()
      console.log(a) // It prints 10

- Users cannot re-declare the variable defined with the let keyword but can update it.

      let a=10;
      let a=5; // It is not allowed

      a = 8; //It is allowed

- Users can declare the variable with the same name in different blocks using the let keyword.

      let a = 10
      if (true) {
        let a=9
        console.log(a) // It prints 9
      }
      console.log(a) // It prints 10

- If users use the let variable before the declaration, it does not initialize with undefined just like a var variable, and returns an error.

       console.log(a);  // Cannot access 'a' before initialization
       let a = 10;

## const variable

The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.

- When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared.

      const a = 10;
      function scope(){
        a = 9;
        console.log(a); //TypeError:Assignment to constant variable.
      }

      scope();

- Users cannot change the properties of the const object, but they can change the value of the properties of the const object.

        const dbz = {
        data1 : 'goku',
        data2 : 'vegita'
        }

        dbz.data1 = 'kakrot is goku'; //It is allowed

        // It is not allowed
        dbz = {
          datax: 'pikachu',
          datay: 'ash'
        }

  <hr />

# Strings

String is a data type which is used to store collection of character in it.

a string indexing start with 0 and end to the size of string-1;

        let firstName = "Gohan";

        // G o h a n
        // 0 1 2 3 4

- In above code if you want to print particular character in string use the character indexing;

        console.log("Printing h ");
        console.log(firstName[2]);  //output is h

- In order to print last element of a string use <b>string.length -1 </b>

        console.log(firstName[firstName.length -1]);

- space is also part of string . suppose we have a below string;

        let firstName = "   Gohan   "

        console.log(firstName.length) //output is 11

  output of above code is 11 because we have 6 space and 5 character .

  to avoid such spaces we have a string method <b>trim</b>

          firstName = firstName.trim();
          console.log(firstName.length) //output is 5

  if we don't re-assing the trim value then the result will be 11.

  because string is immutable so in order to value get's updated we have initialise the updated value to same variable or new variable.

  <h4>String toUpperCase()</h4>

          let small = 'abcd'

          let upper = small.toUpperCase();
          console.log(upper) // Output ABCD

  <h4>String toLowerCase()</h4>

          let upper = 'ABCD';

          let small = upper.toLowerCase();
          console.log(small); // Output abcd

  <h4>String slice()</h4>

  - extracts a part of a string and returns the extracted part in a new string.
  - The method takes 2 parameters: start position, and end position (end not included).

          let text = "Goku, Gohan, Gotan";
          let part = text.slice(6, 11); //Output Gohan

# JavaScript Template Literals

Synonyms:

- Template Literals
- Template Strings
- String Templates
- Back-Tics Syntax

<h4><i>Template Literals use back-ticks (``) rather than the quotes ("") to define a string</i></h4>

- With template literals, you can use both single and double quotes inside a string

        let text = `He's often called "Kakrot"`; //He's often called "Kakrot"

- Template literals allows multiline strings

        let text =
                  `The quick
                  brown fox
                  jumps over
                  the lazy dog`;

- Template literals provide an easy way to interpolate variables and expressions into strings.The method is called string interpolation.

        ${...}

- Template literals allow variables in strings

        let firstName = "Son";
        let lastName = "Goku";

        let text = `Welcome ${firstName}, ${lastName}!`;

<h2>Congratulation! You completed Basic of variables and String</h2>

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/assets/fun/gohan.gif" width="800"  height="400" />
</div>

# Data types (primitive data types)

1. Null
2. Undefined
3. Boolean
4. Number
5. BigInt
6. String
7. Symbol

## Null

- The Null type is inhabited by exactly one value: null.

## undefined

- The Undefined type is inhabited by exactly one value: undefined.
- Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an excuse for typeof null === "object").

## boolean

- The Boolean type represents a logical entity and is inhabited by two values: true and false.
- Boolean values are usually used for conditional operations, including ternary operators, if...else, while, etc.

## Number

- The Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) and 21024
- (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER).

## BigInt

- The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (Number.MAX_SAFE_INTEGER) for Numbers.

## Strings

- JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. String methods create new strings based on the content of the current string

## Symbol

- A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.

<h4>In js we typeof operator to check the datatypes of a variable</h4>

        let s = 'abcd' ;
        let n = 10 ;
        let b = true;
        let v = null;
        let u ;
        let sy ='😃'

        console.log(typeof(s));  //string
        console.log(typeof(n));  //number
        console.log(typeof(b));  //boolean
        console.log(typeof(v));  //object
        console.log(typeof(u));  //undefined
        console.log(typeof(sy)); //string

<div dir="rtl">
    <a href="https://github.com/Axhutoxh/javascript/blob/main/study/chapter2/README.md"><< Next</a>
</div>
  <a href="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/README.md"><< Back</a>
