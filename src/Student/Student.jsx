import PropType from 'prop-types'

function Student(props){
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropType.string,
  age: PropType.number,
  isStudent: PropType.bool,
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}

export default Student;