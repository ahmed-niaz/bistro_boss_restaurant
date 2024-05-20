import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Review from "./Review";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <main>
      <div className="p-16">
        <h2 className="text-center italic font-cinzel text-[#D99904]">
          ...What Our Client Say...
        </h2>
        <div className="divider w-1/4 mx-auto"></div>
        <h1 className="text-center font-extrabold text-4xl font-cinzel">
          Testimonials
        </h1>
        <div className="divider w-1/4 mx-auto"></div>
      </div>
      <div className="flex container mx-auto">
       <Marquee>
       {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
       </Marquee>
      </div>
    </main>
  );
};

export default Testimonials;
