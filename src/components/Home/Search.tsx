import React, { useState, useContext } from "react";
import { api } from "../../services/fetchUser";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../../models/user";
import {FetchContext} from "../../contexts/FetchContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
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
      username && navigate("/user");
      //return userData;
    } catch (error) {
      console.log(error);
      throw error;
    }
    //TODO: usar useState para tratamento de erros (deixar input vermelho).
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="border-b-2 bg-transparent outline-none border-white border-solid py-1.5 pl-7 pr-7 w-auto text-center  dark:text-gray-900 placeholder:text-gray-300 focus: text-gray-300 sm:text-s sm:leading-6"
        placeholder="Insert the user here"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        type="button"
        className="bg-white mt-3 rounded border-sky-600 hover:scale-105 transform-gpu"
        onClick={() => handleClick(username)}
      >
        Search User
      </button>
    </div>
  );
};

export default Search;
