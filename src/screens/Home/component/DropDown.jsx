import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function DropDown({ options, title }) {
  const [isHidden, setIsHidden] = useState(true);
  const [value, setValue] = useState('');

  const showOptions = () => {
    setIsHidden(!isHidden);
  };

  const changeValue = (e) => {
    setValue(e.target.textContent);
    setIsHidden(true);
  };

  return (
    <div className="cursor-pointer min-w-[200px] w-max">
      <div
        className="bg-light-element text-light-text dark:text-dark-text dark:bg-dark-element text-center flex justify-between items-center pl-6 pr-4 py-2"
        onClick={showOptions}
      >
        <div>{value || title}</div>
        <MdOutlineKeyboardArrowDown className="ml-8" />
      </div>
      <div
        className={`bg-light-element text-light-text dark:text-dark-text dark:bg-dark-element text-left pl-6 pr-4 py-2 mt-2 ${isHidden && 'hidden'}`}
      >
        {options.map((option) => (
          <div className="mb-2" onClick={changeValue}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
