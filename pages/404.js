import Layout from "../components/Layout";
import Link from "next/link";

function custom404() {
  return (
    <Layout>
      <div className="text-center">
        <h1>404</h1>
        <p>
          Esta página no existe. Por favor regresar a la <span></span>
          <Link href="/">
            <a>página principal.</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default custom404;
