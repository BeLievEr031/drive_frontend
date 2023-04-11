import React from 'react'
import SearchHistory from "../../localdata/SearchHistory.json"
function SearchBar() {
    const [isFocus, setIsFocus] = React.useState<boolean>(false)

    return (
        <div className={`w-1/2 border-2 border-red-600 ${isFocus ? "rounded-2xl" : "rounded-full"} p-2`}>
            <input type="text" className='w-full text-xl' placeholder='Search in Drive' onFocus={() => setTimeout(() => setIsFocus(true), 200)} onBlur={() => setIsFocus(false)} />
            {
                isFocus ? <div>
                    {
                        SearchHistory.map((item, index) => {
                            return <li>{item.history}</li>
                        })

                    }
                </div> : ""
            }
        </div>
    )
}

export default SearchBar