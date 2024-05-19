import { useEffect, useState } from "react";
import Loader from "../Loader";
import MenuItem from "../../pages/shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const trendyMenu = data.filter((item) => item.category === "popular");
        setMenu(trendyMenu);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="grid  md:grid-cols-2 container mx-auto gap-4 mb-24 mt-8">
      {menu.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </main>
  );
};

export default PopularMenu;
