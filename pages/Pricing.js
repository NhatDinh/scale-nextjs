// This is the Link API
import Link from "next/link";
import Header from "../components/Header";

const Pricing = () => (
  <div>
    <Header />
    <div className="s-container">
      <h1>Pricing</h1>
    </div>
    <style global jsx>{`
      .s-container {
        padding: 0px 20px;
      }
      body {
        margin: 0;
        height: 200vh;
        width: 100vw;
        background-image: linear-gradient(180deg, #fd9d52, #fd62e9, #fd62e9);
      }
    `}</style>
  </div>
);

export default Pricing;
