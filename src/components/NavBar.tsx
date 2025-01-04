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
      <div className="responsive-container">
        <p className="nav-link active">Home</p>
        <img className="nav-icon" src={vector} alt="" />
        <p className="nav-link">Features</p>
        <p className="nav-link">Pricing</p>
        <p className="nav-link">Resource</p>
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
    </div>
  );
};

export default NavBar;
