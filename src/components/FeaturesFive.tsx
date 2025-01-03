import dockerpatternthree from "/src/assets/docker-patern-three.svg";
import person1 from "/src/assets/person1.svg";
import person2 from "/src/assets/person2.svg";
import person3 from "/src/assets/person3.svg";
const FeaturesFive = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{
            width: "482px",
            height: "108px",
            position: "absolute",
            top: "3679px",
            left: "130px",
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
            Final Shortlist for the Line Manager
          </h1>
        </div>
        <div
          style={{
            width: "482px",
            height: "72px",
            position: "absolute",
            top: "3811px",
            left: "130px",
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
            Recruito presents a curated list of the top performers, complete
            with interview recordings and evaluations, so you can make a swift,
            confident hiring decision.
          </p>
        </div>
      </div>

      <div
        style={{
          width: "582px",
          height: "424px",
          position: "absolute",
          top: "3559px",
          left: "728px",
          border: "1px solid  rgba(132, 142, 160, 0.2)",
          borderRadius: "20px",
        }}
      >
        <img
          style={{
            position: "absolute",
            width: "237px",
            height: "237px",
            top: "-55px",
            left: "335px",
            rotate: "-180deg",
          }}
          src={dockerpatternthree}
          alt=""
        />
        <img
          style={{
            width: "456px",
            height: "162px",
            position: "absolute",
            top: "70px",
            left: "86px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={person1}
          alt=""
        />
        <img
          style={{
            width: "456px",
            height: "162px",
            position: "absolute",
            top: "200px",
            left: "86px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={person2}
          alt=""
        />
        <img
          style={{
            width: "456px",
            height: "162px",
            position: "absolute",
            top: "330px",
            left: "86px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={person3}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturesFive;
