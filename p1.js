// CRUD Challange ( Create Read Update Delete ) using Node.Js (syncronus)
// Step 1 : Creating a file using the Node.Js module 
// Step 2 : Updating the data 
// Step 3 : reading the data 
// Step 4 : Deleting the data

// taking the module out
const fs = require('fs');

// Making the directory or folder
fs.mkdirSync("curd");

// putting the data into file if it already exit if not then it will be created than data will be added
fs.writeFileSync('curd/text.txt',"My name is Chamoli");

// updating the data
fs.appendFileSync('curd/text.txt'," I am 20 year old");

// reading the file
const data = fs.readFileSync('curd/text.txt',"utf-8");
console.log(data);

// renaming the file
fs.renameSync('curd/text.txt','curd/curd.txt');

// removing the file
fs.unlinkSync('curd/curd.txt');

// removing the directory or folder
fs.rmdirSync("curd");


