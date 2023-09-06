// import React, { createContext, SetStateAction, useState, ReactNode, useContext } from 'react';

// interface User {
//   // Define the properties of your user object
//   id: number;
//   username: string;
//   // ... other properties
// }

// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = (user: User) => {
//     setUser(user);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   const contextValue: AuthContextType = {
//     user,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
// };

// export const  UseAuth = () =>{
//     return useContext(AuthContext)
// }

import React from 'react'

export const Auth = () => {
  return (
    <div>Auth</div>
  )
}
