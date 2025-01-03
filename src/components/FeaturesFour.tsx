import background from "/src/assets/background.svg";
import Stat from "/src/assets/Stat.svg";
import dockerpatternthree from "/src/assets/docker-patern-three.svg";
const FeaturesFour = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "582px",
          height: "424px",
          position: "absolute",
          top: "3119px",
          left: "120px",
          border: "1px solid  rgba(132, 142, 160, 0.2)",
          borderRadius: "20px",
        }}
      >
        <img
          style={{
            position: "absolute",
            width: "237px",
            height: "237px",
            top: "-5px",
            left: "0px",
          }}
          src={dockerpatternthree}
          alt=""
        />
        <img
          style={{
            width: "662px",
            height: "405px",
            position: "absolute",
            top: "40px",
            left: "-86px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={background}
          alt=""
        />
        <img
          style={{
            width: "163px",
            height: "187px",
            position: "absolute",
            top: "160px",
            left: "420px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",
          }}
          src={Stat}
          alt=""
        />
      </div>
      <div>
        <div
          style={{
            width: "482px",
            height: "108px",
            position: "absolute",
            top: "3239px",
            left: "828px",
          }}
        >
          <h1
            style={{
              fontSize: "44px",
              fontWeight: "600",
              lineHeight: "53.68px",
              color: " rgba(11, 25, 40, 1)",
            }}
          >
            AI Video Interviews
          </h1>
        </div>
        <div
          style={{
            width: "482px",
            height: "72px",
            position: "absolute",
            top: "3317px",
            left: "828px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: " rgba(62, 71, 87, 1)",
            }}
          >
            An AI-driven virtual interviewer conducts dynamic, adaptive
            interviews, capturing both technical insights and soft skills.
            Everything is entirely hands-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesFour;
