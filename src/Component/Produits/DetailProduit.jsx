import { useParams } from "react-router-dom";
import {
  CardButton,
  CardGlobalCategories,
  FeatureProduit,
  AllServicesData,
} from "../../Component/index";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProduitData } from "./ProduitData";

export default function DetailProduit() {
  const id = useParams();
  const FeatureProduits = FeatureProduit.find(
    (item) => item.id === parseInt(id.produitId)
  );
  const ProduitDatas = ProduitData.find(
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
            <div className="h-[500px]">
              <img
                src={ProduitDatas.imageSrc}
                className="bg-cover bg-center bg-no-repeat w-full h-full"
                alt={ProduitDatas.imageAlt}
              />
            </div>
          </Carousel>
        </div>
        {FeatureProduits && (
          <div>
            <h2 className="text-3xl uppercase font-bold  tracking-tight text-gray-900 sm:text-4xl">
              {FeatureProduits.title}
            </h2>
            <p className="mt-4 text-gray-500">
              {FeatureProduits.descriptionProduit}
            </p>

            <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-1 lg:gap-x-8">
              {FeatureProduits.features.map((feature, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
            <CardButton ProduitDatas={ProduitDatas} />
          </div>
        )}
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
