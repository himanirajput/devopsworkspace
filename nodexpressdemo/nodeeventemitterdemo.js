const fs=require('fs')
const EventEmitter=require('events')
const readableStream=fs.createReadStream('data.txt');
const writableStream=fs.createWriteStream('data1.txt');
readableStream.pipe(writableStream)
console.log(readableStream instanceof EventEmitter)

console.log(writableStream instanceof EventEmitter)