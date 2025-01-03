import logo from "/src/assets/logo.svg";
import twitter from "/src/assets/twitter.svg";
import insta from "/src/assets/instgram.svg";
import face from "/src/assets/facebook.svg";
import linkedin from "/src/assets/linkedinn.svg";

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "1440px",
        height: "147px",
        top: "6647px",
        backgroundColor: "rgba(132,142,160,0.05",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "156px",
          height: "35px",
          top: "31px",
          left: "130px",
        }}
        src={logo}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          width: "261px",
          height: "24px",
          top: "71px",
          left: "130px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          © 2024 Recruito AI . All rights reserved.
        </h3>
      </div>
      <div
        style={{
          position: "absolute",
          width: "261px",
          height: "24px",
          top: "71px",
          left: "910px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          Terms
        </h3>
      </div>
      <div
        style={{
          position: "absolute",
          width: "261px",
          height: "24px",
          top: "71px",
          left: "1050px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          Privacy
        </h3>
      </div>
      <img
        style={{
          position: "absolute",
          width: "16.89px",
          height: "16.89px",
          top: "31px",
          left: "1035px",
          color: "rgba(62, 71, 87, 1)",
        }}
        src={twitter}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          width: "16.89px",
          height: "16.89px",
          top: "31px",
          left: "1100px",
          color: "rgba(62, 71, 87, 1)",
        }}
        src={insta}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          width: "16.89px",
          height: "16.89px",
          top: "31px",
          left: "1155px",
          color: "rgba(62, 71, 87, 1)",
        }}
        src={face}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          width: "16.89px",
          height: "16.89px",
          top: "31px",
          left: "1205px",
          color: "rgba(62, 71, 87, 1)",
        }}
        src={linkedin}
        alt=""
      />
    </div>
  );
};

export default Footer;
