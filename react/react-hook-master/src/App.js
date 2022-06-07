import "./App.css";
import React from "react";
import { ThemeContext } from "./components/ThemeContext";
import ExReducer from "./components/ExReducer";
import HookComp from "./components/HookComp";
import MemoHook from "./components/MemoHook";
import ReducerComp2 from "./components/ReducerComp2";
import ReduserComp from "./components/ReduserComp";
import ContextHook from "./components/ContextHook";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={"light"}>
        <ContextHook />
      </ThemeContext.Provider>

      <MemoHook />
      <HookComp />
      <ReduserComp />
      <ReducerComp2 />
      <ExReducer />
    </div>
  );
}

export default App;
