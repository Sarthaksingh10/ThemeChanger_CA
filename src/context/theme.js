import React from "react";
import { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode:"light",
    DarkTheme:()=>{},
    LightTheme:()=>{},
})

export const Provider=ThemeContext.Provider;

export default function useTheme(){
   return useContext(ThemeContext)
}