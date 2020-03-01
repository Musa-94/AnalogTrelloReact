import React from "react";


const inputElement = props => {
    return (
        <>
            <input
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
            />
        </>
    );
};


export default React.memo(inputElement);