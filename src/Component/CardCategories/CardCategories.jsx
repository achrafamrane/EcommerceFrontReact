import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CardCategories = ({ deviceType,propsData,title }) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='bg-BG_COLOR_YELLOW_Light'>
     <div className=' bg-BG_COLOR_YELLOW p-2 uppercase 
     font-extrabold text-2xl text-white text-center'>
        {title}</div>
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={deviceType !== "mobile" ? true : false}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    {propsData.map((e) => (
    <div key={e.id} className='m-2 p-1' >
           <img
              src={e.image}
              alt=''    
              className='h-72 w-full'   />
        </div>
        ))}
  </Carousel> 
    </div>
  )
}

export default CardCategories
