import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";
import img1_1 from "../../imgs/img1_1.png"

const Ques1_1 = () => {
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
                    QUESTION 1_1
                </h3>
            </div>
            <div>
            <img src={img1_1} />
            </div>
            <div id={styles["question"]} className={styles["questionPadding"]}>
            ( 7+8 ) + 6 = ?
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

export default Ques1_1