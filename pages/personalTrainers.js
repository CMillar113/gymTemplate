import styles from "../styles/personalTrainers.module.css"
import Header from "../src/components/Header"
//Cards of each personal trainer and their info
export default function personalTrainers() {
  return (
    <>
      <div>
        <Header title="Personal Trainers" />

        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.profilePicture}>
                <img className={styles.img} src="/trainer1.jpeg" alt="logo" />
              </div>

              <h2>Chris Lifts</h2>
              <p>100 years of experience, build muscle, lose fat.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.profilePicture}>
              <img className={styles.img} src="/trainer2.webp" alt="logo" />
            </div>
            <h2>Scrawn Coleman</h2>
            <p>This is indeed light weight and I can help you lift it</p>
          </div>

          <div className={styles.card}>
            <div className={styles.profilePicture}>
              <img className={styles.img} src="/trainer3.jpeg" alt="logo" />
            </div>
            <h2>Oogway Fitness</h2>
            <p>Quit, dont quit, noodles, dont noodles</p>
          </div>

          <div className={styles.card}>
            <div className={styles.profilePicture}>
              <img className={styles.img} src="/trainer4.jpeg" alt="logo" />
            </div>
            <h2>Jack Ed</h2>
            <p>Train hard, train often, hit the goals you want</p>
          </div>
        </main>
      </div>
    </>
  )
}
