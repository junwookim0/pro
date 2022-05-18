import logo from './logo.svg';
import './App.css';
import MyComponent from './component/component';
import MyArrow from './component/arrow';
import MyLoginT from './component/loginT';
import ArrowComponent from './component/ArrowComponent';
import MyArrowLogin from './component/ArrowLogin';
import StateComponent from './component/StateComponent';
import True from './component/true'
import False from './component/false'
import MyLogin from './component/MyLogin';
import Game from './component/tit';
import ArrowState from './component/ArrowState';


function App() {
  const mi = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyLoginT login={false} name="성춘향" />
      </header>


      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />

        <MyComponent/>

        <ArrowComponent name="3"> 태그사이로 전달되는 props(children값입니다)</ArrowComponent>
        
      </body>
      <section className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
        <MyArrow/>
        <MyArrowLogin
        isLoggedIn='false' //props속성의 이름을 통해서 props값을 전달할수 있습니다 
        //이때 전달되는 값을 문자열
        />
      </section>

      <section className='App-body'>
      <img src={logo} className="App-logo" alt="logo" />
      <StateComponent/>
      </section>

      <section className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
      {mi ? <True/> : <False/>}
      <p>컴포넌트의 삼항연산자</p>
      </section>

      <section className='App-body'>
      <img src={logo} className="App-logo" alt="logo" />
      <MyLogin login={true} name="성춘향"/>
      </section>

      <section className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
      <Game/>
      </section>

      <section className='App-body'>
      <img src={logo} className="App-logo" alt="logo" />
      <ArrowState/>
      </section>

    </div>
  );
}

export default App;

