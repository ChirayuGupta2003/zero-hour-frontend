import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";
import img8_1 from "../../imgs/img8_1.png"

const Ques8_1 = () => {
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
                    QUESTION 8_1
                </h3>
            </div>
            <div id={styles["question"]} className={styles["questionPadding"]}>
                
            X=<img src={img8_1} /><br />
            Z=no. of -... --- -- -...<br />
            A=1st 4 letters of X+Z/n<br />
            A is a meaningful English word<br />
            B=correct spelling of A<br />
            C=reverse(B)<br />
            D=last 4 letters of C<br />
            D is a Meaningful English word<br />
            Y=correct spelling of D<br />
            Find the Y of event.

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

export default Ques8_1