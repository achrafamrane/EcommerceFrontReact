import React from 'react'
import NavBarNavigation from './NavBarNavigation'

const NavBarPages = () => {
  return (
    <div className="flex h-full space-x-8">
      {NavBarNavigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
    </div>
  )
}

export default NavBarPages
