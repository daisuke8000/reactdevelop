import React from "react";


const style = {
    backgroundColor: "#c1FFFF",
    width: "400px",
    height: "30px",
    margin: "8px",
    padding: "8px",
    borderRadius: "8px",
}


export const InputTodo = (props) => {
    const { input, onChange, onClick, disabled } = props;

    return (
        <>
            <div style={style}>

                <input placeholder="TODOを入力" value={input} onChange={onChange}/>
                <button disabled={disabled} onClick={onClick}>add</button>
            </div>
        </>
    )
};