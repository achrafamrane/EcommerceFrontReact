import { Fragment, useState } from 'react'
import {NavBarNavigation, NavBarPages, PopOverButton, PopOverFeatured, PopOverSections} from '../../../index'
import { Popover, Transition } from '@headlessui/react'
const PopOver = () => {
 
  return (
    <Popover.Group className="hidden lg:ml-8 z-10 lg:block lg:self-stretch">
    <div className="flex h-full space-x-8 ">
    {NavBarNavigation.categories.map((category) => (
    <Popover key={category.name} className="flex">
    {({ open }) => (
      <>
    <div className="relative flex ">

        <PopOverButton  open ={ open } category={category}/>
  </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

            <div className="relative bg-white">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                  <PopOverFeatured category={category}/>
                  <PopOverSections category={category}/>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
    ))}
         <NavBarPages/>
                </div>
              </Popover.Group>
  )
  
}

export default PopOver
