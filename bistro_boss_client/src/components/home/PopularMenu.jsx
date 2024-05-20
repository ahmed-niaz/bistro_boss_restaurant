import Loader from "../Loader";
import MenuItem from "../../pages/shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  if (loading) {
    return <Loader />;
  }
  return (
    <main className="grid  md:grid-cols-2 container mx-auto gap-4 mb-24 mt-8">
      {popular.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </main>
  );
};

export default PopularMenu;
