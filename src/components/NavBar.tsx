import logo from "/src/assets/logo.svg";
import vector from "/src/assets/vector.svg";

const NavBar = () => {
  return (
    <div
      style={{
        width: "1180px",
        height: "66px",
        top: "32px",
        marginLeft: "80px",
        border: "1px",
        borderRadius: "40px",
        backgroundColor: "rgba(132, 142, 160, 0.05)",
      }}
    >
      <img
        style={{
          width: "156px",
          height: "35px",
          marginTop: "1%",
          marginLeft: "50px",
        }}
        src={logo}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          marginTop: "-49px",
          height: "10px",
          display: "flex",
          marginLeft: "35%",
          gap: "15px",
          lineHeight: "34px",
          fontSize: "14px",
        }}
      >
        {" "}
        <p
          style={{
            color: "rgba(31, 103, 231, 1)",
            backgroundClip: "text",
          }}
        >
          Home
        </p>
        <img
          style={{
            width: "8.01px",
            height: "8.23px",
            marginTop: "20px",
            transform: "translateX(-15px)",
            marginRight: "-5px",
          }}
          src={vector}
          alt=""
        />
        <p>Features</p>
        <p>Pricing</p>
        <p>Resource</p>
      </div>
      <div
        className="contactUs"
        style={{
          width: "130px",
          height: "40px",
          marginTop: "-52px",
          marginLeft: "1020px",
          borderRadius: "30px",
          border: "1px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            textAlign: "center",
            color: "white",
            lineHeight: "34px",
            fontWeight: "600px",
            width: "74px",
            height: "10px",
            marginLeft: "20%",
            transform: "translateY(3px)",
          }}
        >
          Contact Us
        </p>
      </div>
      <style>
        {`
      @media (max-width: 768px) {
        div {
          margin-left: 10%;
          gap: 8px;
          font-size: 12px;
        }

        img {
          width: 6px;
          height: 6px;
          margin-top: 10px;
        }

        p {
          line-height: 24px;
        }
      }

      @media (max-width: 480px) {
        div {
          margin-left: 5%;
          gap: 5px;
          font-size: 10px;
        }

        img {
          width: 5px;
          height: 5px;
          margin-top: 8px;
        }

        p {
          line-height: 20px;
        }
      }
    `}
      </style>
    </div>
  );
};

export default NavBar;
