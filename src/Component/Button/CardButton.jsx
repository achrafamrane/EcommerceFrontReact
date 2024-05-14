import Buttons from "./Buttons";
import { FaShoppingCart, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { CardShopping, SocialIconButton } from "../index";
import { useState } from "react";

const CardButton = () => {
  const [open, setOpen] = useState(false);

  const handleAcheter = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="mt-5 grid space-x-1 grid-cols-3 border-t border-gray-200">
        <div>
          <Buttons
            name="Ajouter au panier"
            background="bg-BG_COLOR_YELLOW"
            colorText="white"
            handleFunction={handleAcheter}
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
      <CardShopping open={open} setOpen={setOpen} />
    </div>
  );
};

export default CardButton;
