import { Parallax } from 'react-parallax';
const Cover = ({ bg_img, title,heading }) => {
  return (
    <main>
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bg_img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
        className="hero h-[800px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-8xl uppercase font-cinzel font-extrabold">{title}</h1>
            <p className="mb-5">
            {heading}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
     
    </main>
  );
};

export default Cover;
