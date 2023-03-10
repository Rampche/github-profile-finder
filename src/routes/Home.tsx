import React from 'react';
import Container from '../components/Home/Container';

const Home = () => {
  return (
    <main className="bg-sky-900 min-h-screen h-screen max-w-7xl w-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-white my-4 font-Rubik">
        GitHub User Finder
      </h1>
      <Container />
    </main>
  );
};

export default Home;
