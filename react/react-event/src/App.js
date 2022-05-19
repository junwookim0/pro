import "./App.css";
import EventClass from "./components/EventClass";
import InputArrow from "./components/InputArrow";
import InputClass from "./components/InputClass";
import RefClass from "./components/RefClass";
import RefComponent from "./components/RefComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventClass name="이벤트" />
        <InputClass />
        <InputArrow />
        <RefClass />
        <RefComponent />
      </header>
    </div>
  );
}

export default App;
