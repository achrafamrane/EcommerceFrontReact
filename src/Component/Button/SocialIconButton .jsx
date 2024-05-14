import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialIconButton = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-1">
      <div
        href="https://www.facebook.com/"
        title="Facebook"
        className={`text-black cursor-pointer  text-lg bg-white transition duration-300 ease-in-out flex items-center justify-center p-2 rounded-full shadow-md hover:shadow-lg hover:bg-white hover:text-blue-500 `}
      >
        <FaFacebook />
      </div>
      <div
        href="https://www.facebook.com/"
        title="Instagram"
        className={`text-black cursor-pointer text-lg  transition duration-300 ease-in-out flex items-center justify-center p-2 rounded-full shadow-md hover:shadow-lg hover:bg-white hover:text-red-400 `}
      >
        <FaInstagram />
      </div>
      <div
        href="https://www.facebook.com/"
        title="TikTok"
        className={`text-black cursor-pointer text-lg  transition duration-300 ease-in-out flex items-center justify-center p-2 rounded-full shadow-md hover:shadow-lg hover:bg-white hover:text-gray-400 `}
      >
        <FaTiktok />
      </div>
    </div>
  );
};

export default SocialIconButton;
