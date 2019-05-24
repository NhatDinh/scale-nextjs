import React from "react";

class ProductCard extends React.Component {
  componentDidUpdate() {}

  render() {
    return (
      <div className="product-wrapper">
        <h4 className="product-name">{this.props.productName}</h4>
        <p className="product-des">{this.props.productDes}</p>
        <ul>
          {this.props.featureList.map(
            feature =>
              feature.type == this.props.activeType && (
                <li key={feature.id}>
                  <div className="l-col">
                    <span className="feature-name">{feature.title}</span>
                    <p>{feature.featureDes}</p>
                  </div>
                  <div className="r-col">
                    <p className="dark-btn">{feature.pricing}</p>
                  </div>
                </li>
              )
          )}
        </ul>
        <style jsx>{`
          .dark-btn {
            padding: 5px 10px;
            border-radius: 20px;
            background-color: black;
            text-transform: uppercase;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
          }

          .dark-btn:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            transform: translateY(-10px);
            color: #fd62e9;
          }
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
            background-color: #fd9d52;
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
            margin: 10px;
            justify-content: space-between;
            transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .r-col {
            padding-left: 30px;
          }

          .l-col {
            display: grid;
            grid-template-rows: auto auto;
            grid-gap: 10px;
          }

          .product-wrapper ul,
          .product-wrapper p {
            padding: 0;
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default ProductCard;
