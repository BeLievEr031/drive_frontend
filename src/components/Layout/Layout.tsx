import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'

function Layout({ children }: ILayoutProp) {
    return (
        <div>
            <Navbar />
            <div className='flex'>
                <div className='w-[20%]'>
                    <div className='w-full'>
                        <SideBar />
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout