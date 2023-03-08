import React from "react";
//import Container from '../models/container'

const Container = () => {
  return (
    <div className="bg-sky-600 w-3/6 h-96 flex flex-col justify-center items-center">
      <h1 className="text-1xl font-normal text-white">GitHub Finder</h1>
      <p className="text-1xl font-normal text-white">
        Enter a username to search for user profile and repositories
      </p>
      <input
        type="text"
        className="border-b-2 bg-transparent border-sky-800 border-solid border-0 outline-none py-1.5 pl-7 pr-20 w-2/3  text-gray-900 placeholder:text-gray-300 focus: text-gray-300 sm:text-sm sm:leading-6"
        placeholder="Insert the user here"
      />
    </div>
  );
};

export default Container;
