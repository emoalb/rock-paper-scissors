import React, {useState} from "react";
import IconOfChoice from "./IconOfChoice";
import observer from "../store/observer";
import eventsNames from "../store/eventsNames";


const PlayersDesk = () => {
    const [choice, setChoice] = useState(0)


    const decrementChoice = () => {
        let newChoice = choice - 1

        if (newChoice < 0) {
            newChoice = 2
        }
        setChoice(newChoice)
        console.log("Decrementing choice: " + choice)
        observer.triggerEvent(eventsNames.SET_PLAYER_CHOICE, newChoice)
    }

    const incrementChoice = () => {
        let newChoice = choice + 1

        if (newChoice > 2) {
            newChoice = 0;
        }
        setChoice(newChoice)
        console.log("Incrementing choice: " + choice)
        observer.triggerEvent(eventsNames.SET_PLAYER_CHOICE, newChoice)
    }

    return (
        <div id="players-desk" className={"game-desk"}>
            <div id="players-desk-icon-section">
                <button className={"choice-button"} onClick={decrementChoice}>&lt;</button>
                <IconOfChoice choice={choice}/>
                <button className={"choice-button"} onClick={incrementChoice}>&gt;</button>
            </div>

        </div>
    )
}
export default PlayersDesk;