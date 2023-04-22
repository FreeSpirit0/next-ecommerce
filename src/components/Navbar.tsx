import React from 'react'
import Breadcrumb from './Breadcrumb'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';


const Navbar: React.FC = () => {
  return (
    <nav>
        <div className='max-w-screen flex items-center justify-between'>
            <div className="p-6 border-b border-r">
                E-Commerce
            </div>
            <ul className="grow flex [&>*]:p-6 [&>*]:border-b [&>*]:border-r [&>*]:text-center">
                <li className="grow group">
                    Browse
                    <ul className="z-50 w-3/6 absolute rounded-md bg-white p-4 border hidden group-hover:flex flex-col items-start gap-4">
                        <li>
                            Clothing
                        </li>
                        <li>
                            Dog 
                        </li>
                    </ul>
                </li>
                <div className="grow">
                    Brand
                </div>
                <div className="">
                    Account
                </div>
            </ul>
        </div>
        <div className='max-w-screen flex items-center justify-between'>
            <div className='p-4 border-b border-r'>
                <Breadcrumb />
            </div>
            <div className='grow flex p-4 border-b border-r text-center overflow-x-hidden '>
                <div className='grow animate-marquee whitespace-nowrap'>
                    <div className='font-bold'>
                        Advertisement Space: Contact 0970978345 for more detail
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar