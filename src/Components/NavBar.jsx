import { useState } from "react";
import { Link, animateScroll as backScroll } from "react-scroll";
import { HiShoppingCart, HiOutlineSearch, HiUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdDeleteOutline } from 'react-icons/md'

const NavBar = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const hideSearchForm = () => setShowSearchForm((prevState) => false);
  
    return (
    <div className="shadow bg-white px-lg-5">
      <header className="px-2 py-3 px-lg-5 mx-lg-3 d-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center gap-1"
          style={{ cursor: "pointer" }}
          onClick={() => backScroll.scrollToTop()}
        >
          <RiShoppingBasket2Fill color="orange" className="fs-4" />
          <span className="fw-semibold fs-5">Groco</span>
        </div>

        <nav className="d-none d-md-flex align-items-center gap-4">
          <Link to="home" className="nav_link" smooth={true} duration={800}>
            Home
          </Link>
          <Link to="features" className="nav_link" smooth={true} duration={800}>
            Features
          </Link>
          <Link to="products" className="nav_link" smooth={true} duration={800}>
            Products
          </Link>
          <Link
            to="categories"
            className="nav_link"
            smooth={true}
            duration={800}
          >
            Categories
          </Link>
          <Link to="review" className="nav_link" smooth={true} duration={800}>
            Review
          </Link>
          <Link to="blogs" className="nav_link" smooth={true} duration={800}>
            Blogs
          </Link>
        </nav>

        <div
          className="d-flex align-items-center gap-2"
          style={{ zIndex: "999" }}
        >
          <HiBars3BottomRight className="fs-3 bg-light p-1 rounded-1 icons d-md-none" />
          <HiOutlineSearch className={`fs-3 p-1 rounded-1 icons ${showSearchForm ? 'bg-warning text-white': 'bg-light'}`} onClick={() => setShowSearchForm((prevState) => !prevState)} />
          <HiShoppingCart className="fs-3 bg-light p-1 rounded-1 icons" />
          <HiUser className="fs-3 bg-light p-1 rounded-1 icons" />
        </div>

        <div className="position-absolute float_container mt-5 pt-3 me-3 me-lg-5">
          { showSearchForm &&
            <form className="slide_in bg-white shadow d-flex align-items-center justify-content-between px-2 py-1 rounded-1 mt-5">
              <input
                type="text"
                className="search_input px-1"
                id="search-box"
                placeholder="search here..."
              />
              <HiOutlineSearch />
            </form>
          }
        </div>
        {/* <div className="position-absolute float_container mt-5 pt- me-3 me-lg-5">
        <div className="slide_in bg-white shadow px-2 py-1 rounded-1 mt-5">
            <div className="d-flex align-items-center gap-2">
                <img src="image/cart-img-1.png" width={70} height={70} alt="" />
                <div className="content">
                    <h6 className="fs-5 m-0">watermelon</h6>
                    <span className="price">$4.99/-</span>
                    <span className="quantity">qty : 1</span>
                </div>
                <MdDeleteOutline className="fs-4 delete_icon" />
            </div>
            <div className="d-flex align-items-center gap-2">
                <img src="image/cart-img-2.png" width={70} height={70} alt="" />
                <div className="content">
                    <h6 className="fs-5 m-0">onion</h6>
                    <span className="price">$4.99/-</span>
                    <span className="quantity">qty : 1</span>
                </div>
                <MdDeleteOutline className="fs-4 delete_icon" />
            </div>
            <div className="d-flex align-items-center gap-2">
                <img src="image/cart-img-3.png" width={70} height={70} alt="" />
                <div className="content">
                    <h6 className="fs-5 m-0">chicken</h6>
                    <span className="price">$4.99/-</span>
                    <span className="quantity">qty : 1</span>
                </div>
                <MdDeleteOutline className="fs-4 delete_icon" />
            </div>
            <div className="total"> total : $19.69/- </div>
            <a href="#" className="btn">
            checkout
            </a>        
        </div>
        </div> */}
      </header>


      {/* <form action="" className="login-form">
          <h3>login now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>
            forget your password <a href="#">click here</a>
          </p>
          <p>
            don't have an account <a href="#">create now</a>
          </p>
          <input type="submit" value="login now" className="btn" />
        </form> */}
    </div>
  );
};

export default NavBar;
