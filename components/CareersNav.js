import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div className="s-container">
      <div className="pagelogo-wrapper">
        <h3>Careers</h3>
      </div>
      <div className="nav-wrapper">
        <ul>
          <li>
            <span>Mission</span>
          </li>
          <li>
            <span>Value</span>
          </li>
          <li>
            <span>In The News</span>
          </li>
          <li>
            <span>Stories</span>
          </li>
          <li>
            <span>Our Impact</span>
          </li>
          <li>
            <span>Benefits</span>
          </li>
          <li>
            <span>Open Positions</span>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .s-container {
            font-size: 14px;
            background-color: white;
            color: #ed72e2;
            display: grid;
            grid-template-columns: 0.4fr 1fr;
            margin: auto;
            font-size: 14px;
            line-height: 19px;
            padding: 0 75px 0 75px;
            margin: 0;
          }
          .pagelogo-wrapper {
            text-align: center;
          }
          .s-container ul {
            display: flex;
            flex-direction: row;
            list-style: none;
          }

          .s-container span {
            padding-left: 20px;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
