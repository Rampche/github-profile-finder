import React, { useContext } from 'react';
import { FetchContext } from '../../contexts/FetchContext';

const UserContainer = () => {
  const ctx = useContext(FetchContext);

  return (
    <div className="m-auto bg-slate-100 w-2/4 h-5/6 rounded flex flex-col justify-around items-center py-10 px-14 ">
      <img
        className="w-48 h-48 rounded-full"
        src={ctx.userData?.avatar_url}
        alt={ctx.userData?.name}
      />
      <h1>{ctx.userData?.name}</h1>
      {ctx.userData?.bio ? (
        <p className="text-justify">{ctx.userData?.bio}</p>
      ) : (
        <p>No bio available</p>
      )}
      {ctx.userData?.location && <p>{ctx.userData?.location}</p>}

      <section className="flex justify-around items-center w-full">
        <section className="def-fx-col">
          <p>{ctx.userData?.public_repos}</p>
          <p>Repositories</p>
        </section>

        <section className="def-fx-col">
          <p>{ctx.userData?.followers}</p>
          <p>Followers</p>
        </section>

        <section className="def-fx-col">
          <p>{ctx.userData?.following}</p>
          <p>Following</p>
        </section>
      </section>
    </div>
  );
};

export default UserContainer;
