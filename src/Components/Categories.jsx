import { FaStarHalfAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-multi-carousel";

const Categories = () => {
  const data = [
    {
      image: "image/cat-1.png",
      title: "fresh orange",
      price: "upto 50% off",
    },
    {
      image: "image/cat-2.png",
      title: "fresh orange",
      price: "upto 50% off",
    },
    {
      image: "image/cat-3.png",
      title: "fresh orange",
      price: "upto 50% off",
    },
    {
      image: "image/cat-4.png",
      title: "fresh orange",
      price: "upto 50% off",
    },
  ];
  const allCategories = data.map((product, index) => {
    return (
      <div
        className="rounded-2 bg-white shadow-sm text-center pb-3 pt-5 m-2 feature_card"
        key={index}
      >
        <img
          src={product.image}
          alt="product"
          height={120}
          width={120}
          className="rounded-circle"
        />
        <h4 className="fs-4">{product.title}</h4>
        <p className="m-0">{product.price}</p>
        <div>
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <FaStarHalfAlt color="orange" />
        </div>
        <button className="btn btn-sm btn-outline-dark mt-2 px-4 fw-bold">
          Read More
        </button>
      </div>
    );
  });
  return (
    <div className="container-fluid px-0 py-4 bg-light">
      <section className="products" id="products">
        <h2 className="fs-2 text-center mb-3">
          Our <span className="cliped_text px-4 py-2">Categories</span>
        </h2>
        <div className="container-fluid px-2 px-lg-5">
          <div className="px-lg-5 mx-lg-5">
            <div className="px-lg-4">
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
                    items: 4,
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
                {allCategories}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
