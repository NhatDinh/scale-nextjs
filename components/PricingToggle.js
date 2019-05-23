import react from "react";
import ProductCard from "./ProductCard";

class PricingToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeType: "" };
  }

  clickStandard = () => {
    this.setState({
      activeType: "standard"
    });
  };

  clickEnterprise = () => {
    this.setState({
      activeType: "enterprise"
    });
  };

  componentDidUpdate() {}

  render() {
    return (
      <div className="m-container">
        <h2>PLANS</h2>
        <div className="center-wrapper">
          <div className="pricing-toggle">
            <span
              onClick={this.clickStandard}
              id="standard"
              className={
                this.state.activeType == "standard" ? "spanActive" : "span"
              }
            >
              Standard
            </span>
            <span
              onClick={this.clickEnterprise}
              className={
                this.state.activeType == "enterprise" ? "spanActive" : "span"
              }
              id="enterprise"
            >
              Enterprise
            </span>
          </div>
        </div>
        <div className="pc-wrapper">
          <ProductCard
            className="product-card"
            activeType={this.state.activeType}
            productName="Computer Vision"
            productDes="High level understanding from images or videos."
            featureList={[
              {
                id: 1,
                title: "Video Annotation",
                pricing: "Contact Sales",
                type: "enterprise",
                featureDes: "Human-powered video annotation"
              },
              {
                id: 2,
                title: "Semantic Segmentation",
                pricing: "$6.40 / IMAGE",
                type: "standard",
                featureDes:
                  "Human-powered pixel-level image segmentation and annotation"
              },
              {
                id: 3,
                title: "Sensor Fusion",
                pricing: "Contact Sales",
                type: "enterprise",
                featureDes:
                  "All the data you need to build 3D perception using LiDAR, camera, and radar"
              }
            ]}
          />
          <ProductCard
            className="product-card"
            productName="Natural Language"
            activeType={this.state.activeType}
            productDes="Processing of text in order to extract abstract syntactic and semantic content."
            featureList={[
              {
                id: 1,
                title: "Ocr Transcription",
                pricing: "$0.12 / INVOICE + $0.08 / ANNOTATION",
                type: "standard",
                featureDes: "Invoice, Menu, and Form Transcription"
              },
              {
                id: 2,
                title: "Text Categorization",
                pricing: "$0.08 / CATEGORIZATION",
                type: "standard",
                featureDes: "Content Moderation, Data Tagging, Other"
              },
              {
                id: 3,
                title: "Comparison",
                pricing: "$0.08 / COMPARISON",
                type: "standard",
                featureDes: "Deduplication, A/B Comparisons, Others"
              }
            ]}
          />
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
            font-size: 26px;
            font-weight: 400;
            text-transform: uppercase;
          }

          .span {
            padding: 5px 20px;
            background-color: white;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .spanActive {
            padding: 5px 20px;
            background-color: white;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
            border: 1px solid black;
            background: #fd62e9;
            color: white;
            transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
            box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
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
  }
}
export default PricingToggle;
