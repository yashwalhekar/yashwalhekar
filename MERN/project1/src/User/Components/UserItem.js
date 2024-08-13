import { Avatar } from "@mui/material";
import React from "react";
import "./UserItem.css";
import { Link } from "react-router-dom";
import Cards from "../../Shared/UIElements/Cards";
const UserItem = (props) => {
  return (
    <div className="user-item ">
      <Cards className="user-item__content">
        <Link to={`/${props.id}/Places`}>
          <div className="user-item__image">
            <Avatar alt={props.name} src={props.image}  sx={{ width: 56, height: 56 }}/>
          </div>
          <div className="user-item__info">
            <h4>{props.name}</h4>
            <h6>
              {props.PlaceCount} {props.PlaceCount === 1 ? "Place" : "Places"}
            </h6>
          </div>
        </Link>
      </Cards>
    </div>
  );
};

export default UserItem;
