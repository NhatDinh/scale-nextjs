import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <div className="s-container ">
      <div className="header ">
        <div className="logo-wrapper">
          <Link href="/">
            <a>
              <img src="../static/images/logo.svg" alt="SCALE LOGO" />
            </a>
          </Link>
        </div>
        <div className="nav-wrapper">
          <ul>
            <li>
              <div className="dropdown">
                <span className="dropspan">Products</span>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <span>COMPUTER VISION</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <span className="dropspan">Solutions</span>
                <div className="dropdown-content ">
                  <ul>
                    <li>
                      <span>Self Driving Cars</span>
                    </li>
                    <li>
                      <span>Drones</span>
                    </li>
                    <li>
                      <span>Robotics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <span>Pricing</span>
            </li>
            <li>
              <span>Resources</span>
            </li>
            <li>
              <span>Company</span>
            </li>
          </ul>
        </div>
        <div className="actions-wrapper">
          <ul>
            <li>
              <span>Docs</span>
            </li>
            <li>
              <span>
                Log In <FontAwesomeIcon icon="angle-right" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin: auto;
            text-align: left;
            font-size: 18px;
            padding: 20px 0px;
          }
          .actions-wrapper span:hover {
            opacity: 0.5;
          }
          .nav-wrapper span:hover {
            opacity: 0.5;
          }

          .nav-wrapper ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .nav-wrapper li {
            padding: 0px 10px;
          }

          .actions-wrapper ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            padding: 0;
            margin: 0;
            padding-left: 40px;
          }

          .actions-wrapper li {
            padding-left: 20px;
          }

          .header-container span {
            transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: pointer;
          }

          /* Dropdown menu on hover */
          .dropdown {
            position: relative;
          }

          .dropdown-content {
            display: none;
            position: fixed;
            background-color: white;
            height: 400px;
            width: 380px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            margin-top: 20px;
            z-index: 1;
          }
          .dropdown-content ul {
            display: block;
            text-align: left;
          }

          /* Show the dropdown menu on hover */
          .dropdown:hover .dropdown-content {
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
