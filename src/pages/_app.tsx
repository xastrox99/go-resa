// _app.js
import "../styles/globals.css"; // Ensure you have global styles
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: any) => (
  <>
  <Navbar />
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
