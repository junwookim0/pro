import "./Home.css";
import  { useState } from "react";

const db = [
    { id: 1,  isToggle: false},
    { id: 2,  isToggle: false},
    { id: 3,  isToggle: false},
    { id: 4,  isToggle: false},
    { id: 5,  isToggle: false},
    { id: 6,  isToggle: false},
    { id: 7,  isToggle: false},
    { id: 8,  isToggle: false},
    { id: 9,  isToggle: false},
    { id: 10,  isToggle: false },
    { id: 11,  isToggle: false },
    { id: 12,  isToggle: false },
    { id: 13,  isToggle: false },
    { id: 14,  isToggle: false },
    { id: 15,  isToggle: false },
    { id: 16,  isToggle: false },
    { id: 17,  isToggle: false },
    { id: 18,  isToggle: false },
    { id: 19,  isToggle: false },
    { id: 20,  isToggle: false },
    { id: 21,  isToggle: false },
    { id: 22,  isToggle: false },
    { id: 23,  isToggle: false },
    { id: 24,  isToggle: false },
    { id: 25,  isToggle: false },
    { id: 26,  isToggle: false },
    { id: 27,  isToggle: false },
    { id: 28,  isToggle: false },
    { id: 29,  isToggle: false },
    { id: 30,  isToggle: false },
    { id: 31,  isToggle: false },
    { id: 32,  isToggle: false },
    { id: 33,  isToggle: false },
    { id: 34,  isToggle: false },
    { id: 35,  isToggle: false },
    { id: 36,  isToggle: false },
    { id: 37,  isToggle: false },
    { id: 38,  isToggle: false },
    { id: 39,  isToggle: false },
    { id: 40,  isToggle: false },
];
const Menu = ({ id,  isToggle }) => {
    const [toggle, setToggle] = useState(isToggle);
    const [pri, setPri] = useState([]);
    const onChange = () => {
        setToggle(!toggle);
        setPri(10);
    };
    return (
        <div>
            <div id={id} onClick={onChange}>
                <div className={toggle ? 'bar_active': 'bar'}>
                    <span className="material-icons">square</span>
                </div>
            </div>
                <div className={toggle ? 'pri_active': 'pri'}>
                    {pri}
                </div>
        </div>
    );
};
const Check = ({ pri  })=>{
    const [sumpri, setsumpri] = useState(pri);
    return(
        <div>
            <div>
                {sumpri}
            </div>
        </div>
    )
}

function Home() {
    const [list] = useState(db);

    return (
        <div>
            <div className="home_box">
                <div className="movie_poster">
                    <div className="poster1"></div>
                </div>
                <div className="movie_container">
                    <div className="movie_incontainer">
                        <label>영화를 선택해주세요</label>
                        <select id="movie">
                            <option value="0" selected >선택해주세요</option>
                            <option value="10000">기생수 (10,000원)</option>
                            <option value="12000">어벤져스 엔드게임 (12,000원)</option>
                            <option value="8000">Toy Story4 (8,000원)</option>
                            <option value="9000">스파이더맨 파프롬홈 (9,000원)</option>
                        </select>
                    </div>
                    <div className="movie-seat-ex">
                        <div className="available"><span className="material-icons">square</span>
                            <div id="ex-text">선택가능</div>
                        </div>
                        <div className="selected">
                            <span className="material-icons">square</span> 
                            <div id="ex-text">선택좌석</div>
                        </div>
                        <div className="occupied">
                            <span className="material-icons">square</span>
                            <div id="ex-text">선택불가</div>
                        </div>
                    </div> 
                    <div>
                        <div className="screen">screen</div>
                    </div>
                    <div>
                        <div className="seat">
                            {list.map((item)=>(
                                <Menu
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                isToggle={item.isToggle}
                                >
                                </Menu>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Check></Check>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;