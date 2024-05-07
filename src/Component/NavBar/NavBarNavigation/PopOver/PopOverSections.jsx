import React from 'react'

const PopOverSections = ({category}) => {
  return (
    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
    {category.sections.map((section) => (
      <div key={section.name}>
        <p id={`${section.name}-heading`} className="font-medium text-gray-900">
          {section.name}
        </p>
        <ul
          role="list"
          aria-labelledby={`${section.name}-heading`}
          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
        >
          {section.items.map((item) => (
            <li key={item.name} className="flex">
              <a href={item.href} className="hover:text-gray-800">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default PopOverSections
