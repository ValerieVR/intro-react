import React from "react";

const Form = ({inputRef, clickHandler}) => {

    return (
        <div>
            <input ref={inputRef }type="text" placeholder="Type a new todo"/><br/>
            <button onClick={clickHandler}>Add Todo</button>
        </div>
    );
}

export default Form;