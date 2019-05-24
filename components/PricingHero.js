import Link from "next/link";

const PricingHero = () => (
  <div>
    <div className="hero">
      <div className="s-container">
        <h1>Pricing</h1>
        <p>
          Start building for free, only pay for what you use. Then add an Annual
          Enterprise plan for higher volume
          <br /> or require turnaround and quality SLAs.
        </p>
      </div>
      <div className="m-container">
        <div className="free-card">
          <div className="col">
            <div>
              <h3>Try Scale API for free</h3>
              <p>
                No credit card required. No additional costs <br />
                or termination fees.
              </p>
            </div>
            <div className="dark-btn">
              <Link href="/careers">
                <a>CREATE FREE ACCOUNT</a>
              </Link>
            </div>
          </div>
          <div className="mid-col">
            <h4>🔥 Start with 5 free API calls</h4>
            <h4>🔥 Developer-friendly API</h4>
            <h4>🔥 Super human accuracy of over 95%.</h4>
            <h4>🔥 Build world class AI</h4>
          </div>
          <div>
            <ul className="social-proof-col">
              <li className="logo">
                <img src="../static/images/nuTonomy.jpg" alt="nuTonomy logo" />
              </li>
              <li className="logo">
                <img src="../static/images/lyft-logo.png" alt="lyft logo" />
              </li>
              <li className="logo">
                <img
                  src="../static/images/pinterest-logo.png"
                  alt="pinterest logo"
                />
              </li>
              <li className="logo">
                <img
                  src="../static/images/openai-logo.png"
                  alt="nuTonomy logo"
                />
              </li>
              <li className="logo">
                <img
                  src="../static/images/airbnb-logo.png"
                  alt="nuTonomy logo"
                />
              </li>
              <li className="logo">
                <img src="../static/images/uber-logo.png" alt="nuTonomy logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <style global jsx>{`
      .hero {
        color: white;
      }
      .free-card {
        color: black;
        background-color: white;
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 5vh;
      }

      .free-card h4 {
        font-weight: 20;
      }

      .mid-col {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
      }

      .dark-btn {
        display: flex;
        width: 245.52px;
        height: 37px;
        background: black;
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        padding: 10px 20px;
        style: none;
        color: white;
        justify-content: center;
        align-items: center;
        transition: 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .social-proof-col {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 20px;
      }

      .social-proof-col img {
        width: 100px;
        height: 100px;
      }
      .social-proof-col li {
        list-style: none;
      }

      .dark-btn:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        transform: translateY(-10px);
      }

      .dark-btn a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default PricingHero;
