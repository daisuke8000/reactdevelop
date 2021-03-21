import React from 'react';

const ColorfulMessage = (props) => {
    console.log(props)
    const { color, children } = props;
    const contentStyle = {
        //color,
        // オブジェクト名と当てはめる名前が同じであれば
        //　color, だけでも良い。
        color: color,
        fontSize: '22px',
    };
    return (
        <p style={contentStyle}>{children}</p>
    );
};

export default ColorfulMessage;