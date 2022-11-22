import Header from "../src/components/Header"
import styles from "../styles/Home.module.css"

export default function Home() {
  const address = "40 GymLand, QT14 404"
  return (
    <>
      <div>
        <Header title="Gym Name" />
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
      </div>
    </>
  )
}
