import React from "react";
import UserList from "../Components/UserList";
import { Typography } from "@mui/material";

const User = () => {
  const users = [
    { id: "1", name: "Yash", image: "https://picsum.photos/200", places: 3 },
    { id: "2", name: "Nikita", image: "https://picsum.photos/201", places: 4 },
    { id: "1", name: "Parth", image: "https://picsum.photos/202", places: 3 },
    { id: "2", name: "Atharva", image: "https://picsum.photos/203", places: 4 },
    { id: "1", name: "Yash", image: "https://picsum.photos/200", places: 3 },
    { id: "2", name: "Nikita", image: "https://picsum.photos/201", places: 4 },
    { id: "1", name: "Parth", image: "https://picsum.photos/202", places: 3 },
    { id: "2", name: "Atharva", image: "https://picsum.photos/203", places: 4 }
  ];
  return (
    <div style={{background:"#fafafa grey lighten-5"}}>
      <Typography variant="h6" color="inherit" textAlign="center" p={2}>User Page</Typography>
      <UserList items={users}/>
    </div>
  );
};

export default User;
