import PropTypes from 'prop-types'
import styles from './UserGreeting.module.css'

function UserGreeting(props){
  const welcomeMessage =  <h2 className={styles["welcome-message"]}>
                            Welcome Back! {props.username}
                          </h2>

  const loginPrompt = <h2 className={styles["login-prompt"]}>
                        Log-In?
                      </h2>

  return(props.isLoggedIn ?  welcomeMessage :  loginPrompt);
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

// const fruits = [
  //   {id: 1, name: "Apple", calories: 95},
  //   {id: 2, name: "Orange", calories: 45},
  //   {id: 3, name: "Banana", calories: 105},
  //   {id: 4, name: "Coconut", calories: 159},
  //   {id: 5, name: "Pineapple", calories: 37}
  // ];

  // const vegetables = [
  //   {id: 1, name: "Potatoes", calories: 110},
  //   {id: 2, name: "Celery", calories: 15},
  //   {id: 3, name: "Carrots", calories: 25},
  //   {id: 4, name: "Corn", calories: 63},
  //   {id: 5, name: "Brocolli", calories: 50}
  // ];

export default UserGreeting