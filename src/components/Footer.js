import styles from "../../styles/Home.module.css"

export default function Footer() {
  const address = "40 GymLand, QT14 404"
  return (
    <>
      <footer className={styles.footer}>
        <a
          href={`https://www.google.com/maps/place/Muscleworks+Gym/@51.522499,-0.0661939,17z/data=!3m1!4b1!4m5!3m4!1s0x48761cc5ecbf2cb5:0xd6fa9da0f50d0fcb!8m2!3d51.522431!4d-0.0640226`}
        >
          <p>{address}</p>
        </a>
      </footer>
    </>
  )
}
