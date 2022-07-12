import React from 'react'
import Gift from './gifts.jpg'

const Search = () => {
    return(
        <>
            <div className="search">
                <div className="search-image">
                    <img src={Gift} alt="gift image" className="image" />
                </div>
                <div className="heading">
                    <h1>Welcome Search <span>For The Best Present</span></h1>
                    <p>Happiness isn't measured by what we get for <br/>ourselves. Happiness is measured by what we give <br/>to others.</p>
                    <div className="search-bar">
                        <input type="search" name="search" className="search-input"/>
                        <button className="btn">Search</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Search