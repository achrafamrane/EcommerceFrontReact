import { Popover } from '@headlessui/react'

const PopOverButton = ({category,open}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Popover.Button
      className={classNames(
        open
          ? 'border-indigo-600 text-indigo-600'
          : 'border-transparent text-gray-700 hover:text-gray-800',
        'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
      )}
    >
      {category.name}
    </Popover.Button>

  )
}

export default PopOverButton
