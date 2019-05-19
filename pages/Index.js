import Link from "next/link";

const Index = () => (
  <div className="body">
    <h1>MAIN PAGE - USE THESE LINKS TO NAVIGATE TO PROTOTYPED PAGES</h1>
    <ul>
      <li>
        <Link href="/careers">
          <a>Careers</a>
        </Link>
      </li>
      <li>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
      </li>
    </ul>
    <style global jsx>{`
      .body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        margin: 0;
        font-size: 20px;
        -webkit-font-smoothing: antialiased;
        line-height: 1.3;
        background-color: white;
        color: #586371;
        width: 100vw;
        height: 1000vh;
      }
      
      .body ul {
        list-style: none;
      }
    `}</style>
  </div>
);

export default Index;
