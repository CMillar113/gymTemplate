import Link from "next/link"
import styles from "../../styles/NavBar.module.css"

export default function NavBar() {
  return (
    <div class={styles.bar}>
      <a class="active" href="/">
        Home
      </a>
      <a href="/facility">Facility Tour</a>
      <a href="/personalTrainers">Personal Trainers</a>
      {/* <a href="/shop">Shop</a> */}
    </div>
  )
}
