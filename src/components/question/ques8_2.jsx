import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";
import img8_2_1 from "../../imgs/img8_2_1.png"
import img8_2_2 from "../../imgs/img8_2_2.png"

const Ques8_2 = () => {
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
                    QUESTION 8_2
                </h3>
            </div>
            <div id={styles["question"]} className={styles["questionPadding"]}>
            Today is 29th Feb 2004 and someone uses this <br/>
            <img src={img8_2_1} /><br />
            What date is he headed to in 21st century?<br />
            Steps: <br />
1: ... .  .. ....  .. .  . .....  ... .....  . .  .... ....  .. ...  ... ...  .... .....  ... ..  . ..  . .....  .... ..<br />
2: Sign<br />
3: <img src={img8_2_2} /><br />
4: Prominent characteristic (3 lettered)<br />
5: nme usiuincpeubrsbttto ihr
                




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

export default Ques8_2