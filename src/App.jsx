import React from "react";
import {useState} from "react";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos";


export const App = () => {

    /*
    inputをuseStateで監視する際には
    ”onChange -> 関数の呼び出し -> event（変数名なので実際は自由だが普通は"event"か"e"が慣習的）
    を引数に設定　-> setStateとなる変数（今回だと"setInputText"）に引数「event.target.value」を渡す”

     */

    // state
    const [inputText, setInputText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    // input
    const onChangedFunc = (event) => setInputText(event.target.value);
    const onClickFunc = () => {
        if (inputText === "") return;
        const newTodos = [...incompleteTodos, inputText];
        setIncompleteTodos(newTodos);
        setInputText("");
        if (setIncompleteTodos.length === 1){

        }
    };

    // incomplete
    const completeButton = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompletedTodos = [...completedTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompletedTodos(newCompletedTodos);
    };
    const deleteButton = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index,1);
        setIncompleteTodos(newTodos);
        setInputText("");
    };
    const allDeleteButton = () => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(0,newTodos.length);
        setIncompleteTodos(newTodos);
    };

    // complete
    const returnButton = (index) => {
        const newCompleteTodos = [...completedTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completedTodos[index]];
        setCompletedTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    };

    return (
        <>
            <InputTodo
                input={inputText}
                onChange={onChangedFunc}
                onClick={onClickFunc}
                disabled={incompleteTodos.length >= 5}
            />
            {incompleteTodos.length >= 5 && <p　style={{ color:"red"}}>タスクが５個になったら新しいのは追加できなくなるよ</p>}
            <IncompleteTodos
                todos={incompleteTodos}
                completeButton={completeButton}
                deleteButton={deleteButton}
                allDeleteButton={allDeleteButton}/>
            <CompleteTodos
                todos={completedTodos}
                returnButton={returnButton}/>
        </>
    );
};