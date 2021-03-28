import React from "react";

const style = {
    incompleteArea: {
        backgroundColor: "#c6ffe2",
        width: "400px",
        minHeight: "200px",
        margin: "8px",
        padding: "8px",
        borderRadius: "8px",
    },
    title: {
        textAlign: "center",
        marginTop: "0",
        fontWeight: "bold",
        color: "666",
    },
    listRow: {
        display: "flex",
        alignItems: "center",
        paddingBottom: "4px",
    },

}

export const IncompleteTodos = (props) => {
    const { todos, allDeleteButton, completeButton, deleteButton } = props;
    return (
      <>
          <div style={style.incompleteArea} >
              <p style={style.title}>未完了のTODO</p>
              <button onClick={ () => allDeleteButton()}>allDelete</button>
              <ul>
                  {todos.map((todo,index) => {
                      return (
                          <div key={todo} style={style.listRow}>
                              <li>{todo}</li>
                              <button onClick={ () => completeButton(index)}>complete</button>
                              <button onClick={ () => deleteButton(index)}>delete</button>
                          </div>
                      )
                  })}
              </ul>
          </div>
      </>
    );
};