import axios, { AxiosInstance } from 'axios';

/* const findUser = async (username: string): Promise<UserProps> => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const {
      avatar_url,
      login,
      name,
      followers,
      following,
      public_repos,
      bio,
      location,
    }: UserProps = response.data;
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
    console.log(userData);
    return userData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { findUser }; */

const api: AxiosInstance = axios.create({
  baseURL: `https://api.github.com/users/`,
  timeout: 4000,
});

export { api };
