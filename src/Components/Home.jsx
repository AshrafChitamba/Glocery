const Home = () => {
    const styles = {
      background: 'url(../image/banner-bg.webp)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  return (
    <div className="d-grid justify-content-center container-fluid py-5" style={styles}>
      <section id="home" className="py-5">
        <div class="content text-center">
          <h3 style={{textTransform: 'capitalize'}}>
            fresh and <span className="text-warning">organic</span> products for your
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero nostrum veniam facere tempore nisi.
          </p>
          <button class="btn custom_btn btn-outline-dark shadow-lg px-4 fw-bold">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
