import react from "react";
import ProductCard from "./ProductCard";

const PricingToggle = () => {
  return (
    <div className="m-container">
      <h2>PLANS</h2>
      <div className="center-wrapper">
        <div className="pricing-toggle">
          <span id="standard">Standard</span>
          <span id="enterprise">Enterprise</span>
        </div>
      </div>
      <div className="pc-wrapper">
        <ProductCard
          productName="Computer Vision"
          productDes="High level understanding from images or videos."
          featureList={[
            {
              id: 1,
              title: "Video Annotation",
              content: "Contact Sales",
              color: "#FD9D52"
            },
            {
              id: 2,
              title: "Semantic Segmentation",
              content: "$6.40 / IMAGE",
              color: "#FD9D52"
            }
          ]}
        />
        <ProductCard
          productName="Natural Language"
          productDes="Processing of text in order to extract abstract syntactic and semantic content."
          featureList={[
            {
              id: 1,
              title: "Ocr Transcription",
              content: "$0.12 / INVOICE + $0.08 / ANNOTATION",
              color: "#FD9D52"
            },
            {
              id: 2,
              title: "Text Categorization",
              content: "$0.08 / CATEGORIZATION",
              color: "#FD9D52"
            }
          ]}
        />{" "}
      </div>

      <style jsx>{`
        .pc-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .pricing-toggle {
          align-items: center;
          width: 600px;
          height: 60px;
          background: white;
          border: 1px solid #c4c4c4;
          border-radius: 40px;
          justify-content: center;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 0 10px;
        }

        .pricing-toggle span {
          color: black;
          font-size: 26px;
          font-weight: 400;
        }

        .pricing-toggle #enterprise {
          padding: 5px 20px;
          background: #fd62e9;
          border-radius: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid black;
          cursor: pointer;
        }

        .pricing-toggle #standard {
          padding: 5px 20px;
          background: height;
          border-radius: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        h2 {
          color: black;
          text-align: center;
          font-size: 40px;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default PricingToggle;
