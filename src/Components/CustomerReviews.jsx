import { FaStarHalfAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-multi-carousel";

const CustomerReviews = () => {
  const data = [
    {
      image: "image/pic-1.png",
      price: "upto 50% off",
    },
    {
      image: "image/pic-2.png",
      price: "upto 50% off",
    },
    {
      image: "image/pic-3.png",
      price: "upto 50% off",
    },
    {
      image: "image/pic-4.png",
      price: "upto 50% off",
    },
  ];
  const allReviews = data.map((product, index) => {
    return (
      <div className="px-lg-2" key={index}>
        <div
          className="rounded-2 bg-white shadow-sm text-center px-2 pb-4 pt-3 m-2 feature_card"
        >
          <img
            src={product.image}
            alt="product"
            height={80}
            width={80}
            className="rounded-circle"
          />
          <p className="m-0 px-3 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto alias excepturi libero facilis aspernatur id!</p>
          <h5 className="fs-5 mt-3">John Doe</h5>
          <div>
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <FaStarHalfAlt color="orange" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid px-0 py-4 bg-light">
      <section className="products" id="products">
        <h2 className="fs-2 text-center mb-3">
          Customer's <span className="cliped_text px-4 py-2">Review</span>
        </h2>
        <div className="container-fluid px-2 px-lg-5"> 
          <div className="px-lg-5 mx-lg-5">
            <div className="px-lg-5">
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                rewind
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

export default CustomerReviews;
