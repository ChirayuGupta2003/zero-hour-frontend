import styles from "../styles/home.module.css"
import video from "../videos/loop1.mp4"
import discord from "../imgs/discord.svg"
import instagram from "../imgs/instagram.svg"
// import "../Scripts/script.js"

const Home = () => {
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
                <a href="#">
                  Home
                </a>
              </div>
              <div className={styles["btn"]}>
                <a href="#">
                  About Us
                </a>
              </div>
              <div className={styles["btn"]}>
                <a href="#">
                  Sponsers
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id={styles["mainInfoDiv"]}>
          <div id={styles["leftInfoDiv"]}>
            <div id={styles["infoContainer1"]}>
              WELCOME TO THE
            </div>
            <div id={styles["infoContainer2"]}>
              NEW REALITY
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

      <div id={styles["main-eventInfo-box"]}>
        <div className={styles["eventInfo-box"]}>
          <div className={styles["eventInfo-img"]}>
          </div>
          {/* <div className={styles["eventInfo-details"]}>
            <h1 className={styles["eventHeading"]}>
              CRYPTIC HUNT
            </h1>
            <div className={styles["eventCard"]}>
              <div id={styles["crypticHunt"]} className={styles["eventInfo-gif"]}>

              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis ullam accusantium libero,
                aperiam qui, non unde eos dolores sunt molestias voluptatibus possimus placeat.
              </p>
            </div>
          </div> */}
          <div className={styles["box"]}>
            <span></span>
            <div className={styles["content"]}>
              <h2>Card One</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
          </div>
        </div>

        <div className={styles["eventInfo-box"]}>
          <div className={styles["box"]}>
            <span></span>
            <div className={styles["content"]}>
              <h2>Card One</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
          </div>
          <div className={styles["eventInfo-img"]}>
          </div>
        </div>

        <div className={styles["eventInfo-box"]}>
          <div className={styles["eventInfo-img"]}>
          </div>
          <div className={styles["box"]}>
            <span></span>
            <div className={styles["content"]}>
              <h2>Card One</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- sponsor section --> */}

      <div className={styles["gallery"]}>
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