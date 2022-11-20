import "../styles/globals.css";
import NavBar from "../src/components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="defaultLayout">
      <div className="frontLayer">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
