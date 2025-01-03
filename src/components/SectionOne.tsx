import star from "/src/assets/star.svg";
import vector2 from "/src/assets/vector2.svg"

const SectionOne = () => {
  return (
    <div
      style={{
        width: "654px",
        height: "132px",
        transform: "translate(50%,50%)",
      }}
    >
      <h1
        style={{
          fontSize: "54px",
          fontWeight: "600px",
          lineHeight: "65.88px",
          textAlign: "center",
        }}
      >
        Revolutionize Your Hiring Process with{" "}
        <span className="span"> Recruito AI</span>
      </h1>
      <img
        style={{
          width: "26.25px",
          height: "25.87px",
          transform: "translate(620px, -95px)",
        }}
        src={star}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          width: "430px",
          height: "48px",
          left: "18%",
          top: "100%",
        }}
      >
        {" "}
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            textAlign: "center",
            color: "rgba(62, 71, 87, 1)",
          }}
        >
          Your fully automated hiring assistant that sources, screens, and
          interviews candidates effortlessly
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          width: "183px",
          height: "40px",
          top: "300px",
          left: "100px",
          borderRadius: "30px",
          border: "1px solid",
          borderColor: "rgba(132, 142, 160, 0.3)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "15px",
            textAlign: "center",
          }}
        >
          Start Your Free Trial
        </p>
      </div>
      <div className="Request"
        style={{
          position: "absolute",
          width: "183px",
          height: "40px",
          top: "300px",
          left: "400px",
          borderRadius: "30px",
          border: "1px solid",
          borderColor: "rgba(132, 142, 160, 0.5)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "15px",
            textAlign: "center",
            color:"white"
          }}
        >
          Request a demo
        </p>
        <img style={{position:"absolute",width:"13.69px",height:"14.09px",left:"15px",top:"15px"}} src={vector2} alt="" />
      </div>
    </div>
  );
};

export default SectionOne;




