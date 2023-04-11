import React from 'react'
import logo from "../../localdata/logo.png"
import SearchBar from '../SearchBar/SearchBar'

function Navbar() {
    return (
        <>
            <div className='flex p-4 w-full justify-evenly'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <SearchBar />
            </div>

        </>
    )
}

export default Navbar