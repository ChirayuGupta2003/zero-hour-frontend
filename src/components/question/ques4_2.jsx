import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";
import img4_2 from "../../imgs/gif4_2.gif"


const Ques4_2 = () => {
    const [name, setName] = useState("");
    return (
      <div className={styles["notFound"]}>
          <nav id={styles["navbar"]}>
          <h1 className={styles["ques-page-backslash"]}>
              BACKSLASH
          </h1>
      </nav>
      <div id={styles["mainDiv"]}>
          <div id={styles["questionBlock"]}>
              <div id={styles["questionNumber"]} className={styles["questionPadding"]}>
                  <h3>
                      QUESTION 4_2
                  </h3>
              </div>
              <div>
              <img src={img4_2} />
              </div>
              <div id={styles["question"]} className={styles["questionPadding"]}>
                
                Keep trying the question to move to the next one because no one waits
            </div>
          </div>
          <br />
          <TextField id={styles["textfield"]}
                  value={name}
                  label="Your answer here"
                  onChange={(e) => {
                      setName(e.target.value);
                  }}
              />
              <br />
          <div id={styles["submitAnswer"]}>
              <div>
                  <button>ENTER</button>
              </div>
          </div>
      </div>
        </div>
    )
}

export default Ques4_2