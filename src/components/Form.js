import React, { useRef } from "react";

const Form = () => {
    const inputRef = useRef();

    const clickHandler = () => {
        const inputElement = inputRef.current;
        console.log(inputElement.value);
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type a new todo"/><br/>
            <button onClick={clickHandler}>Add Todo</button>
        </div>
    );
}

export default Form;