import React from "react";

const ProductCard = props => {
  return (
    <div className="product-wrapper">
      <h4 className="product-name">{props.productName}</h4>
      <p className="product-des">{props.productDes}</p>
      <ul>
        {props.featureList.map(feature => (
          <li key={feature.id}>
            <span className="feature-name">{feature.title}</span>
            <p>{feature.content}</p>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .product-wrapper {
          margin: 20px;
          padding: 0 20px;
          color: black;
          background-color: white;
          box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.25);
          border-radius: 16px;
          font-size: 16px;
          height: 500px;
          display: grid;
          grid-template-rows: 0.5fr 1fr 3fr;
        }
        .product-wrapper h4 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          font-size: 26px;
        }
        .feature-name {
          display: flex;
          background-color: #fd9d52;
          border-radius: 20px;
          justify-content: center;
          text-transform: uppercase;
        }

        .product-wrapper li {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0;
          margin: 20px 0px;
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
};

export default ProductCard;
