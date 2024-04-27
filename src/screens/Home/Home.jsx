import React from 'react';
import Navbar from '../../component/Navbar';
import SearchInput from './component/SearchInput';

function Home() {
  return (
    <div className="w-screen h-screen bg-light-bg dark:bg-dark-bg">
      <Navbar />
      <div className="px-20 pt-10 flex justify-between items-start">
        <SearchInput />
      </div>
    </div>
  );
}

export default Home;
