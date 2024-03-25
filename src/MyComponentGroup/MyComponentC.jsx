import MyComponentD from "./MyComponentD.jsx";

function MyComponentC(props){
  return(
    <div className="box">
      <h1>ComponentC</h1>
      <MyComponentD user={props.user}/>
    </div>
  );
}

export default MyComponentC