import React, {useEffect, useState} from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import Button from "@material-ui/core/Button";

const App = () => {
    console.log("レンダリングの確認")
    const [num, setNum] = useState(0);
    const [faceShowFlag, setFaceShowFlag] = useState(true);
    const displayStyle = {
        display: 'flex',
    };
    const styles ={
        margin: 'auto',
    }

    const onClickCountUp = () => {
        setNum(num +1 );
    };

    const onClickSwitch = () => {
        setFaceShowFlag(!faceShowFlag);
    };

    useEffect(() => {
        if (num > 0){
            if (num % 3 === 0){
                faceShowFlag || setFaceShowFlag(true);
            }else{
                faceShowFlag && setFaceShowFlag(false);
            }
        }
    }, [num]);

    return (
        <>
            <h1 style={{color : '#666'}}>Hello</h1>
            <ColorfulMessage color="blue">
                Iam Developer! WhatUp?
            </ColorfulMessage>
            <ColorfulMessage color="pink">
                私は開発者です！
            </ColorfulMessage>
            <div style={displayStyle}>
                <Button variant="contained" color="primary" onClick={onClickCountUp}>CountUp!</Button>
                <p style={styles}>{num}</p>
            </div>
            <br/>
            <div style={displayStyle}>
                <Button variant="contained" color="inherit" onClick={onClickSwitch}>on/off</Button>
                {faceShowFlag && <p style={styles}>＼(^o^)／</p>}
            </div>
        </>
    );
};

export default App;