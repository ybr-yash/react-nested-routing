import React from 'react'

const SearchProduct = () => {
  return (
    <div>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" class="searchButton">
            &#128270;
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchProduct