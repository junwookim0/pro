//화살표함수형
import {useState} from "react";

const InputArrow = () => {
    const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        user : "",
        message : "",
    });

    const inputChange = (e) => {
        setMessage(e.target.value);
    };

    const formChange = (e) => {
        //스프레드 연산자 사용 form안의 값을 꺼내서 사용
        const nextForm={
            ...form,
            [e.target.name]:e.target.value
        };
        setForm(nextForm);
    }
    
    return( 
    <div> 
        <h1> {message} </h1> 
        <input
        type="text"
        onChange={inputChange}></input>
        <h2>{form.user}의 메세지 : {form.message}</h2>
        <input type="text" name="user" onChange={formChange}></input>
        <input type="text" name="message" onChange={formChange}></input>
    </div>
    );

};

export default InputArrow;