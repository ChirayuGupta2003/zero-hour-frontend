import React, { useState } from 'react'
import styles from "../../styles/question.module.css"
import { TextField } from "@mui/material";
import img5_1 from '../../imgs/img5_1.png';
import blank from '../../imgs/blank.png'
import redrec from '../../imgs/redrec.png'


const Ques5_1 = () => {
    const [name, setName] = useState("");
    let audio = new Audio("../../imgs/galaxy_brain_meme_song.mp3");
    const start = () => {
        audio.play()
      }
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
                      QUESTION 5_1
                  </h3>
              </div>
              <div>
                  <img src={img5_1} />
              </div>
              <div>
              <button onClick={start}>Play</button>
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

export default Ques5_1