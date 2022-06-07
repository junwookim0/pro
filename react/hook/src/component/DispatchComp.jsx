import { useContext, useState } from "react";
import { DispatchContext, StateContext } from "./DispatchContext";

const DispatchComp = () => {
    const context = useContext(DispatchContext);
    const state = useContext(StateContext);

    const [input, setInput] = useState("");

    return (
        <div>
        <h1>{state.id}</h1>
        <button
            onClick={() => {
            context({ type: "id_plus" });
            }}
        >
            값이 1증가합니다
        </button>

        <h1>{state.text}</h1>
        <input
            type="text"
            onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
            }}
        />
        <button
            onClick={() => {
            context({ type: "text_change", payload: input });
            }}
        >
            텍스트변경
        </button>
        </div>
    );
};

export default DispatchComp;