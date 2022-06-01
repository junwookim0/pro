import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Intro from "./page/Intro";
import Profile from "./page/Profile";
import Boardlist from "./page/BoardList";
import Board from "./page/Board";

function App() {
  return (
    <div className="App">
      <Routes>
        {/** 컴포넌트와 주소 연결 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/** 임의의 컴포넌트 하나를 추가해보세요 */}
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        {/** 중첩하여 라우터를 사용할수 있다 - outlet 컴포넌트 필요 */}
        <Route path="/boardlist" element={<Boardlist />}>
          <Route path=":id" element={<Board />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
