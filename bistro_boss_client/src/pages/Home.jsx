import Banner from "../components/home/Banner";
import Featured from "../components/home/Featured";
import Menu from "../components/home/Menu";
import Slider from "../components/home/Slider";
import Testimonials from "../components/home/Testimonials";
import Navbar from "./shared/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <div className="container mx-auto">
        <Slider />
      </div>
      <Menu />
      <Featured />
      <Testimonials/>
    </main>
  );
};

export default Home;
