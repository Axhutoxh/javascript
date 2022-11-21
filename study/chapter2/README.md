# Javascript Keywords

<div dir="rtl">
  <a href="https://github.com/Axhutoxh/javascript"> Back >></a>
</div>

# Index

1. [Hello world Program](#hello-world-program)
2. [variables](#variables)

   1. [var]
   2. [let]
   3. [const]

3. [String indexing](#)
4. [Useful string methods](#)
5. [Template Strings](#)
6. [Null, undefined, Bigint, typeof](#)
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

- In Js there are 4 ways to declare variables

1. Using <b>var</b>
2. Using <b>let</b>
3. Using <b>const</b>
4. Using nothing

<h4>What are Variables?</h4>

- Variables are containers for storing data (storing data values).

## var variable

The var keyword is used in all JavaScript code from 1995 to 2015.If you want your code to run in older browsers, you must use var.

- The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function.

      var x = 10;

      function sum(){
      var y = 5;
      console.log(x+y);
      }

      sum()

Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable.
If users use the var variable before the declaration, it initializes with the undefined value

<a href="https://github.com/Axhutoxh/javascript"><< Back</a>
