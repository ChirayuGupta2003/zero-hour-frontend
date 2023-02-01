import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";
import img3_3 from '../../imgs/img3_3.png';


const Ques3_3 = () => {
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
                      QUESTION 3_3
                  </h3>
              </div>
              <div id={styles["question"]} className={styles["questionPadding"]}>
              1.abaaa abbaa baaab baaba aaaaa aabba baaaa aaaaa ababb
              <br />
              <img src={img3_3} />
              <br />
                <br />
                3.Dec 13 2022
                <br />
4.🧢shun with just one emoji is the best holiday 
<br />


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

export default Ques3_3