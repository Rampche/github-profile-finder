import React from 'react';
import Search from './Search';

const Container: React.FC = () => {
  return (
    <div className="bg-sky-600 w-2/4 h-72 rounded flex flex-col text-white justify-around items-center p-15 shadow-slate-200 dark:bg-white dark:text-[#001E3C]">
      <p className="block text-1xl font-normal text-center pt-6 ">
        Enter a username to search for user profile and repositories
      </p>
      <Search />
    </div>
  );
};

export default Container;
