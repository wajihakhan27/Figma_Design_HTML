
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Recent_Post from "./component/RecentPost";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div style={{
      backgroundColor: "rgba(207, 166, 166, 0.11)",
      width: "1400px",
      height: "auto",
      top: "-84px",
      left: "-543px",
    }}>
      <div ><Header /></div>
      <div> <HeroSection /></div>
      <div><Recent_Post /></div>
      <div> <Feature /></div>
      <div><Footer /></div>
    </div>
  );
}
