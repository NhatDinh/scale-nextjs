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
    </div>
    <style global jsx>{`
      .s-container {
        padding-left: 12vw;
      }

      .hero {
        color: white;
      }
    `}</style>
  </div>
);

export default PricingHero;
