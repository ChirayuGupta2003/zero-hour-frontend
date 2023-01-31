import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";


const Ques7_2 = () => {
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
                      QUESTION 7_2
                  </h3>
              </div>
              <div id={styles["question"]} className={styles["questionPadding"]}>
                  Can a language ever go extinct...Well the dinosaurs did and so did the phoenix...Oh wait, did the
                  pheonix ever exist. I bet the people who liked them were called Phoenician. If they existed, I guess
                  they were just a puny number. Or punic number. What is the native name of tuareg? These questions dont
                  make any sense. Wait, Is this just a big facade or does something add up?
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

export default Ques7_2