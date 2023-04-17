import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
function SideBar() {
    const [selected, setSelected] = useState("drive")
    const [drive, setDrive] = useState(false)
    return (
        <div className=''>
            <div className='w-full flex pl-4'>
                <button type="button" className="flex items-center px-4 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] font-medium rounded-xl text-sm mr-2 mb-2">
                    <AddIcon />
                    <span className='px-2 text-sm font-semibold'>
                        New
                    </span>
                </button>
            </div>
            <div className='mt-4 h-[35.5rem] px-6'>
                <div className={`${selected === "drive" ? "bg-blue-200" : "hover:bg-gray-300"} p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("drive")}>
                    My Drive
                </div>
                <div className={`${selected === "shared" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("shared")}>Shared With Me</div>
                <div className={`${selected === "recent" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("recent")}>Recent</div>
                <div className={`${selected === "starred" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("starred")}>Starred</div>
                <div className={`${selected === "bin" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("bin")}>Bin</div>
            </div>
        </div>
    )
}

export default SideBar