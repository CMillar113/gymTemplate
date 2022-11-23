import styles from "../styles/facility.module.css"
import Header from "../src/components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

//carasoule of photos, explination of facilities
export default function facility() {
  return (
    <>
      <div>
        <Header title="Facility Tour" />

        <main className={styles.main}>
          <div className={styles.car}>
            <Carousel>
              <div>
                <img src="/image1.jpg" alt="image1" />
              </div>
              <div>
                <img src="/image2.jpg" alt="image2" />
              </div>
              <div>
                <img src="/image5.jpg" alt="image3" />
              </div>
              <div>
                <img src="/image6.jpg" alt="image4" />
              </div>
              <div>
                <img src="/image7.jpg" alt="image4" />
              </div>
              <div>
                <img src="/image8.jpg" alt="image4" />
              </div>
              <div>
                <img src="/image9.jpg" alt="image4" />
              </div>
            </Carousel>
          </div>

          <div className={styles.grid}></div>
        </main>
      </div>
    </>
  )
}
