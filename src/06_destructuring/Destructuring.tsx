import React from "react";

type MenType = {
    name: string,
    age: number,
    lessons: [{title: string}],
    address:{
        city:{
            title: string
        }
    }
};

type PropsType = {
    title: string
    man: MenType
}
export const MenComponent: React.FC<PropsType> = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <hr/>
            <div>
                {props.man.name}
            </div>
        </div>
    )
}