// CRUD Challange ( Create Read Update Delete ) using Node.Js (Asyncronus)
// Step 1 : Creating a file using the Node.Js module 
// Step 2 : Updating the data 
// Step 3 : reading the data 
// Step 4 : Deleting the data

// taking the module out
const fs = require('fs');

// creating a directory
fs.mkdir("curdA",(err)=>{
    console.log("Directory created");
});

// creating a file and placing the data
fs.writeFile("curdA/curd.txt","Hello this is a Asynchronous curd",(err)=>{
    console.log("File created");
});

// updating the file
fs.appendFile("curdA/curd.txt"," made by Chamoli",(err)=>{
    console.log("Changes made");
});

// read the file
fs.readFile("curdA/curd.txt","utf-8",(err,data)=>{
    console.log(data);
})

// renaming the file
fs.rename("curdA/curd.txt","curdA/aCurd.txt",(err)=>{
    console.log("rename done");
})

// Deleting the file
fs.unlink("curdA/curd.txt",(err)=>{
    console.log("Deleting done");
})

// Deleting the directory
fs.rmdir("curdA",(err)=>{
    console.log("Directory Deleted");
})