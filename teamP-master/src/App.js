import './App.css';
import { Route, Routes } from "react-router-dom";
import IntroList from './components/Intro/IntroList';
import Home from './page/HomePage';
import FirstMain from './page/FirstMain/FirstMain';
import EventIntro from './components/Intro/EventIntro';
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
          <Route path="/intro" element={<IntroList />}></Route>
          <Route path="/event" element={<EventIntro />}></Route>
          <Route path="/reviewlist" element={<Reviewlist/>}>
            <Route path=":id" element={<Reviewdetail/>}></Route>
            <Route path=":write" element={<ReviewWrite/>}></Route>
          </Route>
          <Route path="/not-found" element={<NotFound />}></Route>
        </Routes>
        
        <footer>푸터</footer>
    </div>
  );
}

export default App;
