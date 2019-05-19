import react from "react";
import ProductCard from "./ProductCard";

class PricingToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showStandard: false };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      showStandard: !this.state.showStandard
    }));
  }
  componentDidMount() {
    console.log(this.state.selected);
  }
  render() {
    return (
      <div className="m-container">
        <h2>PLANS</h2>
        <div className="center-wrapper">
          <div className="pricing-toggle" onClick={this.handleClick}>
            <span
              className={
                this.state.showStandard ? "standard standardActive" : "standard"
              }
            >
              Standard
            </span>
            <span
              className={
                this.state.showStandard
                  ? "enterprise"
                  : "enterprise enterpriseActive"
              }
            >
              Enterprise
            </span>
          </div>
        </div>
        {this.state.selected}
        <div className="pc-wrapper">
          <ProductCard
            productName="Computer Vision"
            productDes="High level understanding from images or videos."
            featureList={[
              {
                id: 1,
                title: "Video Annotation",
                content: "Contact Sales"
              },
              {
                id: 2,
                title: "Semantic Segmentation",
                content: "$6.40 / IMAGE"
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
                content: "$0.12 / INVOICE + $0.08 / ANNOTATION"
              },
              {
                id: 2,
                title: "Text Categorization",
                content: "$0.08 / CATEGORIZATION"
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

          .enterprise {
            padding: 5px 20px;
            background-color: white;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .enterpriseActive {
            border: 1px solid black;
            background: #fd62e9;
            color: white;
          }

          .standard {
            padding: 5px 20px;
            background-color: white;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 2s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .standardActive {
            border: 1px solid black;
            background-color: #fd62e9;
            color: white;
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
