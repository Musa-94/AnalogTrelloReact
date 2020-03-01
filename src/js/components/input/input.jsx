import React from "react";


const inputElement = props => {
    return (
        <div className="input__wrapper">
            <input
                type={props.type}
            />
        </div>
    );
};


export default React.memo(inputElement);