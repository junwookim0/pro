import {useState} from "react";


const ArrowState = (props) => {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("홍길동");

        return(
            <div>
                <h1>{number}</h1>
                <p>{name}</p>
                <button
                onClick={() => {
                    setName("성춘향");
                }}
                >change</button>
                <button
                onClick={() => {
                    setNumber(number+1);
                }}
                >+1</button>

                <button
                onClick = {()=>{
                    setNumber(number -1);
                }}
                >-1</button>
            </div>
        );
    }


export default ArrowState;