import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";
import img3_2_1 from "../../imgs/img3_2_1.png"
import img3_2_2 from "../../imgs/img3_2_2.png"


const Ques3_2 = () => {
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
                      QUESTION 3_2
                  </h3>
              </div>
              <div className={styles["parent3_2"]}>
                <img id={styles["img3_2_1"]} src={img3_2_1} />
                <img id={styles["img3_2_2"]} src={img3_2_2} />
            </div>
              <div id={styles["question"]} className={styles["questionPadding"]}>
              Aspsfemxkt
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

export default Ques3_2