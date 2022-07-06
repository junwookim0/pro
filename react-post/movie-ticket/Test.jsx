import  { useState } from "react";
import "./test.css";

const db = [
    { id: 1,  isToggle: false },
    { id: 2,  isToggle: false },
    { id: 3,  isToggle: false },
    { id: 4,  isToggle: false },
    { id: 5,  isToggle: false }
];

const Menu = ({ id,  isToggle }) => {
    const [toggle, setToggle] = useState(isToggle);

    const onChange = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div id={id} onClick={onChange} >
                <span className="material-symbols-outlined">menu</span>
            </div>
            <div className={toggle ? 'bar.active': 'bar'}>
                <ul>
                    <li>수정</li>
                    <li>삭제</li>
                </ul>
            </div>
        </div>
    );
};

const Test = () => {
    const [comments] = useState(db);

    return (
            <div className="testbtn">
                {comments.map((item)=>(
                    <Menu
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isToggle={item.isToggle}
                    >
                    </Menu>
                ))}
            </div>
    )
}

export default Test;