import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h1>No Data Found</h1>
      </div>
    );
  }
  console.log(props.items);

  return (
    <div className="container">
      <div className="row">
        {props.items.map((user) => {
          return (
            <div className="col-12 col-md-3 p-4 users-list ">
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                PlaceCount={user.places}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
