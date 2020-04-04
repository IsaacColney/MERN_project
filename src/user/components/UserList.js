import React from "react";
import "./UserList.css";
import UserItem from "../components/UserItem";
const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>UserData not found</h2>
      </div>
    );
  } else {
    return (
        <ul className='users-list'>
          {props.items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              place={user.place}
            />
          ))}
        </ul>
      );
  }
    
};

export default UserList;
