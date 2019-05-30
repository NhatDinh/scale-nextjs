import react from "react";
import Card from "../components/DeparmentCard";
const Hero = () => {
  return (
    <div className="hero">
      <img src="../static/images/hero-logo.svg" alt="hero logo" />
      <h1>Scale is growing. Grow with us.</h1>

      <p>
        We believe that the transition from traditional software to AI <br /> is
        one of the most important shifts of our time.{" "}
      </p>
      <button>View our open position</button>
      <div className="img-container">
        <img width="90%" src="../static/images/hero-img.jpg" alt="hero logo" />
        <div className="teams-banner">
          <h1>POSITIONS BY DEPARtMENT</h1>
          <ul className="departments-list">
            <Card name="Sales" logo="/static/images/sales.svg" alt="my image" />

            <Card
              name="Business"
              logo="/static/images/business.svg"
              alt="my image"
            />
            <Card
              name="Finance"
              logo="/static/images/finance.svg"
              alt="my image"
            />
            <Card
              name="Engineering"
              logo="/static/images/engineering.svg"
              alt="my image"
            />
            <Card
              name="Product"
              logo="/static/images/product.svg"
              alt="my image"
            />
            <Card
              name="Marketing"
              logo="/static/images/marketing.svg"
              alt="my image"
            />
            <Card
              name="People"
              logo="/static/images/people.svg"
              alt="my image"
            />
            <Card
              name="Operations"
              logo="/static/images/operations.svg"
              alt="my image"
            />
          </ul>
        </div>
      </div>
      <style jsx>{`
        .departments-list {
          display: grid;
          list-style-type: none;
          grid-template-columns: repeat(8, 1fr);
          padding: 0;
        }
        .hero {
          text-align: center;
          align-items: center;
          margin-top: 40px;
          position: relative;
          font-size: 30px;
        }
        .hero button {
          background: #ed72e2;
          box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: white;
          padding: 20px 20px;
          cursor: pointer;
        }

        .img-container {
          margin-top: 40px;
          z-index: 0;
        }

        .teams-banner {
          min-width: 1000px;
          height: 200px;
          font-size: 18px;
          background-color: white;
          z-index: 1;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .teams-banner h1 {
          font-size: 20px;
          border-bottom: 1px solid grey;
          padding-bottom: 10px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default Hero;
