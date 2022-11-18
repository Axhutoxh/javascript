# Javascript Study Material

# Index

1. [About Javascript](#javascript?)
2. [History](#javascript-history)
3. [JavaScript Working](#how-javascript-works)

# Javascript

- JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

## Why Study Javascript ?

- JavaScript is one of the 3 languages all web developers must learn:

  1.  HTML to define the content of web pages

  2.  CSS to specify the layout of web pages

  3.  JavaScript to program the behavior of web pages

# Javascript History

- https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/javascriptBasic.pdf document link

  <p float="left">

    <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/javascriptBasic-1.jpg" width="450" />
      &nbsp; &nbsp;
    <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/javascriptBasic-2.jpg"  width="450" />

  </p>

# How JavaScript Works

- JavaScript is a multi-paradigm prototype-based language, which uses JavaScript Engine such as Chrome’s V8 engine Firefox SpiderMonkey engine and etc. They convert the high level code into machine-readable code which lets computer to perform some specific tasks. We will understand this using an image..

  <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/javascriptWorking1.png" width="800" height="300"   />

  Popular Browser with their JS Engine

  1. Google Chrome , Node Js -> V8 Engine
  2. Fire Fox -> Spider Monkey
  3. Internet Explorer -> Chakra 🪦(R.i.p)
  4. Safari -> Safari

  Js Engine Architecture
  Google chrome’s JavaScript V8 engine: Firstly, raw JavaScript file goes into the Parser.

  1. Parser: It checks for syntax and semantics. Parser is nothing but a lexical analysis that results into the breaking of code into tokens in order to understand their meanings and these tokens gets converted into Abstract Syntax Tree(AST).
  2. Abstract Syntax tree: It is a hierarchical tree like structure of program representation which allows interpreter to understand the program. This AST is initially goes to the Interpreter.
  3. Interpreter: It lets the AST to get converted into Byte code. In V8 engine, this process is known as Ignition but when some code gets repeated again and again.
  4. Profiler: It will check for the repeating code that can be optimized. As soon as, it gets the repeating code, it basically moves the code into compiler.
  5. Compiler: It spits out the most optimized byte code.
