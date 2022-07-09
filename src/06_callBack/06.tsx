import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const onNameChange = () => {
        console.log("name change")
    }
    const onAgeChange = (event:ChangeEvent<HTMLInputElement> ) => {
        console.log("age change" + " :" + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }
    return (
        <div>
            <div>Kirill</div>
            <textarea onBlur={focusLostHandler} onChange={onNameChange}></textarea>
            <input type="number" onChange={onAgeChange}/>
            <button name="delete" onClick={deleteUser}>Delete</button>
        </div>

    )
}