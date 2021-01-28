import React from 'react';

interface Param {
    signIn: (arg:any) => void;
    signOut: () => void;
    signUp: () => void;
    toggleTheme: () => void;
}
  const context = {
    signIn: () => void{},
    signUp: () => void{},
    signOut: () => void{},
    toggleTheme: () => void{},
  }
export const AuthContext = React.createContext<Param>(context);