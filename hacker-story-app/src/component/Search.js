import { useState } from "react"

export default function Search({ onSearch }) {

    // setSearchTerm is a function to update this state
    let [searchTerm, setSearchTerm] = useState('')

    console.log('render Search');

    const handleChange = (event) => {
        console.log(event)
        console.log(event.target.value)

        // searchTerm = event.target.value // not work
        setSearchTerm(event.target.value)
        onSearch(event.target.value)
    }

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