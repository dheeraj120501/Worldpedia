import React, { useRef } from 'react';
import { IoSearch } from 'react-icons/io5';

function SearchInput() {
  const searchInputRef = useRef(null);

  const captureInput = () => {
    console.log(searchInputRef.current.focus());
  };

  return (
    <div
      className="flex items-center bg-light-element px-6 py-2 w-1/4 rounded-md hover:cursor-text dark:bg-dark-element"
      onClick={captureInput}
    >
      <IoSearch className="text-light-text dark:text-dark-text mr-2" />
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search for a country..."
        className="bg-light-element text-light-text placeholder:text-light-text dark:bg-dark-element dark:text-dark-text dark:placeholder:text-dark-text outline-none"
      />
    </div>
  );
}

export default SearchInput;
