import './App.css';
import { Route, Routes } from "react-router-dom";
import Intro from './components/Intro/Intro';
import Event from './components/Event';
import Home from './page/HomePage';
import FirstMain from './page/FirstMain/FirstMain';
import Reviewlist from './components/Review/Reviewlist';
import Reviewdetail from './components/Review/Reviewdetail';
import ReviewWrite from './components/Review/ReviewWrite';
import NotFound from './page/NotFound';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<FirstMain/>}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/event" element={<Event />}></Route>
          <Route path="/reviewlist" element={<Reviewlist/>}>
            <Route path=":id" element={<Reviewdetail/>}></Route>
            <Route path=":write" element={<ReviewWrite/>}></Route>
          </Route>
          <Route path="/not-found" element={<NotFound />}></Route>
        </Routes>
    </div>
  );
}

export default App;
