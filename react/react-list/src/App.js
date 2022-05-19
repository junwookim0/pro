import "./App.css";
import ListClass from "./components/ListClass";
import ListFunction from "./components/ListFunction";
import HelloWorldComponent from "./components/df";
import Test from "./components/test";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Test />
      </header>
      <header className="App-header">
        <ListClass />
      </header>
      <header className="App-header">
        <ListFunction />
      </header>
      <header className="App-header">
        <HelloWorldComponent name="jin"/>
      </header>
    </div>
  );
}

export default App;
