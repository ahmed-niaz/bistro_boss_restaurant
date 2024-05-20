import Cover from "../../pages/shared/Cover";
import MenuItem from "../../pages/shared/MenuItem";

const MenuCategory = ({ items,title,coverImg,heading }) => {
  return (
  <main>
    {title &&   <Cover
        bg_img={coverImg}
        title={title}
        heading={heading}
      />}
      <div className="grid  md:grid-cols-2 container mx-auto gap-4 mb-4 mt-16">
      {items.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
     
    </div>
    <div className="flex items-center justify-center mb-24">
       <button className="btn glass">Order Your Favourite Food</button>
       </div>
  </main>
  );
};

export default MenuCategory;
