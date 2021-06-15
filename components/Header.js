import { Link } from "react-scroll";
function Header() {
    return (
        <div className="md-12">
            <div className="header__logo">

            </div>
            <div className='text-center mb-5'>
            <Link href="/hireme">
                <a className="btn btn-outline-light">Ver mas</a>
              </Link>
            </div>
        </div>
    )
}

export default Header
