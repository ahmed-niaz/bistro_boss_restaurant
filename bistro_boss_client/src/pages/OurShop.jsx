import { Helmet } from "react-helmet-async";
import Navbar from "./shared/Navbar";
import Cover from "./shared/Cover";
import shop_bg from "../assets/shop/shop_bg.jpg";
import CategoryCard from "../components/ourShop/CategoryCard";

const OurShop = () => {
  return (
    <main>
      <Helmet>
        <title>Bistro Boss || Our Shop</title>
      </Helmet>

      <Navbar />
      <Cover
        bg_img={shop_bg}
        title="Our Shop"
        heading="Discover the best selection of products curated with care to meet all your needs. From everyday essentials to unique finds, our shop offers an exceptional shopping experience tailored just for you."
      />
     <div className="mt-24 mb-10">
     <CategoryCard/>
     </div>
    </main>
  );
};

export default OurShop;
