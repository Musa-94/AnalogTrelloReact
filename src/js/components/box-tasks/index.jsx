import React from "react";
import Input from "../input/input";
import "./styel.css";

const BoxTasks = props => {
    return (
        <div className="wrapper__tasks">
            <div className="task-wrapper__write">
                <Input
                    className="input-write"
                    type="text"
                    placeholder="Создать задачу"
                />
            </div>
        </div>
    );
};

export default React.memo(BoxTasks);