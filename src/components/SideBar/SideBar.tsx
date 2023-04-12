import AddIcon from '@mui/icons-material/Add';
function SideBar() {
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
        </div>
    )
}

export default SideBar