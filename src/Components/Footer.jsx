import { BsArrowRightShort, BsInstagram } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import image from '../../image/payment.png'

const Footer = () => {
  return (
    <div>
      <section className="pt-3 bg-white container-fluid">
        <div className="row border-bottom mx-2 pb-3 px-lg-5">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 text-center text-sm-start">
            <h3
              className="d-sm-flex align-items-center gap-1"
              style={{ cursor: "pointer" }}
            >
              <span className="fw-bold fs-5">Groco</span>
              <RiShoppingBasket2Fill color="orange" className="fs-4" />
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              saepe.
            </p>
            <div>
              <GrFacebookOption className="icons bg-light mx-1 fs-3 rounded-1 p-1" />
              <GrTwitter className="icons bg-light mx-1 fs-3 rounded-1 p-1" />
              <BsInstagram className="icons bg-light mx-1 fs-3 rounded-1 p-1" />
              <FaLinkedin className="icons bg-light mx-1 fs-3 rounded-1 p-1" />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 text-center text-sm-start">
            <h3>Contact Info</h3>
            <p className="my-2">
              <IoIosCall color="orange" />
              <span className="ms-1 hover_slide">(265)994-351-384</span>
            </p>
            <p className="my-2">
              <IoIosCall color="orange" />
              <span className="ms-1 hover_slide">(265)881-833-950</span>
            </p>
            <p className="my-2">
              <MdEmail color="orange" />
              <span className="ms-1 hover_slide">
                ashrafchitambaa3@gmail.com
              </span>
            </p>
            <p className="my-2">
              <MdLocationOn color="orange" />
              <span className="ms-1 hover_slide">Zomba, Malawi - 776</span>
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 text-center text-sm-start">
            <h3>Quick Links</h3>
            <div className="d-grid gap-1">
              <Link to="/" className="my-1">
                <BsArrowRightShort color="orange" className="fs-4" />
                <span className="ms-1 text-dark hover_slide">Home</span>
              </Link>
              <Link to="/" className="my-1">
                <BsArrowRightShort color="orange" className="fs-4" />
                <span className="ms-1 text-dark hover_slide">Features</span>
              </Link>
              <Link to="/" className="my-1">
                <BsArrowRightShort color="orange" className="fs-4" />
                <span className="ms-1 text-dark hover_slide">Products</span>
              </Link>
              <Link to="/" className="my-1">
                <BsArrowRightShort color="orange" className="fs-4" />
                <span className="ms-1 text-dark hover_slide">Categories</span>
              </Link>
              <Link to="/" className="my-1">
                <BsArrowRightShort color="orange" className="fs-4" />
                <span className="ms-1 text-dark hover_slide">Review</span>
              </Link>
              <Link to="/" className="my-1">
                <BsArrowRightShort color="orange" className="fs-4" />
                <span className="ms-1 text-dark hover_slide">Blogs</span>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0 text-center text-sm-start">
            <h3>Newsletter</h3>
            <p style={{textTransform: 'capitalize'}}>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="search_input d-block w-100  bg-light p-2 rounded-2 fs-6" />
            <button className="btn btn-outline-dark fw-bold px-4 my-3">Subscribe</button>
            <img src={image} alt="" />
          </div>
        </div>

        <div className="py-4 text-center" style={{textTransform: 'capitalize'}}>
          <small>
            created by <span className="text-warning fw-semibold"> Ashraf Chitambaa </span> | all rights reserved
          </small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
