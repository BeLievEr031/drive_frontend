import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'

function Layout({ children }: ILayoutProp) {
    return (
        <div>
            <Navbar />
            <div className='flex mt-6'>
                <div className='w-[20%] mt-6'>
                    <div className='w-full'>
                        <SideBar />
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='p-2 absolute w-[80%] -z-10'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout