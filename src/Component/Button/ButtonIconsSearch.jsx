import { TfiSearch } from "react-icons/tfi";

const ButtonIconsSearch = () => {
  return (
    <button
      type="button"
      className="absolute inset-y-1/2 inset-x-1/2 transform 
      -translate-y-1/2 -translate-x-1/2 flex items-center justify-center 
       
      w-10 h-10 rounded-full opacity-0 group-hover:opacity-75 
      transition duration-300 font-bold ease-in-out  uppercase"
    >
      <TfiSearch
        className="h-52 text-gray-500"
        style={{ width: "32px", height: "32px" }}
      />
    </button>
  );
};

export default ButtonIconsSearch;
