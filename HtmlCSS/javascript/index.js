// // const str = "HiiYashMynameisNikita"

// // const result = str.slice(7,90)
// // console.log(result);

// // const result2 = str.slice(-9)
// // console.log("result2", result2);

// // //split
// // const ocuurance = ()=>{

// //     let obj ={}

// //     str.split("").forEach(char=>{//first converted string into array using split and loop through all the elements
// //        if(obj[char]){//if character is already present in the object then it will increse the lenght of that character
// //         obj[char]++
// //        }else{
// //         obj[char]=1//this is for new occurance
// //        }
// //     })
// //     return obj
// // }
// // console.log(ocuurance())

// // //converting string to boolean .to doing this it helps in form validation
// // const userName = ""
// // const convrtedValue = Boolean(userName)

// // if (convrtedValue==true){
// //     console.log("User Inputed his name");
// // }else{
// //     console.log("user Should have input his/her name first");

// // }

// const myArr = [12, 3, 4, 5, 6, 7, 6];

// // const square=[]
// // myArr.forEach((num)=>{
// //     square.push(num*num)
// // })
// // console.log(square)

// const neNum = myArr.map((num) => num * num);
// console.log(neNum);

// const fruits = ["apple", "mango", "pomogranate"];
// const Uupper = fruits.map((fruit) => fruit.toUpperCase());
// console.log(Uupper);

// const evenNumber = myArr.filter((num) => num % 2 == 0);
// console.log(evenNumber);

// //destructuring

// const { name, age } = {
//   name: "Yash",
//   age: 10,
// };

// //object pass by refrence

// const person1 = { name: "Yash", age: 24 };
// const person2 = person1; //here we pass the reference of person1 to person2
// person2.age = 25; //here we change the value of age in person2 object
// console.log("person 1", person1); //it will affect the person1 object also
// console.log("person 2", person2);

// const students = [
//   { id: 1, name: "yash", grade: "A" },
//   { id: 2, name: "Nikita", grade: "B" },
// ];

// const updateGrade = (id, newGrade) => {
//   const findStudentById = students.find((student) => {
//     return student.id === id;
//   });
//    if(findStudentById){
//     findStudentById.grade = newGrade
//   }else{
//     console.log("no sch a student found...");

//   }
// };
// updateGrade(1,"A")

// console.log(students);

// const addNewStudent = (students,name,grade) =>{
//   const temp={
//     id:students.length+1,
//     name,
//     grade
//   }
//    const updatedStudent = [...students,temp]

//    return updatedStudent
// }
// const result = addNewStudent(students,"Parth","C")
// console.log(result);

// const cart =[
//   {product : "Mobile",price:800,quantity:1},
//   {product : "Laptop",price:1000,quantity:2},
//   {product : "Headphones",price:200,quantity:3},
//   {product : "Mouse",price:100,quantity:1},
// ]
// let price=0
// const totalPrice = cart.map((item)=>{
//   return price+=item.price*item.quantity
// })
// console.log("total Price " ,price);

// let quantity = 0
// const totalQuantity = cart.map((item)=>{
//   return quantity+=item.quantity
// })
// console.log("total quantity",quantity);

// const maxPrice = cart.filter((item)=>{
//   return item.price>500
// })
// console.log(maxPrice);

// const startwith = (cart,char)=>{
//   const productName = cart.filter((item)=>{
//     return item.product.toLowerCase().startsWith(char.toLowerCase())
//   })
// console.log(productName);

// }
// startwith(cart,"L")

const playlist = [
  { id: 1, title: "Song1", artist: "a1" },
  { id: 2, title: "Song2", artist: "a2" },
  { id: 3, title: "Song3", artist: "a3" },
  { id: 4, title: "Song4", artist: "a4" },
  { id: 5, title: "Song5", artist: "a5" },
];
// const songs = (id) => {
//   const removeSong = playlist.findIndex((song) => {
//     return song.id === id;
//   });
//   if (removeSong !== -1) {
//     playlist.splice(removeSong, 1);
//   }
// };
// console.log("before removing",playlist);

// songs(1)
// console.log("after Removing",playlist);

//!move song using splice()

const songToMove = playlist.findIndex((song) => song.id === 1);
if (songToMove !== -1) {
  const [songMove] = playlist.splice(songToMove, 1);
  playlist.splice(2, 0, songMove);
}
console.log(playlist);

//!Insert New song

const newSong = {id:6,title:"song6",artist:"a6"}

// const updatedPlayList = [...playlist,newSong]

// console.log(updatedPlayList);
playlist.splice(5,0,newSong)//here we used splice to insert new song
console.log(playlist);


const songWithTitle = playlist.find((song)=>song.title==="Song3")
console.log(songWithTitle);



