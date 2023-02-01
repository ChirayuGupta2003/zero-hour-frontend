import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";

const Ques5_2 = () => {
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
                    QUESTION 5_2
                </h3>
            </div>
            <div id={styles["question"]} className={styles["questionPadding"]}>
            It is my business to know what other people don't know. She was chained, she was beaten and then brutally sacrificed, only to be rescued. How many kids did she have? 
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

export default Ques5_2