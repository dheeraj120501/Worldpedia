import React, { useState } from 'react';
import Navbar from '../../component/Navbar';
import InputText from './component/InputText';
import DropDown from './component/DropDown';
import { IoSearch } from 'react-icons/io5';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');

  const changeSearchInput = (value) => {
    setSearchValue(value);
  };

  const changeRegionValue = (value) => {
    setRegionValue(value);
  };

  return (
    <div className="w-screen h-screen bg-light-bg dark:bg-dark-bg">
      <Navbar />
      <div className="px-20 pt-10 flex justify-between items-start">
        <InputText
          value={searchValue}
          changeHandler={changeSearchInput}
          placeholder={'Search for a country...'}
          iconComponent={<IoSearch className="text-light-text dark:text-dark-text mr-2" />}
        />
        <DropDown
          value={regionValue}
          changeHandler={changeRegionValue}
          options={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
          title="Filter by Region"
          isDefault
        />
      </div>
    </div>
  );
}

export default Home;
