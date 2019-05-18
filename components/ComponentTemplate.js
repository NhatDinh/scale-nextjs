import react from "react";

const ComponentTemplate = () => {
  return (
    <div>
      <h1>HERE</h1>

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

        .s-container {
          padding-left: 12vw;
        }
        .m-container {
          padding-left: 6vw;
        }
      `}</style>
    </div>
  );
};

export default ComponentTemplate;
