import { useState ,useMemo, useCallback } from "react"

const MemoHook = () => {
    const [inputnum, setInputnum] = useState(0);
    const [number, setNumber] = useState([10,6]);
    

    //const onChange = (e) =>{setInputnum(e.target.value)};
    const onChange = useCallback((e)=> {setInputnum(e.target.value);}, [])

    /*const addNum = () =>{
        setNumber([
            ...number, parseInt(inputnum)
        ]);
        setInputnum(0);
    }; */
    
    const addNum = useCallback(() => {
        setNumber([...number, parseInt(inputnum)]);
        setInputnum(0);
    }, [inputnum, number]);

    const allSum = (list) =>{
        return list.reduce((a,b) => a+b);
    }
    const sum = useMemo(() => allSum(number), [number]); //allSum(a,b),[ a, b]

    return(
        <div>
            <h1>MemoHook</h1>
            <input type="number" onChange={onChange} value={inputnum}/>
            <button onClick={addNum}>추가</button>
            <h3> 총합 { allSum(number) }</h3>
            <h3> {sum} </h3>
            <ul>
                {number.map((n,i) => (
                    <li
                    key={i}
                    >{n}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default MemoHook;