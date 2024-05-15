import React, { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar';
import InputText from './component/InputText';
import DropDown from './component/DropDown';
import { IoSearch } from 'react-icons/io5';
import CountryCard from './component/CountryCard';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');

  const changeSearchInput = (value) => {
    setSearchValue(value);
  };

  const changeRegionValue = (value) => {
    setRegionValue(value);
  };

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((countries) => {
        const countryData = countries.map((country) => ({
          name: country.name.official,
          flag: country.flags.png,
          population: country.population,
          region: country.region,
          capital: country.capital ? country.capital[0] : 'N/A',
        }));
        setCountryData(countryData);
      });
  }, []);

  return (
    <div className="w-screen min-h-screen bg-light-bg dark:bg-dark-bg">
      <Navbar className="px-20" />
      <div className="px-20 pt-10">
        <div className="flex justify-between items-start">
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
        <div className="py-10 flex flex-wrap gap-20 justify-between">
          {countryData.map((country) => (
            <CountryCard country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
