import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import NavBar from "../src/components/NavBar"

export default function Home() {
  const address = "40 GymLand, QT14 404"
  return (
    <>
      <div>
        <Head>
          <title>Personal Trainer</title>
          <meta
            name="Personal Training Template"
            content="Generated by create next app"
          />
          <link rel="icon" href="/logo.png" />
        </Head>
        <NavBar />

        <main className={styles.main}>
          <div className={styles.banner}>
            <h1 className={styles.title}>
              <a href="/signUp">Start Your Journey</a>
            </h1>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Opening Hours:</h2>
              <br></br>
              <ul>
                <li>Monday: 6am - 9pm</li>
                <li>Tuesday: 6am - 9pm</li>
                <li>Wednesday: 6am - 9pm</li>
                <li>Thursday: 6am - 10pm</li>
                <li>Friday: 6am - 9pm</li>
                <li>Saturday: 6am - 7pm</li>
                <li>Sunday: 8am - 6pm</li>
              </ul>
              <p></p>
            </div>

            <div className={styles.card}>
              <h2>
                Our Location:
                <br></br>
                <br></br>
                {address}
              </h2>
              <br></br>
              <p>
                Drop by to take advantage of our fully equiped gym.
                <br></br> In the imaginary industrial estate there is plenty of
                parking space and pedestrian access
              </p>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href={`https://www.google.com/maps/place/Muscleworks+Gym/@51.522499,-0.0661939,17z/data=!3m1!4b1!4m5!3m4!1s0x48761cc5ecbf2cb5:0xd6fa9da0f50d0fcb!8m2!3d51.522431!4d-0.0640226`}
          >
            <p>{address}</p>
          </a>
        </footer>
      </div>
    </>
  )
}
