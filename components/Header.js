import { Link } from "react-scroll";
function Header() {
    return (
        <div className="">
               <div className="header__logo">
            <img src="logo_transparent.png" alt="" className="h-100 w-100"/>
        </div>
            <div className='text-center mb-5'>
            <Link to="proyectos" smooth duration={1000}>
                <a className="btn btn-outline-light">Ver mas</a>
              </Link>
            </div>
        </div>
    )
}

export default Header
