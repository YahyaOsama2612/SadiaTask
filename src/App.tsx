import FeaturesFive from "./components/FeaturesFive";
import FeaturesFour from "./components/FeaturesFour";
import FeaturesOne from "./components/FeaturesOne";
import FeaturesThree from "./components/FeaturesThree";
import FeaturesTitle from "./components/FeaturesTitle";
import FeaturesTwo from "./components/FeaturesTwo";
import Final from "./components/Final";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionSex from "./components/SectionSex";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import backgroundOne from "/src/assets/docker-pattern-one.svg";
import backgroundTwo from "/src/assets/docker-pattern-two.svg";

function App() {
  return (
    <>
      <img
        style={{
          position: "absolute",
          width: "537",
          height: "502",
          left: "903px",
          top: "0px",
          opacity: "1",
          mixBlendMode: "luminosity",
        }}
        src={backgroundOne}
        alt=""
      />
      <NavBar />
      <img
        style={{
          position: "absolute",
          width: "537",
          height: "502",
          left: "0px",
          top: "319px",
          opacity: "1",
          mixBlendMode: "luminosity",
          rotate: "-180 deg",
        }}
        src={backgroundTwo}
        alt=""
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <FeaturesTitle />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <FeaturesFour />
      <FeaturesFive/>
      <SectionFour/>
      <SectionFive/>
      <SectionSex/>
      <Final/>
      <Footer/>
    </>
  );
}

export default App;
