import React from "react";

const style = {
    completeArea: {
        backgroundColor: "#ffffe0",
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

export const CompleteTodos = (props) => {
    const { todos, returnButton } = props;

    return (
      <>
          <div style={style.completeArea}>
              <p style={style.title}>完了のTODO😓
              </p>
              <ul>
                  {todos.map((todo,index) => {
                      return (
                          <div key={todo} style={style.listRow}>
                              <li>{todo}</li>
                              <button onClick={ () => returnButton(index)}>Return</button>
                          </div>
                      )
                  })}
              </ul>
          </div>
      </>
    );
};