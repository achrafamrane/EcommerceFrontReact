import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Buttons from "../Button/Buttons";
import { FaCheckCircle } from "react-icons/fa";

const FormulaireInfClient = () => {
  return (
    <form action="#" method="POST" className="mt-5  sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/*  */}
        <div>
          <label
            htmlFor="Wilaya"
            className="block text-sm font-semibold leading-6 text-gray-900 "
          >
            Wilaya
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="Wilaya"
              id="Wilaya"
              autoComplete="given-name"
              className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 
        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Commune"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Commune
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="Commune"
              id="Commune"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/*  */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold leading-6 text-gray-900 "
          >
            Phone Number
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="given-name"
              className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 
        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="City"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="City"
              id="City"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/*  */}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Buttons
          name="Valider La Commande"
          background="bg-BG_COLOR_FOOTERGRAY"
          colorText="white"
          handleFunction="{}"
        >
          <FaCheckCircle />
        </Buttons>
      </div>
    </form>
  );
};

export default FormulaireInfClient;
