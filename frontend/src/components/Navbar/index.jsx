import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

import logo from '../../assets/logo.svg';

const navigation = [
  { name: 'O app', href: '#'},
  { name: 'Exercícios personalizados', href: '#'},
  { name: 'Os LaboInstrutores', href: '#'},
  { name: 'Log in', href: '#', type: 'log'},
  { name: 'Sing in', href: '#', type: 'sing'},
]

const navigationMobile = [
  { name: 'Log in', href: '#', type: 'log'},
  { name: 'Sing in', href: '#', type: 'sing'},
  { name: 'O app', href: '#'},
  { name: 'Exercícios personalizados', href: '#'},
  { name: 'Os LaboInstrutores', href: '#'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-14 h-32 px-2 flex items-center sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex  items-center justify-between sm:items-stretch sm:justify-start">
                <div className="">
                  <img
                    className="block h-8 w-auto  lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto mr-24 lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>

                <div className="absolute right-14 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="flex items-center justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center gap-20  text-xlt">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          // item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          // 'rounded-md px-3 py-2 font-medium'

                          item.type === 'log' ? 'text-orange-400 flex gap-0' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 font-medium',
                          item.type === 'sing' && 'bg-orange-400 text-white px-7 py-[0.4375rem] rounded-xl flex gap-0'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                    {/* <div className='flex items-center gap-14'>
                      <a href='#' className='text-orange-400' >Log in</a> 
                      <a href='#' className='bg-orange-400 text-white px-7 py-[0.4375rem] rounded-xl' >Sing up</a> 
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden sm:p-36">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col items-end">
              {/* <div className='flex flex-col w-28'>
                <a href='#' className='text-orange-400'>Log in</a> 
                <a href='#' className='bg-orange-400 text-white px-7 py-[0.4375rem] rounded-xl' >Sing up</a>
              </div> */}
              {navigationMobile.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    // item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    // 'block rounded-md px-3 py-2 text-base font-medium'
                    
                    item.type === 'log' ? 'text-orange-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 font-medium',
                    item.type === 'sing' && 'bg-orange-400 text-white px-7 py-[0.4375rem] rounded-xl'
                    
                  )}
                  // aria-current={item.current ? 'page' : undefined}
                  
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
