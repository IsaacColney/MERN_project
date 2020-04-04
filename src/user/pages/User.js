import React from "react";
import UserList from "../components/UserList";
const User = () => {
  const USER = [
    {
      id: "u1",
      name: "john",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      place: "3",
    },
  ];
  return (
    <div className='center'>
      <UserList items={USER} />
    </div>
  );
};

export default User;
