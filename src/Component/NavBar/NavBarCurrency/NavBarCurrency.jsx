import React from 'react'

const NavBarCurrency = () => {
  return (
    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
    <img
      src="https://tailwindui.com/img/flags/flag-canada.svg"
      alt=""
      className="block h-auto w-5 flex-shrink-0"
    />
    <span className="ml-3 block text-sm font-medium">CAD</span>
    <span className="sr-only">, change currency</span>
  </a>
  )
}

export default NavBarCurrency
