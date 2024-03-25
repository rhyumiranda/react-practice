import MyComponentC from "./MyComponentC.jsx";

function MyComponentB(props){
  return(
    <div className="box">
      <h1>ComponentB</h1>
      <MyComponentC user={props.user}/>
    </div>
  );
}

export default MyComponentB