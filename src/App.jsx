import React from "react";
import "./App.css";

export const App = () => {
    return (
        <>
            <div className="input-area">
                <input placeholder="TODOを入力"/>
                <button>add</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    <div className="list-row">
                        <li>todo1</li>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                    <div className="list-row">
                        <li>todo2</li>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                </ul>
            </div>
            <div className="complete-area">
                <p className="title">完了のTODO😓
                </p>
                <ul>
                    <div className="list-row">
                        <li>completeTask1</li>
                        <button>Return</button>
                    </div>
                </ul>
            </div>
        </>
    );
};