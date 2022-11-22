import { router } from "next/router"
import Header from "../src/components/Header"
import styles from "../styles/signUp.module.css"
//Signup page welcoming new members and register for membership
export default function signUp() {
  const href = "https://gym-template-cmillar113.vercel.app"

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <>
      <div>
        <Header title="Sign Up" />
        <main className={styles.main}>
          <h1 className={styles.title}>Sign Up Today</h1>
          <p>
            Sign up online and have your membership ready for when you get in!
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <form className={styles.form} method="post">
                <label for="first">First name:</label>
                <input
                  type="text"
                  id="first"
                  name="first"
                  required
                  maxlength="15"
                />
                <br />
                <label for="last">Last name:</label>
                <input
                  type="text"
                  id="last"
                  name="last"
                  required
                  maxlength="15"
                />
                <br />
                <label for="DOB">Date of Birth:</label>
                <input type="Date" id="DOB" name="DOB" required />
                <br />
                {/* <label for="num">Number:</label>
                <input
                  type="number"
                  id="num"
                  name="num"
                  required
                  minlength="11"
                  maxlength="15"
                /> */}
                <br />
                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
