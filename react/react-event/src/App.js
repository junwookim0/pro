import './App.css';
import EventClass from './components/EventClass';
import InputClass from './components/InputClass';
import InputArrow from './components/inputArrow';

function App() {
  const isActive = true;
  return (
    <div className="App">
      <header className="App-header">
        <EventClass name="이벤트"/>
        <InputArrow/>
      </header>

      <header className="App-header2">
        <InputClass/>
      </header>
    </div>
    
  );
}

export default App;
