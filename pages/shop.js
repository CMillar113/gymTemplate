import styles from "../styles/personalTrainers.module.css"
import Header from "../src/components/Header"
//Display and links to different online stores for gym gear and supps
export default function shop() {
  return (
    <>
      <div>
        <Header title="Shop" />

        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Building</h2>
              <br></br>
              <p>In Progress</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
