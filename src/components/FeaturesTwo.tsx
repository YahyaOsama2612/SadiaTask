import dockerpatternthree from "/src/assets/docker-patern-three.svg";
import bookOne from "/src/assets/bookOne.svg";
import bookTwo from "/src/assets/bookTwo.svg";
import bookThree from "/src/assets/bookThree.svg";
import Search from "/src/assets/Search.svg";
const FeaturesTwo = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "582px",
          height: "424px",
          position: "absolute",
          top: "2239px",
          left: "120px",
          border: "1px solid  rgba(132, 142, 160, 0.2)",
          borderRadius: "20px",
        }}
      >
        {" "}
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
            width: "470px",
            height: "76px",
            position: "absolute",
            top: "90px",
            left: "36px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={bookOne}
          alt=""
        />
        <img
          style={{
            width: "424px",
            height: "76px",
            position: "absolute",
            top: "180px",
            left: "62px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={bookTwo}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            left: "380px",
            top: "235px",
            width: "154px",
            height: "154px",
          }}
          src={Search}
          alt=""
        />
        <img
          style={{
            width: "380px",
            height: "76px",
            position: "absolute",
            top: "270px",
            left: "86px",
            filter:
              "box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.05) box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04) box-shadow: 0px 11px 7px 0px rgba(0, 0, 0, 0.03) box-shadow 0px 20px 8px 0px rgba(0, 0, 0, 0.01) box-shadow 0px 31px 9px 0px rgba(0, 0, 0, 0)",

            borderRadius: "20px",
          }}
          src={bookThree}
          alt=""
        />
      </div>
      <div>
        <div
          style={{
            width: "482px",
            height: "108px",
            position: "absolute",
            top: "2359px",
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
            Automated Resume Screening & Filtering
          </h1>
        </div>
        <div
          style={{
            width: "482px",
            height: "72px",
            position: "absolute",
            top: "2491px",
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
            Our AI instantly sorts and prioritizes resumes, highlighting only
            the strongest matches and discarding unqualified applicants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTwo;
