import { useParams } from "react-router-dom";
import {
  CardButton,
  CardGlobalCategories,
  FeatureProduit,
  AllServicesData,
  HeroData,
} from "../../Component/index";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DetailProduit() {
  const id = useParams();
  const FeatureProduits = FeatureProduit.find(
    (item) => item.id === parseInt(id.produitId)
  );
  return (
    <div className="bg-white">
      <div className=" grid max-w-1xl  grid-cols-1  gap-x-20 gap-y-1   sm:py-5 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="grid">
          <Carousel
            showArrows={true}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
          >
            {HeroData.map((e) => (
              <div className="h-[500px]" key={e.id}>
                <img
                  src={e.image}
                  className="bg-cover bg-center bg-no-repeat w-full h-full"
                />
              </div>
            ))}
          </Carousel>

          {/*
           <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          /> 
          */}
        </div>
        <div>
          <h2 className="text-3xl uppercase font-bold  tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-1 lg:gap-x-8">
            {FeatureProduits &&
              FeatureProduits.features.map((feature, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
          </dl>
          <CardButton />
        </div>
      </div>
      <CardGlobalCategories
        deviceType=""
        propsData={AllServicesData}
        title="CAnapé"
        isCarousel={false}
      />
    </div>
  );
}
