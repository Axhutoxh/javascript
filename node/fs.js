const fs = require("fs");


//READ

// const content = fs.readFileSync("f1.txt")
// console.log(''+content)


//WRITE

// const content = fs.writeFileSync('f2.txt','i am writing in f2.txt')

//Append

// fs.appendFileSync("f2.txt",' appended text in f2')

//Delete

// fs.unlinkSync('f3.txt')


// ~~~~~ OPERATION ON FOLDER/DIRECTORY ~~~~~
// if(!fs.existsSync('myDir'))
//     fs.mkdirSync('myDir') // Create a Directory

// fs.rmdirSync('myDir') // Remove a Directory


fs.writeFileSync('path.js','')