import Buttons from "./Buttons";
import { FaShoppingCart, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { CardShopping, SocialIconButton } from "../index";
import { useState } from "react";
const initialProduitData = [];
const CardButton = ({ ProduitDatas }) => {
  const [open, setOpen] = useState(false);
  const [produitData, setProduitData] = useState(initialProduitData);

  const handleAddToPanier = () => {
    setOpen(!open);
    const productExists = produitData.some(
      (product) => product.id === ProduitDatas.id
    );
    if (!productExists) {
      setProduitData([...produitData, ProduitDatas]);
    }
  };

  const handleAcheter = () => {
    setOpen(!open);
    setProduitData([ProduitDatas]);
  };
  return (
    <div>
      <div className="mt-5 grid space-x-1 grid-cols-3 border-t border-gray-200">
        <div>
          <Buttons
            name="Ajouter au panier"
            background="bg-BG_COLOR_YELLOW"
            colorText="white"
            handleFunction={handleAddToPanier}
          >
            <FaShoppingCart />
          </Buttons>
        </div>
        <div>
          <Buttons
            name="Acheter maintenant "
            background="bg-BG_COLOR_FOOTERGRAY"
            colorText="white"
            handleFunction={handleAcheter}
          >
            <FaCheckCircle />
          </Buttons>
        </div>
        <div>
          <Buttons
            name="Commander"
            background="bg-red-700"
            colorText="white"
            handleFunction={handleAcheter}
          >
            <HiOutlinePencil />
          </Buttons>
        </div>
      </div>
      <div>
        <Buttons
          name="Appeler"
          background="bg-green-700"
          colorText="white"
          handleFunction={handleAcheter}
        >
          <FaPhoneAlt />
        </Buttons>
      </div>
      <SocialIconButton />
      <CardShopping open={open} setOpen={setOpen} produitData={produitData} />
    </div>
  );
};

export default CardButton;
