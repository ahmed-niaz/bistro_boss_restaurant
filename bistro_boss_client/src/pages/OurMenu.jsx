import { Helmet } from "react-helmet-async";
import Navbar from "./shared/Navbar";
import Cover from "./shared/Cover";
import imgMenu from "../assets/menu/bg_menu.jpg";
import dessert_bg from "../assets/menu/dessert-bg.jpeg";
import salad_bg from "../assets/menu/salad-bg.jpg";
import soup_bg from "../assets/menu/soup-bg.jpg";
import pizza_bg from "../assets/menu/pizza-bg.jpg";
import useMenu from "../hooks/useMenu";
import MenuCategory from "../components/ourMenu/MenuCategory";
const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <main>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>

      <Navbar />
      <Cover
        bg_img={imgMenu}
        title="Our Menu"
        heading="Would You Like to try a dish?"
      />
      {/* offered menu items */}
      <div className="p-16">
        <h2 className="text-center italic font-cinzel text-[#D99904]">
          ...Don't Miss...
        </h2>
        <div className="divider w-1/4 mx-auto"></div>
        <h1 className="text-center font-extrabold text-4xl font-cinzel text-black">
          Today's Offer
        </h1>
        <div className="divider w-1/4 mx-auto"></div>
      </div>
      <MenuCategory items={offered} />

      {/* dessert menu items */}
      <MenuCategory
        title="Dessert"
        items={dessert}
        coverImg={dessert_bg}
        heading="Indulge in our decadent array of desserts, crafted to satisfy every sweet tooth. From rich, velvety chocolate creations to light and fruity delights, each dessert is a perfect finale to your dining experience."
      />
      {/* Salad menu items */}
      <MenuCategory
        title="Salad"
        items={salad}
        coverImg={salad_bg}
        heading="Savor the freshness of our salads, featuring a medley of crisp vegetables, flavorful dressings, and imaginative toppings. Perfect as a light meal or a complement to your main course, our salads are a celebration of healthy and delicious eating."
      />
      {/* Soup menu items */}
      <MenuCategory
        title="Soup"
        items={soup}
        coverImg={soup_bg}
        heading="Discover our collection of soups, where each bowl is a blend of nourishing ingredients and comforting flavors. Whether you crave a hearty chowder, a creamy bisque, or a light broth, our soups are sure to warm your soul."
      />
      {/* Pizza menu items */}
      <MenuCategory
        title="Pizza"
        items={pizza}
        coverImg={pizza_bg}
        heading="Explore our mouthwatering selection of pizzas, each crafted with the finest ingredients and baked to perfection. From classic Margherita to gourmet specialties, our pizzas are designed to delight every palate and satisfy every craving."
      />
    </main>
  );
};

export default OurMenu;
