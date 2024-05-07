import React from 'react'
import {  MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const NavBarSearch = () => {
  return (
    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
  )
}

export default NavBarSearch
