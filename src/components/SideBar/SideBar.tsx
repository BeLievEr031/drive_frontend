import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setTab } from '../../redux/slice/tabSlice';
import Folder from '../Folders/Folder';
import FolderData from "../../localdata/file.json"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function SideBar() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState<string>("drive")
    const [folderOpen, setFolderOpen] = useState<boolean>(false)

    useEffect(() => {
        dispatch(setTab(selected))
    }, [selected])

    // @ Memoized folder
    let memoFolder = React.useMemo(() => {
        return FolderData.map((item: ISingleFolder, index: number) => {
            return <Folder FolderData={item} key={index} />
        })
    }, [FolderData])
    
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
                <div className={`${selected === "drive" ? "bg-blue-200" : "hover:bg-gray-300"} p-1 rounded-full flex`} onClick={() => setSelected("drive")}>
                    <span className={`mx-1 h-[25px] w-[25px] ${folderOpen ? "rotate-90" : "rotate-0"} flex justify-center items-center cursor-pointer`}
                        onClick={() => setFolderOpen(!folderOpen)}
                    >
                        <PlayArrowIcon fontSize='inherit' height={"5px"} />
                    </span>
                    My Drive

                </div>
                {
                    folderOpen && <> {memoFolder}</>


                }

                <div className={`${selected === "shared" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("shared")}>Shared With Me</div>
                <div className={`${selected === "recent" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("recent")}>Recent</div>
                <div className={`${selected === "starred" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("starred")}>Starred</div>
                <div className={`${selected === "bin" ? "bg-blue-200" : "hover:bg-gray-300"}  p-1 pl-6 rounded-full cursor-pointer`} onClick={() => setSelected("bin")}>Bin</div>
            </div>
        </div >
    )
}

export default SideBar