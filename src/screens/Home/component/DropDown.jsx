import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function DropDown({ options, title, value, changeHandler, isDefault = false }) {
  const [isHidden, setIsHidden] = useState(true);

  const showOptions = () => {
    setIsHidden(!isHidden);
  };

  const changeValue = (e) => {
    changeHandler(e.target.textContent === 'None' ? '' : e.target.textContent);
    setIsHidden(true);
  };

  return (
    <div className="cursor-pointer min-w-[200px] w-max relative">
      <div
        className="bg-light-element text-light-text dark:text-dark-text dark:bg-dark-element text-center flex justify-between items-center pl-6 pr-4 py-2"
        onClick={showOptions}
      >
        <div>{value || title}</div>
        <MdOutlineKeyboardArrowDown className="ml-8" />
      </div>
      <div
        className={`absolute min-w-[200px] w-max bg-light-element text-light-text dark:text-dark-text dark:bg-dark-element text-left pl-6 pr-4 py-2 mt-2 ${isHidden && 'hidden'}`}
      >
        {isDefault && (
          <div className="mb-2" onClick={changeValue}>
            None
          </div>
        )}
        {options.map((option) => (
          <div className="mb-2" onClick={changeValue} key={option}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
