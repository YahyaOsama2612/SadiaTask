import Ogilvy from "/src/assets/Ogilvy.svg";
import insty from "/src/assets/intys.svg";
import linkedin from "/src/assets/linkedin.svg";


const SectionThree = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "290px",
          height: "24px",
          top: "1346px",
          left: "575px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center",
            color: "rgba(62, 71, 87, 1)",
          }}
        >
          Trusted by the world leading organisations
        </h3>
      </div>
      <div>
        <img
          style={{
            position: "absolute",
            width: "82px",
            height: "32px",
            top: "1410px",
            left: "373px",
          }}
          src={Ogilvy}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            width: "108px",
            height: "49px",
            top: "1402px",
            left: "562px",
          }}
          src={insty}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            width: "104",
            height: "26px",
            top: "1413px",
            left: "777px",
          }}
          src={linkedin}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            width: "82px",
            height: "32px",
            top: "1410px",
            left: "988px",
          }}
          src={Ogilvy}
          alt=""
        />
      </div>
    </div>
  );
};

export default SectionThree;
