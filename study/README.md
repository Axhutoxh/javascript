# Javascript Study Material

<div style="float:"right"">Back</div>
# Index

1. [About Javascript](#javascript?)
2. [History](#javascript-history)
3. [JavaScript Working](#how-javascript-works)

   1. [Js Engine Architecture](#js-engine-architecture)

      1. [Google Chrome V8 Js Engine](#google-chromes-javascript-v8-engine)

         1. [About V8 Js Engine](#about-v8-js-engine)

      2. [Mozilla Firefox SpiderMonkey Js Engine](#mozillas-spidermonkey-javascript-engine)

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

    <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/history/javascriptBasic-1.jpg" width="450" />
      &nbsp; &nbsp;
    <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/history/javascriptBasic-2.jpg"  width="450" />

  </p>

# How JavaScript Works

- JavaScript is a multi-paradigm prototype-based language, which uses JavaScript Engine such as Chrome’s V8 engine Firefox SpiderMonkey engine and etc. They convert the high level code into machine-readable code which lets computer to perform some specific tasks. We will understand this using an image..

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/engine/javascriptWorking1.png" width="800" height="300"   />
</div>

<br>
Popular Browser with their JS Engine

1. Google Chrome , Node Js -> V8 Engine
2. Fire Fox -> Spider Monkey
3. Internet Explorer -> Chakra 🪦(R.i.p)
4. Safari -> Safari

## Js Engine Architecture

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/engine/JavascriptP1.png" width="800"  />
</div>

### Google chrome’s JavaScript V8 engine

Firstly, raw JavaScript file goes into the Parser.

1. <b>Parser</b> : <i> It checks for syntax and semantics. Parser is nothing but a lexical analysis that results into the breaking of code into tokens in order to understand their meanings and these tokens gets converted into Abstract Syntax Tree(AST). </i>

2. <b>Abstract Syntax tree</b> : <i>It is a hierarchical tree like structure of program representation which allows interpreter to understand the program. This AST is initially goes to the Interpreter. </i>

3. <b>Interpreter</b> :<i>It lets the AST to get converted into Byte code. In V8 engine, this process is known as Ignition but when some code gets repeated again and again. </i>

4. <b>Profiler</b> :<i> It will check for the repeating code that can be optimized. As soon as, it gets the repeating code, it basically moves the code into compiler. </i>

5. <b>Compiler</b> :<i> It spits out the most optimized byte code. In V8 Engine, This compiler is called as TurboFan. This process gets repeated again and again which means that JavaScript Engine’s speed gets improved since profiler and compiler will be producing and updating the optimized byte code. </i>

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/engine/Javascriptv8.png" width="800"  />
</div>

<br>

#### About V8 Js Engine

- The V8 engine consists of two main Components

1. <b>Memory Heap -></b> <i>this is where the memory allocation happens.</i>
2. <b>Call Stack -></b> <i>this is where your stack frames are as your code executes.</i>

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/engine/v8Engine/engine.png" width="600"   />
</div>

<br />

<h3> Call Stack </h3>

1. JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.

2. The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. That’s all the stack can do.

Let’s see an example. Take a look at the following code:

      function  areaOfSquare(x){
        return x * x;
      }

      function printAreaOfSquare(side){
        let r = areaOfSquare(side);
        console.log(r);
      }

      printAreaOfSquare(6);

<br />

When the engine starts executing this code, the Call Stack will be empty. Afterwards, the steps will be the following:

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/engine/v8Engine/executionSteps.png" width="850"   />
</div>

Each entry in the Call Stack is called a Stack Frame.

<hr />
<h3> The RunTime </h3>
There are APIs in the browser that have been used by almost any JavaScript developer out there (e.g. “setTimeout”). Those APIs, however, are not provided by the Engine.So, we have the Engine but there is actually a lot more. We have those things called Web APIs which are provided by browsers, like the DOM, AJAX, setTimeout and much more.And then, we have the so popular <b>event loop</b> and the <b>callback queue</b>.

<hr />
<h3> Event Loop </h3>

1. one job is done , Web APIs bind result of that job yo callback function and publishes a message to message queue with that callback.
2. The only job of event loop is to look at callback queue and once there is something pending in callback queue , push that callback to the stack.
3. event loop pushes one callback function at a tme , to the stack.

<hr />
<h3>Why Need Async Process in JS </h3>
 As We know js is single threaded so it can handle only one task at a time. Now if a Web APIs takes too much time take js engine can not perfprm another task and apllication is stuck at that time to avoid that issue we use async function.
<hr />

### Mozilla’s SpiderMonkey JavaScript Engine

SpiderMonkey is the first Engine created by Brendan Eich, Creator of JavaScript. He created this Engine at Netscape Communication in 1995 and now it is maintained by Mozilla Foundation. We will understand this using an image.
The Spider Monkey converts the main JS code into the byte code through the compiler, after that the byte code goes into two section Interpreter and JIT Compiler.

<br>
<b>Mozilla’s SpiderMonkey Engine three things are important which are as follows: </b>

1. <b>Interpreter: </b><i>It is used a switch statement to jump to the appropriate chunk of code for the current instruction. The JS-to-JS function call pushes a JavaScript stack frame without growing the C stack. But since JS-to-C-to-JS call stacks are common, the interpreter is re-entrant</i>

2. <b>IonMonkey JIT Compiler: </b><i>It is mainly used for optimization of code.</i>

3. <b>Garbage collector: </b><i>It is used for claiming the memory used by objects that are no longer used by the program. The GC is a mark-and-sweep, non-conservative collector. It is used to hold the JS objects and the string descriptors.</i>

<div align="center">
  <img src="https://github.com/Axhutoxh/javascript/blob/main/study/chapter1/assets/engine/JavascriptSpider.png" width="800"  />
</div>

<hr />
