import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/login.module.css"

import AuthContext from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(username, password);
    } catch (error) {
      const errorText = error.response.data.message;
      setError(errorText);
    }
  };

  return (
    <>
      <div className={styles["container on"]}>
        <div className={styles["screen"]}>
          <h3 className={styles["title"]}>
            CONNECTION ESTABLISHED
          </h3>
          <div className={styles["box--outer"]}>
            <div className={styles["box"]}>
              <div className={styles["box--inner"]}>
                <div className={styles["content"]}>
                  <div className={styles["holder"]}>
                    <b>Welcome to QUADRA</b> — the high-performance automotive solutions with&nbsp;a&nbsp;soul. Please enter your
                    QUADRA VIP user credentials.
                    <br/>
                      <br/>
                        <div className={styles["row"]}>
                          <div className={styles["col col__left label"]}>
                            Login
                          </div>
                          <div className={styles["col col__center"]}>
                            <input type="text" id="login" maxLength="32" value="QUADRA V-TECH" readOnly />
                          </div>
                        </div>
                        <form method="post" action="/password">
                          <div className={styles["row"]}>
                            <div className={styles["col col__left label"]}>
                              Password
                            </div>
                            <div className={styles["col col__center"]}>
                              <input type="password" id="password" name="password" required="required" placeholder="" data-error="" maxLength="32" autoComplete="new-password"
                                autoFocus={true} />
                            </div>
                          </div>
                          {/* <!-- <b className="flash">ACCESS DENIED</b> --> */}
                          <div className={styles["row"]}>
                            <button type="submit" id="submit" name="submit">[login]</button>
                          </div>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
      );
};

      export default Login;
