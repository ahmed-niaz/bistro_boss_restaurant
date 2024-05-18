import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";


const Slider = () => {
  return (
    <main>
       <h2 className="text-center italic font-cinzel text-[#D99904]">...From 11am to 10pm...</h2>
       <div className="divider w-1/4 mx-auto"></div>
       <h1 className="text-center font-extrabold text-4xl font-cinzel">Order Online</h1>
       <div className="divider w-1/4 mx-auto"></div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src={slider1} className="w-full lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold -mt-16">salads56</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="w-full lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold -mt-16">salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="w-full lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold -mt-16">salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="w-full lg:h-[450px] bg-cover" alt="" />
           <p className="uppercase font-cinzel text-center font-extrabold -mt-16">salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} className="w-full lg:h-[450px] bg-cover" alt="" />
          <p className="uppercase font-cinzel text-center font-extrabold -mt-16">salads</p>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Slider;
