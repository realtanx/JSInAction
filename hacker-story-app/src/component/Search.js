import React, { useState } from "react"
import Constant from "../Constant";

export default function Search({ onSearch }) {

    let savedSearchTerm = localStorage.getItem(Constant.kSearchKey)
    // setSearchTerm is a function to update this state
    let [searchTerm, setSearchTerm] = useState(savedSearchTerm || 'React')

    console.log('render Search');

    const handleChange = (event) => {
        console.log(event)
        console.log(event.target.value)

        // searchTerm = event.target.value // not work
        setSearchTerm(event.target.value)
        onSearch(event.target.value)

        // The handler function should mostly be concerned with updating the state, 
        // but it has a side-effect now. (save local data below, fix by using useEffect())
        // localStorage.setItem(Constant.kSearchKey, keyword)
    }

    // Fix this by handling side-effect use useEffect()
    React.useEffect(() => {
        if (searchTerm.length > 0) {
            localStorage.setItem(Constant.kSearchKey, searchTerm)
        }
    }, [searchTerm])

    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" onChange={handleChange} />

            <p>
                Search for <strong>{searchTerm}</strong>
            </p>
        </div>
    )
}