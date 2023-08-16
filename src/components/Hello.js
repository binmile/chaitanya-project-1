import React from "react";
 
const Hello = (props) => {
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.superName}</h1>
            {props.children}
        </div>
    )
}

export default Hello