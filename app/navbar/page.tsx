import 'bootstrap/js/dist/dom/selector-engine'
// import './../../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import './../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/base-component'
import Link from 'next/link';
import Registeration from './regestration/layout';
import Signin from './signin/layout'

const navbar = ({ Component, pageProps }) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Profile</a> */}
                <Link className="nav-link" href={'/'}>Profile</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Products</a> */}
                <Link className="nav-link" href={'/products'}>Products</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Deals</a> */}
                <Link className="nav-link" href={'deals'}>Deals</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Deals</a> */}
                <Link className="nav-link" href={'datafetch'}>data</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex ml-5">

                {/* <div>{props.regestration}</div> */}
              <Signin />
              <Registeration />


              
              
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}

            </form>
          </div>
        </div>
      </nav>

      
    </>
  )
}

export default navbar;