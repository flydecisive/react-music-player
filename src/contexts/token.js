import React, { useContext } from 'react';

export const TokenContext = React.createContext({
  token: null,
  setCurrentUser: () => {},
});

export function useTokenContext() {
  const token = useContext(TokenContext);

  return token;
}
