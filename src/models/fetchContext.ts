import { UserProps } from './user';

export interface ContextType {
  userData:
    | {
        avatar_url: string;
        login: string;
        name: string;
        followers: number;
        following: number;
        public_repos: number;
        bio: string;
        location: string;
      }
    | undefined;
  setUserData: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
}
