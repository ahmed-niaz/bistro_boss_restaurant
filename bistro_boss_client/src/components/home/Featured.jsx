import featured from "../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <main className="background-featured bg-fixed bg-cover bg-no-repeat mb-24">
      <div className="bg-[#151515B2] opacity-90 "> 
        <div className="p-16">
          <h2 className="text-center italic font-cinzel text-[#D99904]">
            ...Check it Out...
          </h2>
          <div className="divider w-1/4 mx-auto"></div>
          <h1 className="text-center font-extrabold text-4xl font-cinzel text-white">
            Featured Menu
          </h1>
          <div className="divider w-1/4 mx-auto"></div>
        </div>

        <div className="md:flex justify-center items-center px-24 py-24 gap-16 text-white ">
          <div>
            <img className="bg-cover bg-no-repeat" src={featured} alt="" />
          </div>
          <div>
            <p>19 May 2024</p>
            <p className="font-cinzel uppercase">Where can i get some?</p>
            <p className="w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn glass bg-[#CD9003] hover:bg-black hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Featured;
