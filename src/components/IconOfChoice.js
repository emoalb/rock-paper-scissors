import React, {useState, useEffect} from "react";

const IconOfChoice = (props) => {
    const [icon, setIcon] = useState('')
    useEffect(() => {
        let availableIcons = ['rock', 'paper', 'scissors']
        console.log("Selected choice: " + props.choice)
        setIcon(availableIcons[props.choice])
    },[props.choice,icon])
    return (
        <div className={"icon"}>
            <i className={`far fa-hand-${icon}`}/>
            <p>{`${icon.substr(0,1).toUpperCase()}${icon.slice(1)}`}</p>
        </div>
    )


}
export default IconOfChoice