import './App.css';
import React,{useReducer} from 'react';
import {ThemeContext} from "./component/ThemeContext";
import HookComp from './component/HookComp';
import ReducerComp from './component/ReduserComp';
import ReducerComp2 from './component/ReduserComp2';
import ExReducer from './component/ExReducer';
import MemoHook from './component/MemoHook';
import ContextHook from "./component/ContextHook";
import { DispatchContext, StateContext}  from './component/DispatchContext';
import DispatchComp from './component/DispatchComp';

function reducer(state,action){
  switch(action.type){
      case 'id_plus':
          return{...state ,id:state.id+1}
      case 'text_change':
          return {...state , text : action.payload};
      default:
  }
}

function App() {
  const [state,dispatch] = useReducer(reducer,
    {id: 1 , text: 'reducer의 텍스트입니다'}
)


  return (
    <div className="App">
      <ThemeContext.Provider value={"light"}>
        <ContextHook />
      </ThemeContext.Provider>

      <DispatchContext.Consumer>
        {(value)=><button>{value}</button>}
      </DispatchContext.Consumer>

      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
        
        <DispatchComp/>
        </StateContext.Provider>
      </DispatchContext.Provider>

      <header className="App-header">
        <MemoHook/>
        <ExReducer/>
        <HookComp/>
      </header>
    
      <header className="App-header">
        <ReducerComp/>
        <ReducerComp2/>
      </header>
      
      
    </div>
  );
}

export default App;
