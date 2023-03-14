import React from "react";

type ButtonButtonPropsType={
    name:string,
    callBack:()=>void
}

export const ButtonButton = (props:ButtonButtonPropsType) => {
    const onCLickButtonHandler=()=>{
        props.callBack()
    }
    return (
        <div>
           <button onClick={onCLickButtonHandler}>{props.name}</button>
        </div>
    );
};