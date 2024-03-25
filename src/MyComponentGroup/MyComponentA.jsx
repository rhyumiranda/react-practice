// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import MyComponentB from "./MyComponentB.jsx";

function MyComponentA(){

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("Bro Code");
  

  return(
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <MyComponentB user={user}/>
    </div>
  );
}

export default MyComponentA