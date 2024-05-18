import Banner from "../components/home/Banner";
import Menu from "../components/home/Menu";
import Slider from "../components/home/Slider";
import Navbar from "./shared/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <div className="container mx-auto">
        <Slider />
      </div>
      <Menu/>
    </main>
  );
};

export default Home;
