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
7. [Booleans and comparison Operator](#comparison-operator)
8. [Truthy and Falsy Values](#truthy-and-falsy-values)
9. [If, else, If elseif else statement](#conditional-statements)
10. [&& || operator](#and-and-or-operator)
11. [Switch statement](#switch-statement)
12. [While loop, for loop, Do while loop, forEach loop](#loops)
13. [Break and continue keyword](#break-and-continue)

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

<h4>In J.S  we have 'typeof' operator to check the datatypes of a variable</h4>

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

# Comparison Operator

        operator        Description

        ==              equal to
        ===             equal value and equal type
        !=              not equal
        !==             not equal value or not equal type
        >               greater than
        >=              greater than or equal to
        <               less than
        <=              less than or equal to
        ?               ternary operator

# truthy and falsy values

## Truthy

- In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN

        if (true)
        if ({})
        if ([])
        if (42)
        if ("0")
        if ("false")
        if (new Date())
        if (-42)
        if (12n)
        if (3.14)
        if (-3.14)
        if (Infinity)
        if (-Infinity)

- If the first object is truthy, the logical AND operator returns the second operand:

        true && "dog"
        // returns "dog"

        [] && "dog"
        // returns "dog"

## Falsy

- A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

        if (false) {
          // Not reachable
        }

        if (null) {
          // Not reachable
        }

        if (undefined) {
          // Not reachable
        }

        if (0) {
          // Not reachable
        }

        if (-0) {
          // Not reachable
        }

        if (0n) {
          // Not reachable
        }

        if (NaN) {
          // Not reachable
        }

        if ("") {
          // Not reachable
        }

# Conditional Statements

- Use 'if' to specify a block of code to be executed, if a specified condition is true
- Use 'else' to specify a block of code to be executed, if the same condition is false
- Use 'else if' to specify a new condition to test, if the first condition is false

Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

        if (condition) {
          //  block of code to be executed if the condition is true
        }

Use the else statement to specify a block of code to be executed if the condition is false.

        if (condition) {
          //  block of code to be executed if the condition is true
        } else {
          //  block of code to be executed if the condition is false
        }

Use the else if statement to specify a new condition if the first condition is false.

        if (condition1) {
          //  block of code to be executed if condition1 is true
        } else if (condition2) {
          //  block of code to be executed if the condition1 is false and condition2 is true
        } else {
          //  block of code to be executed if the condition1 is false and condition2 is false
        }

# And(&&) and Or(||) operator

## And(&&)

- The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
- More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

        const a = 3;
        const b = -2;

        console.log(a > 0 && b > 0);
        // expected output: false

## Or(||)

- The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

        const a = 3;
        const b = -2;

        console.log(a > 0 || b > 0);
        // expected output: true

# Switch statement

- The switch statement is used to perform different actions based on different conditions.
- Use the switch statement to select one of many code blocks to be executed.

        switch(expression) {
          case x:
            // code block
            break;
          case y:
            // code block
            break;
          default:
            // code block
        }

### This is how it works

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

# Loops

- Loops are handy, if you want to run the same code over and over again, each time with a different value.

## Different Kinds of Loops

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true

### for loop

- The for statement creates a loop with 3 optional expressions:

          for (expression 1; expression 2; expression 3) {
            // code block to be executed
          }

          for (let i = 0, len = cars.length, text = ""; i < len; i++) {
           text += cars[i] + "<br>";
          }

  <b><i>Expression 1 </i></b> is executed (one time) before the execution of the code block.

        let i = 2;
        let len = cars.length;
        let text = "";
        for (; i < len; i++) {
          text += cars[i] + "<br>";
        }

  <b><i>Expression 2 </i></b> defines the condition for executing the code block.

  If you omit expression 2, you must provide a break inside the loop

  <b><i>Expression 3</i></b> is executed (every time) after the code block has been executed.

        let i = 0;
        let len = cars.length;
        let text = "";
        for (; i < len; ) {
        text += cars[i] + "<br>";
        i++;
        }

### for in loop

- The JavaScript for in statement loops through the properties of an Object

        for (key in object) {
          // code block to be executed
        }

        const person = {fname:"John", lname:"Doe", age:25};

        let text = "";
        for (let x in person) {
          text += person[x];
        }

- The for in loop iterates over a person object
- Each iteration returns a key (x)
- The key is used to access the value of the key
- The value of the key is person[x]

### Array.forEach()

- The forEach() method calls a function (a callback function) once for each array element.

          const numbers = [45, 4, 9, 16, 25];

          let txt = "";
          numbers.forEach(myFunction);

          function myFunction(value, index, array) {
            txt += value;
          }

                or

        const numbers = [45, 4, 9, 16, 25];

        let txt = "";
        numbers.forEach(myFunction);

        function myFunction(value) {
          txt += value;
        }

  Note that the function takes 3 arguments:

- The item value
- The item index
- The array itself

### for of loop

- The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

        for (variable of iterable) {
          // code block to be executed
        }

<b>variable</b> - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

<b>iterable</b> - An object that has iterable properties.

example

        const cars = ["BMW", "Volvo", "Mini"];

        let text = "";
        for (let x of cars) {
          text += x;
        }

### while loop

- The while loop loops through a block of code as long as a specified condition is true.

        while (condition) {
          // code block to be executed
        }

In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

        while (i < 10) {
          text += "The number is " + i;
          i++;
        }

### Do while loop

- The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

        do {
          // code block to be executed
        }
        while (condition);

The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested

        do {
          text += "The number is " + i;
          i++;
        }
        while (i < 10);

# Break and Continue

## Break

- The break statement "jumps out" of a loop.

In the example , the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 2.

        for (let i = 0; i < 10; i++) {
          if (i === 2) { break; }
          text += "The number is " + i + "<br>";
        }

## Continue

- The continue statement "jumps over" one iteration in the loop.
- The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 2:

        for (let i = 0; i < 10; i++) {
          if (i === 2) { continue; }
          text += "The number is " + i + "<br>";
        }

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/assets/fun/chapter2c.gif"  />
</div>

<div dir="rtl">
    <a href="https://github.com/Axhutoxh/javascript/blob/main/study/chapter2/README.md"><< Next</a>
</div>
  <a href="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/README.md"><< Back</a>
