import Link from "next/link"
import styles from "../../styles/NavBar.module.css"

export default function NavBar() {
  return (
    <div class={styles.bar}>
      <a class="active" href="/">
        Home
      </a>
      <a href="/">Facility Tour</a>
      <a href="/">Personal Trainers</a>
      <a href="/">Community</a>
      <a href="/">Shop</a>
    </div>
  )
}
