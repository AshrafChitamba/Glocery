import { AiFillCalendar } from 'react-icons/ai'
import { HiUser } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import blog1 from '../image/blog-1.jpg'
import blog2 from '../image/blog-2.jpg'
import blog3 from '../image/blog-3.jpg'

const Blogs = () => {
  const data = [
    {
      image: blog1,
      price: "upto 50% off",
    },
    {
      image: blog2,
      price: "upto 50% off",
    },
    {
      image: blog3,
      price: "upto 50% off",
    }
  ];
  const allReviews = data.map((product, index) => {
    return (
      <div
        className="rounded-2 bg-white shadow-sm text-center pb-4 pt-0 m-2 feature_card"
        key={index}
      >
        <img
          src={product.image}
          alt="product"
          height={220}
          className="rounded-top w-100"
        />
        <div className="d-flex align-items-center justify-content-between px-1 py-2 mx-2 border-bottom">
          <div className='d-flex align-items-center gap-2'>
            <HiUser color='orange' className='fs-4' />
            <span className='fs-6'>By Admin</span>
          </div>
          
          <div className='d-flex align-items-center gap-2'>
            <AiFillCalendar color='orange' className='fs-4' />
            <span className='fs-6'>15 Nov 2022</span>
          </div>
        </div>
        <h5 className="fs-5 text-start ps-2 mt-3">Fresh and Organic</h5>
        <h5 className="fs-5 text-start ps-2">Vegetables and Fruits</h5>
        <p className="ps-2 mt-2 text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="text-start ps-2 mt-3">
          <button className="btn btn-outline-dark px-4 fw-semibold">Read More</button>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid px-0 py-4 bg-light" id='blogs'>
      <section>
        <h2 className="fs-2 text-center mb-3">
          Our <span className="cliped_text px-4 py-2">Blogs</span>
        </h2>
        <div className="container-fluid px-2 px-lg-5"> 
          <div className="px-lg-5 mx-lg-5">
            <div className="px-lg-5">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                draggable
                focusOnSelect={false}
                infinite={false}
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 3,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 480,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 581,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                slidesToSlide={1}
                swipeable
              >
                {allReviews}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
