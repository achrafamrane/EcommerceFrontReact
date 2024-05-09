import { CarouselCategories, CardCategories } from "../index";

const CardGlobalCategories = ({ title, isCarousel, deviceType, propsData }) => {
  return (
    <div className="bg-white">
      <div
        className=" bg-BG_COLOR_YELLOW p-2 uppercase 
    font-extrabold text-2xl text-white text-center"
      >
        {title}
      </div>
      {isCarousel ? (
        <CarouselCategories deviceType={deviceType} propsData={propsData} />
      ) : (
        <CardCategories />
      )}
    </div>
  );
};

export default CardGlobalCategories;
