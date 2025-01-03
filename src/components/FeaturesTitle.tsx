import vector3 from "/src/assets/vector3.svg"
import vector4 from "/src/assets/vector4.svg"
const FeaturesTitle = () => {
  return (
    <div>
      <div
        style={{
          width: "110px",
          height: "40px",
          top: "1559px",
          left: "661px",
          border: "1px solid",
          borderRadius: "30px",
          position: "absolute",
          borderColor: "rgba(132, 142, 160, 0.2)",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "15px",
            textAlign: "center",
            color: "rgba(0, 76, 211, 1)",
          }}
        >
          Features
        </h3>
      </div>
      <div
        style={{
          width: "748px",
          height: "108px",
          top: "1631px",
          left: "346px",
          position: "absolute",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "600",
            lineHeight: "53.68px",
            textAlign: "center",
            color: " rgba(11, 25, 40, 1)",
          }}
        >
          Streamline your recruitment with our advanced features
        </h1>
      </div>
      <img style={{width:"43px",height:"42.37px",position:"absolute",top:"1591px",left:"1260px",}} src={vector3} alt="" />
      <img style={{width:"43px",height:"42.37px",position:"absolute",top:"1697px",left:"186px" , }} src={vector4} alt="" />
    </div>
  );
};

export default FeaturesTitle;
