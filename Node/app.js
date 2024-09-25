const fs = require("fs");

// let count = 0;
//!---set Interval----
// const intervalId = setInterval(()=>{
//     console.log("hello world");
//     count++
//     if(count==5){
//         clearInterval(intervalId)
//         console.log("We alreday have printed it 5 times thats why we stopped");

//     }

// },1000)

//!----setTimeOut----

// const timeout = setTimeout(()=>{
//   console.log("it will be deleted after 5s");

// },5000)

//!----file system (fs) api
//?---for writing new content in the file------
// fs.writeFile("./text.txt", "and currently i am searching for job", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("new content added in the file");
//   }
// });
//?----for writing new content at the end of the file-----
// fs.appendFile("./text.txt", " hello", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file content has been appended");
//   }
// });
//?-----for deleting the file--------
// fs.unlink("./text.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File has been deleted");
//   }
// });

//!---using promises
//?for creating a file-----

// fs.readFile("./sample.txt", "utf-8", (err, content) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(content);
//   }
// });

// fs.link("./hello.txt", "my name is yash", (err, content) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(content);
//   }
// });

const os = require('os')

// console.log(os.arch());


// console.log("how many free memory that i have", os.freemem());
// console.log("network interfaces", os.networkInterfaces());
console.log(os.platform());
