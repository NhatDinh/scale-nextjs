import React from "react";

class ProductCard extends React.Component {
  showSelected() {
    console.log(this.props);
  }
  componentDidUpdate() {
    this.showSelected();
  }

  render() {
    return (
      <div className="product-wrapper">
        <h4 className="product-name">{this.props.productName}</h4>
        <p className="product-des">{this.props.productDes}</p>
        <ul>
          {this.props.featureList.map(feature => (
            <li key={feature.id}>
              <div className="l-col">
                <span className="feature-name">{feature.title}</span>
                <p>{feature.featureDes}</p>
              </div>
              <div className="r-col">
                <p>{feature.pricing}</p>
              </div>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .product-wrapper {
            margin: 20px;
            padding: 0 10px;
            color: black;
            background-color: white;
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.25);
            border-radius: 16px;
            font-size: 16px;
            display: grid;
            grid-template-rows: 1fr 1fr 3fr;
            font-weight: 600;
            overflow: hidden;
          }

          .product-wrapper h4 {
            font-size: 26px;
          }
          .feature-name {
            background-color: #e23e7c;
            border-radius: 20px;
            padding: 5px;
            text-transform: uppercase;
            color: white;
            font-weight: 700;
            font-size: 12px;
          }

          .product-wrapper li {
            display: grid;
            grid-template-columns: 2fr 3fr;
            padding: 0;
            margin-top: 10px;
            justify-content: space-between;
          }
          .r-col {
            padding-left: 30px;
          }
          .product-wrapper ul,
          .product-wrapper p {
            padding: 0;
            margin: 0;
            color: #585858;
          }
        `}</style>
      </div>
    );
  }
}

export default ProductCard;
