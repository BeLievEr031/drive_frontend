import React from 'react'
import SearchHistory from "../../localdata/SearchHistory.json"
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [isFocus, setIsFocus] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState<string>("")
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    // @Function for checking out side click of parent_div
    function useOutsideAlerter(ref: React.MutableRefObject<HTMLDivElement | null>) {
        React.useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: MouseEvent) {
                if (ref.current && !ref.current.contains(event.target as HTMLInputElement)) {
                    setIsFocus(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef)
    return (
        <div className={`w-3/4 ${isFocus ? "border-2 rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white" : "rounded-full bg-blue-50"}`} ref={wrapperRef}>
            <div className='flex items-center my-2'>
                <SearchIcon className='mx-2' />
                <input type="text" className={`w-3/5 text-xl ${isFocus ? "bg-white" : "bg-blue-50"} outline-none`} placeholder='Search in Drive' onFocus={() => setTimeout(() => setIsFocus(true), 200)} value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            </div>
            {
                isFocus ? <div className='pt-2 bg-white'>
                    {
                        SearchHistory.map((item, index) => {
                            return <div className={`p-2 border w-full cursor-pointer ${index == 2 ? "rounded-b-xl" : ""}`} onClick={() => {
                                setIsFocus(false)
                                setSearch(item.history)
                            }}>
                                <HistoryIcon className='mr-1' />
                                <span>
                                    {item.history}
                                </span>
                            </div>
                        })
                    }
                </div> : ""
            }
        </div>
    )
}

export default SearchBar