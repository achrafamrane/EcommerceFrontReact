import { useParams } from "react-router-dom";
import { CardGlobalCategories } from "..";
import { AllServicesData } from "../AllServices/AllServicesData";
import Buttons from "../Button/Buttons";
import { FaShoppingCart } from "react-icons/fa";

const features = [
  { name: "Marque", description: "Designed by Good Goods, Inc." },
  {
    name: "Prix",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: "6.25 x 3.55 x 1.15" },
  { name: "Stock", description: "Hand sanded and finished with natural oil" },
  { name: "Couleur", description: "Wood card tray and 3 refill packs" },
  {
    name: "Condition",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
  {
    name: "Livraison",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function DetailProduit() {
  const userId = useParams();
  return (
    <div className="bg-white">
      <div className=" grid max-w-1xl  grid-cols-1  gap-x-20 gap-y-1   sm:py-5 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="grid">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 w-full h-full"
          />
          {/* <img
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
          /> */}
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
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 ">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 mb-10 grid space-x-3 grid-cols-3 border-t border-gray-200">
            <div className="">
              <Buttons
                name="Ajouter au panier"
                background="BG_COLOR_YELLOW"
                colorText="white"
              >
                <FaShoppingCart />
              </Buttons>
            </div>
            <div className="">
              <Buttons
                name="Acheter maintenant "
                background="BG_COLOR_FOOTERGRAY"
                colorText="white"
              >
                <FaShoppingCart />
              </Buttons>
            </div>
            <div className="">sdsd</div>
          </div>
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
