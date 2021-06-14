import "bootswatch/dist/darkly/bootstrap.min.css"
import "../global.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  <Head>
  <title>jjpelozo</title>
</Head>
  return <Component {...pageProps} />
}

export default MyApp