import React from 'react';

function CountryCard({ country }) {
  const { name, flag, population, region, capital } = country;

  return (
    <div className="w-[250px] bg-light-element dark:bg-dark-element dark:text-light-element text-dark-element rounded-md overflow-hidden">
      <div className="h-[150px] w-[250px]">
        <img src={flag} alt={`${name}-flag`} className="h-full w-full" />
      </div>
      <div className="px-5 py-10">
        <div className="font-extraBold">{name}</div>
        <div className="mt-5">
          <div>
            <span className="font-bold">Population:</span> {population}
          </div>
          <div>
            <span className="font-bold">Region:</span> {region}
          </div>
          <div>
            <span className="font-bold">Capital:</span> {capital}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
