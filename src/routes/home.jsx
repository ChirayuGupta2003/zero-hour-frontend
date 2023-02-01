import React, { useRef } from 'react';
import styles from "../styles/home.module.css";
import video from "../videos/loop1.mp4";
import discord from "../imgs/discord.svg";
import instagram from "../imgs/instagram.svg";
import img1 from "../imgs/decryption_derby.png";
import img2 from "../imgs/treasureHunt.png";
import img4 from "../imgs/Final.png";
import "../fonts/MonumentExtended-Regular.otf";





function Home() {
  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const sponsorsScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });

  };
  const eventScroll = () => {
    myRef1.current.scrollIntoView({ behavior: 'smooth' });

  };
  return (
    <>
      <div id={styles["nav-and-intro"]}>
        <video autoPlay loop muted className={styles["back-video"]}>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles["nav"]}>
          <input type="checkbox" id={styles["nav-check"]} />
          <div className={styles["nav-header"]}>
            <div className={styles["logo"]}>
            </div>
            <div className={styles["backslash-nav"]}>
              BackSlash
            </div>
          </div>
          <div className={styles["nav-btn"]}>
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className={styles["nav-links"]}>
            <div className={styles["btns-container"]}>
              <div className={styles["btn"]}>
                <button href="#" onClick={eventScroll}>
                  Events
                </button>
              </div>
              <div className={styles["btn"]}>
                <button href="#" >
                  About Us
                </button>
              </div>
              <div className={styles["btn"]}>
                <button href="#" onClick={sponsorsScroll}>
                  Sponsors
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id={styles["mainInfoDiv"]}>
          <div id={styles["leftInfoDiv"]}>
            <div id={styles["infoContainer1"]}>
              {/* WELCOME TO THE
            </div>
            <div id={styles["infoContainer2"]}>
              NEW REALITY */}
            </div>
            <div id={styles["infoContainer3"]}>
              <div id={styles["verticalBar"]}>
              </div>
              <div id={styles["textDiv"]}>
                welcome to best and wonderful event of Backslash <br /> be ready for bang bang
              </div>
            </div>
            <div id={styles["getStarted"]}>
              <a href="" className={styles["get-started"]}>
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- event info section --> */}

      <div id={styles["main-eventInfo-box"]} ref={myRef1}>
        <div className={styles["eventInfo-box"]}>
          <div className={styles["eventInfo-img"]}>
            <img src={img1} alt="" />
          </div>
          <div className={styles["box"]}>
            <span></span>
            <div className={styles["content"]}>
              <h2>Decryption Derby</h2>
              <p>An overnight online treasure hunt with clues all over the internet, using ciphers, extracting metadata or just figuring out the pop culture reference.</p>
            </div>
          </div>
        </div>

        <div className={styles["eventInfo-box"]}>
          <div className={styles["box"]}>
            <span></span>
            <div className={styles["content"]}>
              <h2>Trail of the Wrecked Will</h2>
              <p>An extensive on-campus treasure hunt.
                The teams would have to perform 10 varied tasks at different locations on the campus leading them to the O'Keefe.
              </p>
            </div>
          </div>
          <div className={styles["eventInfo-img"]}>
            <img src={img2} alt="" />
          </div>
        </div>

        <div className={styles["eventInfo-box"]}>
          <div className={styles["eventInfo-img"]}>
          </div>
          <div className={styles["box"]}>
            <span></span>
            <div className={styles["content"]}>
              <h2>The secret study of O'Keefe</h2>
              <p>A horror themed mystery room based around O’Keefe’s study. Participants will have to search for clues and hidden objects within the room. Only 6 out of all the teams would qualify for the final round.</p>
            </div>
          </div>
        </div>

        <div className={styles["eventInfo-box"]}>
          <div className={styles["box"]}>
            <span></span>
            <div className={styles["content"]}>
              <h2>..............?</h2>
              <p>To be reveled Soon</p>
            </div>
          </div>
          <div className={styles["eventInfo-img"]}>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>

      {/* <!-- sponsor section --> */}

      <div className={styles["gallery"]} ref={myRef}>
        <div className={styles["gallery-container"]}>
          <img className={`${styles["gallery-item"]} ${styles["gallery-item-1"]}`}
            src="https://images.unsplash.com/photo-1613208602577-50fd21015cca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            data-index="1" />
          <img className={`${styles["gallery-item"]} ${styles["gallery-item-2"]}`}
            src="https://images.unsplash.com/photo-1674787433572-37ae9a76555a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            data-index="2" />
          <img className={`${styles["gallery-item"]} ${styles["gallery-item-3"]}`}
            src="https://images.unsplash.com/photo-1674787433572-37ae9a76555a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            data-index="3" />
          <img className={`${styles["gallery-item"]} ${styles["gallery-item-4"]}`}
            src="https://images.unsplash.com/photo-1674787433572-37ae9a76555a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            data-index="4" />
          <img className={`${styles["gallery-item"]} ${styles["gallery-item-5"]}`}
            src="https://images.unsplash.com/photo-1674787433572-37ae9a76555a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            data-index="5" />
        </div>
        <div className={styles["gallery-controls"]}>
        </div>
      </div>

      {/* <!-- footer section --> */}

      <footer>
        <div className={styles["footer-container"]}>
          <div className={styles["item"]}>
            <a href="" target="_blank">
              <img id={styles["insta"]} className={styles["img"]} src={instagram} /></a>
            <a href="" target="_blank">
              <img id={styles["discord"]} className={styles["img"]} src={discord} /></a>
          </div>
          <div className={styles["item"]}>
            <p>&copy BackSlash. All rights reserved.</p>
          </div>
          <div className={styles["item"]}>
            <div className={styles["footer-links"]}>
              <a href="" target="_blank">About Us</a>
              <a href="" target="_blank">Contact Us</a>
              <a href="" target="_blank">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
