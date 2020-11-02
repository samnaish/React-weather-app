import React from 'react'

export default ({change , query, search}) => {
    return(
        <div className="search-box">
            <input type="text" className="search-bar" placeholder="Search..." onChange={change} value={query} onKeyPress={search} />
        </div>
    )
}