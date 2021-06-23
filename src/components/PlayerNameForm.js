import React from "react";
import {useHistory} from "react-router-dom"
import {useState} from "react";


const PlayerNameForm = () => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [isValid, setIsValid] = useState(false)
    const changeHandler = (event) => {
        setUserName(event.target.value)
    }

    const startGame = (event) => {
        event.preventDefault();
        let uname = userName.trim();
        console.log("Trying to play with name " + uname)
        if (uname.length < 3 || uname.length > 20) {
            console.log("Name is invalid")
            setIsValid(true)
            setTimeout(() => {
                setIsValid(false)
            }, 2000)
        } else {
            console.log("Name is valid")
            history.push("/game/" + uname)
        }
    }

    return (
        <form id="name-form">
            <label htmlFor="name-field">Please enter your name:</label>
            <input id="name-field" className="form-field" type="text" onChange={changeHandler}/>
            {isValid ? (<small className={"message-form"}>Name must be between 3 and 20 characters long!</small>) : (<small style={{visibility:"hidden"}}>lorem</small>)}
            <button className="button" onClick={startGame}>Start the Game</button>
        </form>
    )

}
export default PlayerNameForm