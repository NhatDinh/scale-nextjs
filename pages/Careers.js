import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel, faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel, faAngleRight);
import Header from "../components/Header";
import Nav from "../components/CareersNav";
import Hero from "../components/Hero";
const Careers = () => {
  return (
    <div className="body">
      <Header />
      <Nav />
      <Hero />
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
          min-width: 1200px;
          height: 1000vh;
        }
      `}</style>
    </div>
  );
};

export default Careers;
