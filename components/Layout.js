import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>jjpelozo</title>
      </Head>
      <Navbar />
      <main className="my-4">{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;
