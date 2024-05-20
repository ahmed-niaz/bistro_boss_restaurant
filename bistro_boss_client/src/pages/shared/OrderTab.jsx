import FoodCard from "./FoodCard";


const OrderTab = ({items}) => {
    return (
       <main>
<div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
       </main>
    );
};

export default OrderTab;