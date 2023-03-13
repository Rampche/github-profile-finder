import React, { useState, useContext } from 'react';
import { api } from '../../services/fetchUser';
import { useNavigate } from 'react-router-dom';
import { UserProps } from '../../models/user';
import { FetchContext } from '../../contexts/FetchContext';

const Search = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const ctx = useContext(FetchContext);

  const handleClick = async (username: string) => {
    try {
      const response = await api.get(`/${username}`);
      console.log(response.data);
      const {
        avatar_url,
        login,
        name,
        followers,
        following,
        public_repos,
        bio,
        location,
      } = response.data;
      const userData: UserProps = {
        avatar_url,
        login,
        name,
        followers,
        following,
        public_repos,
        bio,
        location,
      };
      ctx.setUserData(userData);
      username && navigate('/user');
    } catch (error) {
      console.log(error);
      setError(true);
      throw error;
    }
  };

  return (
    <>
      <div className="def-fx-col">
        {error && (
          <p className="text-red-600 text-center font-bold mb-4">
            USER NOT FOUND. TRY AGAIN.
          </p>
        )}
        <input
          type="text"
          className={`border-b-2 bg-transparent outline-none border-white border-solid py-1.5 pl-7 pr-7 w-auto text-center dark:text-gray-300 placeholder:text-gray-300 focus:text-gray-300 sm:text-s sm:leading-6 ${
            error && 'border-red-700'
          }`}
          placeholder="Insert the user here"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <button
          type="button"
          className="bg-white mt-3 min-w-full rounded border-sky-600 hover:scale-105 transform-gpu"
          onClick={() => handleClick(username)}
        >
          Search User
        </button>
      </div>
    </>
  );
};

export default Search;
