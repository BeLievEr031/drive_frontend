import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Folder({ FolderData }: IFolderProp) {
    const [isSubFolder, setSubFolder] = React.useState(false);

    return (
        <div className={`pl-4`}>
            {
                <>
                    <div className='flex'>
                        <span className={`mx-1 h-[25px] w-[25px] ${isSubFolder ? "rotate-90" : "rotate-0"} flex justify-center items-center cursor-pointer`}
                            onClick={() => setSubFolder(!isSubFolder)}
                        >
                            <PlayArrowIcon fontSize='inherit' height={"5px"} />
                        </span>
                        <div className={`cursor-pointer select-none`} onClick={() => setSubFolder(!isSubFolder)}>📁 {FolderData.name}</div>
                    </div>
                    {
                        FolderData.folder.map((item: ISingleFolder, index: number) => {
                            return isSubFolder && <div className='select-none'><Folder FolderData={item} key={index} /></div>
                        })
                    }
                </>
            }
        </div>
    )
}

export default Folder