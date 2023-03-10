import React, { useEffect, useState } from 'react';

const UserContainer = () => {
  return (
    <div className="m-auto bg-slate-100 w-2/4 h-5/6 rounded flex flex-col justify-around items-center p-14">
      <img alt="sample-img" />
      <h1>Profile Name</h1>
      <p>Bio</p> {/* {bio? bio : 'No Description'} */}
      <section
        className="flex justify-between
       items-center w-full"
      >
        <p>Repositórios</p>
        <p>Seguidores</p>
        <p>Seguindo</p>
      </section>
    </div>
  );
};

export default UserContainer;
