// import React from 'react'
// import {NavBarNavigation} from '../../index'

// const TabGroup = () => {
//   return (
//     <div>
//     <Tab.Group as="div" className="mt-2">
//                   <div className="border-b border-gray-200">
//                     <Tab.List className="-mb-px flex space-x-8 px-4">
//                       {NavBarNavigation.categories.map((category) => (
//                         <Tab
//                           key={category.name}
//                           className={({ selected }) =>
//                             classNames(
//                               selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
//                               'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
//                             )
//                           }
//                         >
//                           {category.name}
//                         </Tab>
//                       ))}
//                     </Tab.List>
//                   </div>
//                   <Tab.Panels as={Fragment}>
//                     {NavBarNavigation.categories.map((category) => (
//                       <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
//                         <div className="grid grid-cols-2 gap-x-4">
//                           {category.featured.map((item) => (
//                             <div key={item.name} className="group relative text-sm">
//                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                 <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
//                               </div>
//                               <a href={item.href} className="mt-6 block font-medium text-gray-900">
//                                 <span className="absolute inset-0 z-10" aria-hidden="true" />
//                                 {item.name}
//                               </a>
//                               <p aria-hidden="true" className="mt-1">
//                                 Shop now
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                         {category.sections.map((section) => (
//                           <div key={section.name}>
//                             <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
//                               {section.name}
//                             </p>
//                             <ul
//                               role="list"
//                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                               className="mt-6 flex flex-col space-y-6"
//                             >
//                               {section.items.map((item) => (
//                                 <li key={item.name} className="flow-root">
//                                   <a href={item.href} className="-m-2 block p-2 text-gray-500">
//                                     {item.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </Tab.Panel>
//                     ))}
//                   </Tab.Panels>
//                 </Tab.Group>
//                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                  {NavBarNavigation.pages.map((page) => (
//                    <div key={page.name} className="flow-root">
//                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
//                        {page.name}
//                      </a>
//                    </div>
//                  ))}
//                </div> </div>
//   )
// }

// export default TabGroup
