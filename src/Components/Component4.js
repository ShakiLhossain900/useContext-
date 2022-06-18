import React,{useContext} from "react";
import { UserContext } from "./UserContext";
const Component4 = () => {
   const {user, text} = useContext(UserContext);
  return (
    <div>
        <h1>{text}</h1>
      <h2>{user.id}</h2>
      <h4>{user.name}</h4>
    </div>
  );
};

export default Component4;
