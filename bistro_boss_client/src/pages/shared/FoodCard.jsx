const FoodCard = ({ item }) => {
  const { name, recipe, image ,price} = item;
  return (
    <main>
      <div className="card card-compact bg-[#F3F3F3] shadow-xl h-[500px]">
        <figure>
          <img src={image} className="w-full " alt={image} />
          
        </figure>
        <p className="absolute right-0 p-2 m-8 text-white font-cinzel font-extrabold text-2xl rounded-md bg-[#BB8506]">${price}</p>
        <div className="card-body">
          <h2 className=" text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodCard;
