import { useState } from "react";
import { Link, animateScroll as backScroll } from "react-scroll";
import { HiShoppingCart, HiOutlineSearch, HiUser } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

const NavBar = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showcarts, setShowcarts] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const showNav = () => {
    setShowLogin((prevState) => false);
    setShowcarts((prevState) => false);
    setShowSearchForm((prevState) => false);
    setShowLinks(prevState => !prevState)
  };
  const showSearch = () => {
    setShowLogin((prevState) => false);
    setShowcarts((prevState) => false);
    setShowLinks(prevState => false)
    setShowSearchForm((prevState) => !prevState);
  };
  const showSignIn = () => {
    setShowSearchForm((prevState) => false);
    setShowcarts((prevState) => false);
    setShowLinks(prevState => false)
    setShowLogin((prevState) => !prevState);
  };
  const cartsShow = () => {
    setShowSearchForm((prevState) => false);
    setShowLogin((prevState) => false);
    setShowLinks(prevState => false)
    setShowcarts((prevState) => !prevState);
  };

  const NavLinks = ({grid}) => {
    return (
      <nav className={`${grid ? 'd-grid d-md-none shadow bg-white rounded-1 slide_in px-2 py-3 px-4 mt-2 d-grid' : 'd-none d-md-flex'} align-items-center gap-4`}>
        <Link to="home" className="nav_link" smooth={true} duration={800}>
          Home
        </Link>
        <Link to="features" className="nav_link" smooth={true} duration={500}>
          Features
        </Link>
        <Link to="products" className="nav_link" smooth={true} duration={800}>
          Products
        </Link>
        <Link to="categories" className="nav_link" smooth={true} duration={800}>
          Categories
        </Link>
        <Link to="review" className="nav_link" smooth={true} duration={800}>
          Review
        </Link>
        <Link to="blogs" className="nav_link" smooth={true} duration={800}>
          Blogs
        </Link>
      </nav>
    );
  };

  return (
    <div className="shadow bg-white px-lg-5 fixed-top">
      <header className="px-2 py-3 px-lg-5 mx-lg-3 d-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center gap-1"
          style={{ cursor: "pointer" }}
          onClick={() => backScroll.scrollToTop()}
        >
          <RiShoppingBasket2Fill color="orange" className="fs-4" />
          <span className="fw-semibold fs-5">Groco</span>
        </div>

        <NavLinks grid={false} />

        <div
          className="d-flex align-items-center gap-2"
          style={{ zIndex: "999" }}
        >
          <MdMenu className={`fs-3 p-1 rounded-1 icons ${
              showLinks ? "bg-warning text-white" : "bg-light"
            }`}
            onClick={showNav} />
          <HiOutlineSearch
            className={`fs-3 p-1 rounded-1 icons ${
              showSearchForm ? "bg-warning text-white" : "bg-light"
            }`}
            onClick={showSearch}
          />
          <HiShoppingCart
            className={`fs-3 p-1 rounded-1 icons ${
              showcarts ? "bg-warning text-white" : "bg-light"
            }`}
            onClick={cartsShow}
          />
          <HiUser
            className={`fs-3 p-1 rounded-1 icons ${
              showLogin ? "bg-warning text-white" : "bg-light"
            }`}
            onClick={showSignIn}
          />
        </div>
      </header>
      <div className="position-absolute float_container me-3 me-lg-5">
        {showSearchForm && (
          <form className="slide_in bg-white shadow d-flex align-items-center justify-content-between px-2 py-1 rounded-1 mt-2">
            <input
              type="text"
              className="search_input px-1"
              id="search-box"
              placeholder="search here..."
            />
            <HiOutlineSearch />
          </form>
        )}
      </div>
      <div className="position-absolute float_container me-3 me-lg-5">
        {showcarts && (
          <div className="slide_in bg-white shadow px-2 py-1 rounded-1 mt-2">
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
        )}
      </div>
      <div className="position-absolute float_container me-3 me-lg-5">
        {showLogin && (
          <form className="slide_in bg-white shadow px-2 py-3 px-4 rounded-1 mt-2 d-grid text-center">
            <h5 className="fs-5" style={{ textTransform: "uppercase" }}>
              login now
            </h5>
            <input
              type="email"
              placeholder="your email"
              className="bg-light search_input mb-2 p-2 rounded-1 fs-6"
            />
            <input
              type="password"
              placeholder="your password"
              className="bg-light search_input mb-2 p-2 rounded-1 fs-6"
            />
            <p className="fs-6" style={{ textTransform: "capitalize" }}>
              don't have an account ?{" "}
              <a href="#" className="text-warning">
                create now
              </a>
            </p>
            <div className="text-center">
              <button
                className="btn btn-sm btn-outline-dark fw-bold px-4"
                style={{ textTransform: "capitalize" }}
              >
                login now
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="position-absolute float_container me-3 me-lg-5">
        {showLinks && <NavLinks grid={true} />}
      </div> 
    </div>
  );
};

export default NavBar;
