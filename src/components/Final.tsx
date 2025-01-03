import FinalPhoto from "/src/assets/FinalPhoto.svg";
import vector2 from "/src/assets/vector2.svg";
import right from "/src/assets/rigth.svg";

const Final = () => {
  return (
    <div>
      <div
        style={{
          width: "114px",
          height: "114px",
          position: "absolute",
          top: "6210px",
          left: "650px",
          border: "1px solid rgba(132, 142, 160, 0.18)",
          borderRadius: "70%",
          rotate: "-90deg",
        }}
      ></div>
      <div
        style={{
          width: "92px",
          height: "92px",
          position: "absolute",
          top: "6221px",
          left: "660px",
          border: "1px solid rgba(132, 142, 160, 0.18)",
          borderRadius: "70%",
        }}
      ></div>
      <div
        className="circle"
        style={{
          width: "72px",
          height: "72px",
          position: "absolute",
          top: "6231px",
          left: "670px",
          borderRadius: "70%",
        }}
      ></div>
      <img
        style={{
          position: "absolute",
          width: "41px",
          height: "41px",
          top: "6246px",
          left: "686px",
        }}
        src={FinalPhoto}
        alt=""
      />
      <div
        style={{
          width: "476px",
          height: "108px",
          position: "absolute",
          top: "6348px",
          left: "482px",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "600",
            lineHeight: "53.68px",
            textAlign: "center",
          }}
        >
          Ready to enhance your hiring process ?
        </h1>
      </div>
      <div
        className="Request"
        style={{
          position: "absolute",
          width: "183px",
          height: "40px",
          top: "6540px",
          left: "625px",
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
            color: "white",
          }}
        >
          Request a demo
        </p>
        <img
          style={{
            position: "absolute",
            width: "13.69px",
            height: "14.09px",
            left: "15px",
            top: "15px",
          }}
          src={vector2}
          alt=""
        />
      </div>
      <img
        style={{
          width: "415px",
          height: "376px",
          position: "absolute",
          top: "6181px",
          left: "-3px",
         
        }}
        src={right}
        alt=""
      />
       <img
        style={{
          width: "415px",
          height: "376px",
          position: "absolute",
          top: "6181px",
          left: "1000px",
          rotate:"-180deg"
         
        }}
        src={right}
        alt=""
      />
    </div>
  );
};

export default Final;
