import React from 'react';
import UserContainer from '../components/UserInfo/UserContainer';

const UserInfo = () => {
  return (
    <main className="bg-sky-900 min-h-screen h-screen max-w-7xl w-screen flex flex-col justify-center items-center">
      <p className="text-white mt-8 text-lg">This is the user info page</p>
      <UserContainer />
    </main>
  );
};

export default UserInfo;
