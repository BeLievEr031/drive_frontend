import React from 'react'
import logo from "../../localdata/logo.png"
import SearchBar from '../SearchBar/SearchBar'
import Avatar, { genConfig } from 'react-nice-avatar'


function Navbar() {
    const config = genConfig({ sex: "man", hairStyle: "thick" })
    return (
        <>
            <div className='flex p-4 w-full justify-between'>
                <div className='flex w-3/4 justify-between'>
                    <div>
                        <div className='flex items-center'>
                            <img src={logo} alt="" />
                            <h1 className='pl-4 text-2xl'>Drive-Clone</h1>
                        </div>
                    </div>
                    <SearchBar />
                </div>
                <div>
                    <Avatar style={{ width: '50px', height: '50px' }} {...config} />
                </div>
            </div>

        </>
    )
}

export default Navbar