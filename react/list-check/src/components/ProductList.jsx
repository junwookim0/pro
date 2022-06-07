import { useState } from "react"

const ProductList = () => {

    const [count ,setCount] = useState(3);
    const [items, setItems] = useState([
        { id : 1, name : '모자', color: "white", stock : 3 },
        { id : 2, name : '양말', color: "red", stock : 5 },
        { id : 3, name : '신발', color: "black", stock : 3 }
    ]);
    const [inputId, setInputId] = useState(4);
    
    const [inputText, setInputText] = useState("");
    const [inputColor, setInputColor] = useState("");
    const [inputStock, setInputStock] = useState(0);

    const changeText = (e) => {setInputText(e.target.value)};
    const changeColor = (e) => {setInputColor(e.target.value)};
    const changeStock = (e) => {setInputStock(e.target.value)};

    const getItem = () =>{
        const Stock = items.concat({
            id: inputId,
            name : inputText,
            color : inputColor,
            stock : inputStock,
        });
        setItems(Stock);
        setInputId(inputId+1);
        setCount(count+1);
    };

    return (
        <div>
            <h3>장바구니 : {count} </h3>
            
            <input type="text" name="inputText" onChange={changeText} placeholder="상품명"/>
            <input type="text" name="inputColor" onChange={changeColor} placeholder="색"/>
            <input type="number" name="inputStock" onChange={changeStock} placeholder="수량"/>
            <button onClick={()=>{getItem()}}>추가합니다</button>
            
            {items.map((s)=>(
                <ul key={s.id}> 
                    <h3>{s.name}</h3>
                <li
                >
                색 : {s.color}
                </li>
                <li>
                수량 : {s.stock}
                </li>
                <button
                onClick={()=>{
                    setCount(count+1)}}
                >
                    추가
                </button>
                    </ul>
                
            ))}
        </div>
    )
}
export default ProductList;