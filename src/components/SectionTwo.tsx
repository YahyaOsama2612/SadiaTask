import SectionTwoImage from "/src/assets/SectionTwoImage.svg";
import SidePicture from "/src/assets/SidePicture.svg";
import LeftSidePicture from "/src/assets/LeftSidePicture.svg";
const SectionTwo = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "1180px",
        height: "626px",
        top: "598px",
        left: "130px",
        borderRadius: "30px",
        backgroundColor: " rgba(207, 216, 227, 0.3)",
      }}
    >
      <h3
        style={{
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "24px",
          textAlign: "center",
          color: " rgba(62, 71, 87, 1)",
        }}
      >
        See how we create an autonomous{" "}
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center",
            color: " rgba(62, 71, 87, 1)",
            textDecoration: "underline",
          }}
        >
          Ai Agent
        </span>
      </h3>
      <img
        style={{
          position: "absolute",
          width: "1180px",
          height: "610px",
          top: "40px",
          left: "0px",
        }}
        src={SectionTwoImage}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          width: "212px",
          height: "214px",
          top: "155px",
          left: "1015px",
          filter:
            "drop-shadow(44px 83px 37px rgba(0, 0, 0, 0.01)) drop-shadow(24px 47px 32px rgba(0, 0, 0, 0.05)) drop-shadow(11px 21px 23px rgba(0, 0, 0, 0.09)) drop-shadow(3px 5px 13px rgba(0, 0, 0, 0.1))",
        }}
        src={SidePicture}
        alt=""
      />
      <img
        style={{
          position: "absolute",
          width: "212px",
          height: "214px",
          top: "260px",
          left: "-55px",
          filter:
            "drop-shadow(44px 83px 37px rgba(0, 0, 0, 0.01)) drop-shadow(24px 47px 32px rgba(0, 0, 0, 0.05)) drop-shadow(11px 21px 23px rgba(0, 0, 0, 0.09)) drop-shadow(3px 5px 13px rgba(0, 0, 0, 0.1))",
        }}
        src={LeftSidePicture}
        alt=""
      />
    </div>
  );
};

export default SectionTwo;
