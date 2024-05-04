import React, { useRef } from 'react';

function InputText({ value, changeHandler, placeholder, iconComponent }) {
  const inputRef = useRef(null);

  const captureInput = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className="flex items-center bg-light-element px-6 py-2 w-1/4 rounded-md hover:cursor-text dark:bg-dark-element"
      onClick={captureInput}
    >
      {iconComponent}
      <input
        ref={inputRef}
        value={value}
        type="text"
        onChange={(e) => {
          const value = e.target.value;
          changeHandler(value);
        }}
        placeholder={placeholder}
        className="bg-light-element w-full text-light-text placeholder:text-light-text dark:bg-dark-element dark:text-dark-text dark:placeholder:text-dark-text outline-none"
      />
    </div>
  );
}

export default InputText;
