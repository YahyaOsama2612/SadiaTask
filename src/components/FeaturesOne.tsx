import photo from "/src/assets/photo.svg";
import photo2 from "/src/assets/photo2.svg";
import verfivation from "/src/assets/verfication.svg";
import photo3 from "/src/assets/photo3.svg";
import dockerpatternthree from"/src/assets/docker-patern-three.svg"

const FeaturesOne = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{
            width: "482px",
            height: "108px",
            position: "absolute",
            top: "1919px",
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
            Candidate Sourcing & Job Posting
          </h1>
        </div>
        <div
          style={{
            width: "482px",
            height: "72px",
            position: "absolute",
            top: "2051px",
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
            Recruito automatically posts your position or actively hunts top
            candidates across multiple platforms. No human intervention needed.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "582px",
          height: "424px",
          position: "absolute",
          top: "1799px",
          left: "728px",
          border: "1px solid  rgba(132, 142, 160, 0.2)",
          borderRadius: "20px",
        }}
      >
        <img  style={{position:"absolute",width:"237px",height:"237px",top:"-55px",left:"335px",rotate:"-180deg"}} src={dockerpatternthree} alt="" />
        <img
          style={{
            width: "232px",
            height: "288px",
            position: "absolute",
            top: "85px",
            left: "30px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",
            borderRadius: "20px",
          }}
          src={photo}
          alt=""
        />
        <img
          style={{
            width: "232px",
            height: "288px",
            position: "absolute",
            top: "85px",
            left: "307px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",
            borderRadius: "20px",
          }}
          src={photo3}
          alt=""
        />
        <img
          style={{
            width: "355px",
            height: "788px",
            position: "absolute",
            top: "-120px",
            left: "110px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={photo2}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            width: "24px",
            height: "24px",
            top: "75px",
            left: "180px",
          }}
          src={verfivation}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturesOne;
