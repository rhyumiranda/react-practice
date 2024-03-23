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

export default UserGreeting