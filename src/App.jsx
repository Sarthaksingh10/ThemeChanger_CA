import { useState } from "react";
import {Provider} from "./context/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode,setThemeMode]=useState("ight")
 
  const DarkTheme=()=>{
    setThemeMode("dark")
  }
  const LightTheme=()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    let themehtml=document.querySelector('html');
    themehtml.classList.remove('light','dark');
    themehtml.classList.add(themeMode)
  },[themeMode])
  return (
    <Provider value={{themeMode, DarkTheme, LightTheme}}>

      <h1 className="text-center bg-fuchsia-600 text-white text-3xl p-2">Theme Changer</h1>
    <div className="flex flex-wrap min-h-screen items-center ">
      <div className="w-full ">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
         <Card/>
          </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
