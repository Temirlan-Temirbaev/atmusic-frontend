"use client"
import {useCheckAuth, User} from "./";
import {usePathname} from "next/navigation";
import {createContext, useEffect} from "react";

interface IAuthContext {
  user: User | undefined;
  logout : () => void;
  refetch : () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  logout: () => {},
  refetch : () => {},
});

export const AuthProvider = ({children}: { children: JSX.Element }) => {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/auth");
  const isLanding = pathname === "/landing";
  const token = localStorage.getItem("atmusic-access-token");

  useEffect(() => {

  }, []);

  const logout = () => {
    localStorage.removeItem("atmusic-access-token");
    location.reload();
  };

  const {userData, refetch, isLoading} = useCheckAuth(!isAuth && !isLanding, String(token));

  return <AuthContext.Provider value={{user: userData, logout, refetch}}>{children}</AuthContext.Provider>;
};
