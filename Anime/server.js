const express = require("express");
const animerouter = require("./Routes/AnimeRouter");
const app = express();
const PORT = 5000;

// const anime = [
//   {
//     id: "1",
//     title: "Naruto",
//     writer: "Masashi Kishimoto",
//     release_date: "2002-10-03",
//   },
//   {
//     id: "2",
//     title: "One Piece",
//     writer: "Eiichiro Oda",
//     release_date: "1999-10-20",
//   },
//   {
//     id: "3",
//     title: "Death Note",
//     writer: "Tsugumi Ohba",
//     release_date: "2006-10-04",
//   },
//   {
//     id: "4",
//     title: "Fullmetal Alchemist: Brotherhood",
//     writer: "Hiromu Arakawa",
//     release_date: "2009-04-05",
//   },
//   {
//     id: "5",
//     title: "Attack on Titan",
//     writer: "Hajime Isayama",
//     release_date: "2013-04-07",
//   },
//   {
//     id: "6",
//     title: "My Hero Academia",
//     writer: "Kōhei Horikoshi",
//     release_date: "2016-04-03",
//   },
//   {
//     id: "7",
//     title: "Demon Slayer: Kimetsu no Yaiba",
//     writer: "Koyoharu Gotouge",
//     release_date: "2019-04-06",
//   },
//   {
//     id: "8",
//     title: "Jujutsu Kaisen",
//     writer: "Gege Akutami",
//     release_date: "2020-10-03",
//   },
//   {
//     id: "9",
//     title: "Tokyo Revengers",
//     writer: "Ken Wakui",
//     release_date: "2021-04-11",
//   },
//   {
//     id: "10",
//     title: "Chainsaw Man",
//     writer: "Tatsuki Fujimoto",
//     release_date: "2022-10-12",
//   },
// ];

app.use('/anime',animerouter)


// app.post('/anime',(req,res)=>{
// const newData = req.body
// anime.push(newData)
//     res.json({
//         status:"Success",
//         message:"new data added successfully",
//         data:anime
//     })
// })

app.listen(PORT,console.log(`the Server is running on this ${PORT}`))