import Image from '../image/banner-bg.webp'
const Home = () => {
    const styles = {
      background: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  return (
    <div className="d-grid justify-content-center container-fluid py-5" style={styles} id='home'>
      <section id="home" className="py-5">
        <div className="content text-center">
          <h3 style={{textTransform: 'capitalize'}}>
            fresh and <span className="text-warning">organic</span> products for your
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero nostrum veniam facere tempore nisi.
          </p>
          <button className="btn custom_btn btn-outline-dark shadow-lg px-4 fw-bold">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
