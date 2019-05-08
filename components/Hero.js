const Hero = () => {
  return (
    <div className="hero">
      <h1>Scale is growing. Grow with us.</h1>

      <p>
        We believe that the transition from traditional software to AI <br /> is
        one of the most important shifts of our time.{" "}
      </p>
      <button>View our open position</button>
      <div className="img-container">
        <img src="../static/images/hero-img.jpg" alt="hero logo" />
        <div className="teams-banner">
          <h1>Our Teams</h1>
        </div>
      </div>
      <style jsx>{`
        .hero {
          text-align: center;
          align-items: center;
          margin-top: 40px;
          position: relative;
        }

        .hero button {
          background: #ed72e2;
          box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 19px;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: white;
          padding: 15px 15px;
          cursor: pointer;
        }

        .img-container {
          margin-top: 40px;
          z-index: 0;
        }

        .img-container img {
          z-index: 0;
          width: 100vw;
        }

        .teams-banner {
          width: 70vw;
          height: 200px;
          background-color: white;
          z-index: 1;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default Hero;
