'use client';

import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import AcademicCap from '../icons/academic_cap';
import Beaker from '../icons/beaker';
import Folder from '../icons/folder';
import Misc from '../icons/misc';
import Home from '../icons/home';

const Header = () => {
  return (
    <Popover className={"container mx-auto flex items-center border-b-2 border-b-slate-400 px-5 py-2 h-24 mb-10    "}>
        <Link href="/">
            <h1 className={"font-bold text-2xl font-nunito md:mr-32"}>Seongyoon Kim</h1>
        </Link>
        <div className="grow">
            <div className='hidden sm:flex items-center justify-start gap-2 md:gap-8 '>

                <Link className='flex flex-row  transition duration-100
                hover:border-b-2 hover:border-blue-500 hover:mb-2 hover:transition hover:p-4' 
                href="/research">
                    <span className='w-6 h-6 mr-2 transition'>
                        <AcademicCap />
                    </span>
                    Research
                </Link>

                <Link className='flex flex-row transition 
                hover:border-b-2 hover:border-blue-500 hover:mb-2 hover:transition hover:p-4'
                href="/teaching">
                    <span className='w-6 h-6 mr-2 transition'>
                        <Beaker />
                    </span>
                    Teaching
                </Link>

                <Link className='flex flex-row transition
                hover:border-b-2 hover:border-blue-500 hover:mb-2 hover:transition hover:p-4' 
                href="/cv">
                    <span className='w-6 h-6 mr-2 transition'>
                        <Folder />
                    </span>
                    CV
                </Link>

                <Link className='flex flex-row transition
                hover:border-b-2 hover:border-blue-500 hover:mb-2 hover:transition hover:p-4' 
                href="/misc">
                    <span className='w-6 h-6 mr-2 transition'>
                        <Misc />
                    </span>
                    Misc
                </Link>
            </div>
        </div>
        <div className='flex grow items-center justify-end sm:hidden'>
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
            hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className=' sr-only'>Menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
        </div>

        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-95">
            <Transition
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
                        <div className='px-5 pb-5 pt-6'>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-bold'>Sy</h1>
                                <div className='-mr-2'>
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 
                                    text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2
                                    focus:ring-inset focus:ring-indigo-500">
                                        <span className='sr-only'>
                                            Close
                                        </span>
                                        <XMarkIcon className='h-6 w-6' aria-hidden="true" />

                                    </Popover.Button>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <nav className='grid gap-y-8'>
                                    <Link className='flex flex-row focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                                    href="/"
                                    >
                                        <span className='w-6 h-6 mr-2 transition'>
                                            <Home />
                                        </span>
                                        Home
                                    </Link>

                                    <Link className='flex flex-row focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                                    href="/research"
                                    >
                                        <span className='w-6 h-6 mr-2 transition'>
                                            <AcademicCap />
                                        </span>
                                        Research
                                    </Link>
                                    
                                    <Link className='flex flex-row focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                                    href="/teaching"
                                    >
                                        <span className='w-6 h-6 mr-2 transition'>
                                            <Beaker />
                                        </span>
                                        Teaching
                                    </Link>
                                    
                                    <Link className='flex flex-row focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                                    href="/cv"    
                                    >
                                        <span className='w-6 h-6 mr-2 transition'>
                                            <Folder />
                                        </span>
                                        CV
                                    </Link>
                                    
                                    <Link className='flex flex-row focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2'
                                    href="/misc"    
                                    >
                                        <span className='w-6 h-6 mr-2 transition'>
                                            <Misc />
                                        </span>
                                        Misc
                                    </Link>

                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover.Overlay>
        
    </Popover>
  )
}

export default Header