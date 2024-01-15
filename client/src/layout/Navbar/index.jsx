import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { MdOutlineHeadphones } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [fixedNav, setfixedNav] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false)
  const scrollNav = () => {
    const windowScroll = window.scrollY;
    windowScroll > 70 ? setfixedNav(true) : setfixedNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, []);

  return (
    <nav>
      <div className="nav-top container">
        Now Hiring: Are you a driven and motivated 1st Line IT Support Engineer?
      </div>
      <hr />
      <div id="desktop-nav" className={` ${fixedNav ? "active" : ""}`}>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="pages">
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/addPage">Add Page</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Case Study</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <MdOutlineHeadphones />
            <span>Call: 10 (78) 837 3647</span>
          </div>
        </div>
      </div>
      <div id="mobile-nav" className={` ${fixedNav ? "active" : ""}`}>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="nav-icon">
          <GiHamburgerMenu onClick={()=>setIsNavOpen(!isNavOpen)} />
          </div>
        </div>
        <div className={`sub-menu ${isNavOpen ? "active" : ''}`}>
           <div className="container">
           <div className="pages">
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/addPage">Add Page</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Case Study</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
          </div>
            </div> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
