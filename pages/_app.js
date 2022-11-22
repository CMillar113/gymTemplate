import "../styles/globals.css"
import NavBar from "../src/components/NavBar"
import Footer from "../src/components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <div className="defaultLayout">
      <div className="frontLayer">
        <NavBar />
        <Component {...pageProps} />;
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
