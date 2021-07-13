const fs=require("fs");

fs.writeFile("read.txt","Welcome To My Channel",(err)=>{
    console.log("file has created and written");
});

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log("Content : "+data);
    console.log("Error : "+err);
})

fs.appendFile("read.txt","Hello Everyone!!",(err)=>{
    console.log("Edited");
});

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log("Content : "+data);
    console.log("Error : "+err);
})