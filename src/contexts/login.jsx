import React, { useContext } from 'react';

export const LoginContext = React.createContext({
  login: false,
  toggleLogin: () => {},
  toggleLogout: () => {},
});

export function useLoginContext() {
  const login = useContext(LoginContext);

  return login;
}
