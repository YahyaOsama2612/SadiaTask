import dockerpatternthree from "/src/assets/docker-patern-three.svg";
import Assiment from "/src/assets/Assiments.svg";
const FeaturesThree = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{
            width: "482px",
            height: "108px",
            position: "absolute",
            top: "2799px",
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
            Online Assessment
          </h1>
        </div>
        <div
          style={{
            width: "482px",
            height: "72px",
            position: "absolute",
            top: "2877px",
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
            Candidates complete a quick skill or behavioral test to validate
            their capabilities. This process is seamlessly integrated and fully
            automated.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "582px",
          height: "424px",
          position: "absolute",
          top: "2679px",
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
            position: "absolute",
            width: "503px",
            height: "406px",
            top: "10%",
            left: "5%",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",
          }}
          src={Assiment}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturesThree;
