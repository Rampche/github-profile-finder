import React from 'react';
import Search from './Search';

//import Container from '../models/container'

const Container = () => {
  return (
    //
    <div className="bg-sky-600 w-2/4 h-72 rounded flex flex-col justify-around items-center p-15 ">
      <p className="block text-1xl font-normal text-center text-white pt-6">
        Enter a username to search for user profile and repositories
      </p>
      <Search />
    </div>
  );
};

export default Container;
