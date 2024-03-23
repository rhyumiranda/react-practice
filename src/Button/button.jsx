
function Button(){

  let count = 0;

  const handleClick = (str) => {
    count++;
    count < 3 ? console.log(`${str} you clicked me ${count} times!`) : console.log(`${str} stop clicking me!`)
  };


  return(
    <button onClick={() => handleClick("Bro")}>Click Me?</button>
  );
}

export default Button