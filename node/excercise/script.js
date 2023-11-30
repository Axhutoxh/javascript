const fs = require("fs")
const path = require("path")

const srcFilePath = path.resolve('src/srcFile.txt')
const destFilePath =path.resolve('destination/dest.txt')

// create read stream for src File
const readStream = fs.createReadStream(srcFilePath)

// create write stream for src File
const writeStream = fs.createWriteStream(destFilePath)

readStream.pipe(writeStream)

readStream.on("error",err=>{
    console.log("error reading from the file",err)
})

writeStream.on("error",err=>{
    console.log("error writing from the file",err)
})

writeStream.on("finish",()=>{
    console.log("Filed copy sucessfully")
})