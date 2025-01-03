import Arrow from "/src/assets/Arrow.svg";
const SectionFive = () => {
  return (
    <div>
      <div
        style={{
          width: "128px",
          height: "40px",
          top: "4862px",
          left: "652px",
          border: "1px solid",
          borderRadius: "30px",
          position: "absolute",
          borderColor: "rgba(132, 142, 160, 0.2)",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "15px",
            textAlign: "center",
            color: "rgba(0, 76, 211, 1)",
          }}
        >
          FAQs
        </h3>
      </div>
      <div
        style={{
          position: "absolute",
          width: "980px",
          height: "446px",
          top: "4957px",
          left: "230px",
          border: " 1px solid rgba(132, 142, 160, 0.2)",
          borderRadius: "10px",
          background: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "211px",
            height: "26px",
            top: "20px",
            left: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "21px",
              fontWeight: "600",
              lineHeight: "25.62px",
              textAlign: "center",
            }}
          >
            What is an AI Agent?
          </h1>
        </div>
        <img
          style={{
            position: "absolute",
            width: "24px",
            height: "24px",
            top: "20px",
            left: "920px",
          }}
          src={Arrow}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            width: "913px",
            height: "168px",
            top: "70px",
            left: "40px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: " rgba(62, 71, 87, 1)",
            }}
          >
            An AI agent is a software system that understands language, learns
            from data, and takes actions automatically to achieve specific
            goals. In the hiring world, an AI agent can review resumes, interact
            with candidates, and provide recommendations, all without manual
            oversight. Key capabilities include: - Natural Language Processing
            to interpret resumes and candidate responses - Adaptive Learning to
            improve accuracy and efficiency over time - Task Automation to
            handle repetitive or time-consuming steps - Data-Driven Insights for
            better predictions and decisions
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            width: "980px",
            top: "200px",
            left: "0px",
            border: "1px solid rgba(132, 142, 160, 0.2)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",

            height: "26px",
            top: "230px",
            left: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "21px",
              fontWeight: "600",
              lineHeight: "25.62px",
              textAlign: "center",
            }}
          >
            What are the Benefits of Using Recruito’s AI Agent?
          </h1>
        </div>
        <img
          style={{
            position: "absolute",
            width: "24px",
            height: "24px",
            top: "230px",
            left: "920px",
          }}
          src={Arrow}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            width: "980px",
            top: "310px",
            left: "0px",
            border: "1px solid rgba(132, 142, 160, 0.2)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",

            height: "26px",
            top: "350px",
            left: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "21px",
              fontWeight: "600",
              lineHeight: "25.62px",
              textAlign: "center",
            }}
          >
            Next Steps?
          </h1>
        </div>
        <img
          style={{
            position: "absolute",
            width: "24px",
            height: "24px",
            top: "350px",
            left: "920px",
          }}
          src={Arrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionFive;
