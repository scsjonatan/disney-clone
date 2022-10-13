import { createContext } from 'react';

export const initialUser = {
  displayName: null,
  email: null,
  photoURL: null,
};

export const UserContext = createContext({
  user: initialUser,
  setUser: () => {},
});
