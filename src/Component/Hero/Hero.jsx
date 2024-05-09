import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HeroData } from "./HeroData";
const Hero = () => {
  return (
    <div className=" rounded-full">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        {HeroData.map((e) => (
          <div className="h-[600px]" key={e.id}>
            <img
              src={e.image}
              className="bg-cover bg-center bg-no-repeat w-full h-full"
            />
            <p className="legend">{e.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
