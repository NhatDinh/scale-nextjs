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
          <div className="col">
            <h4> Start with 5 free API calls</h4>
            <h4> Developer-friendly API</h4>
          </div>
          <div className="col">
            <h4> Super human accuracy of over 95%.</h4>
            <h4> Build world class AI</h4>
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
        height: 40vh;
        background-color: white;
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr;
        margin-top: 5vh;
      }

      .free-card h4 {
        font-weight: 20;
      }

      .col {
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
      }

      .dark-btn a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default PricingHero;
