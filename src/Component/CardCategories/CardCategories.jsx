import { Link } from "react-router-dom";
import { ButtonIconsSearch } from "../../Component/index";
import { ProduitData } from "../Produits/ProduitData";

export default function CardCategories() {
  return (
    <div className="bg-white">
      <div className="px-1 py-1 sm:px-2 sm:py-2  ">
        <div className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {ProduitData.slice(0, 8).map((product) => (
            <Link
              key={product.id}
              to={`/DetailProduit/${product.id}`}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-60 w-full object-cover object-center group-hover:opacity-75 group-hover:h-56"
                />
                <ButtonIconsSearch />
              </div>
              <div className="bg-yellow-50 group-hover:opacity-75 font-FONT_ROBOT">
                <h3 className="mt-1 text-base  text-black uppercase">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-red-600">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
