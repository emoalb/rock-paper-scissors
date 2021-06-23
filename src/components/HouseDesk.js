import React, {useState, useEffect} from "react";
import IconOfChoice from "./IconOfChoice";
import observer from "../store/observer";
import eventsNames from "../store/eventsNames";
import timeout from "../constants/timeout";

const HouseDesk = (props) => {
    const [choice, setChoice] = useState(3);
    useEffect(() => {
        observer.subscribeEvent(eventsNames.SET_HOUSE_CHOICE, setHouseChoice)
        return ()=>{
            observer.unSubscribeEvent(eventsNames.SET_HOUSE_CHOICE)
        }
    },[choice])
    const setHouseChoice = (choice) => {
        setChoice(choice)
        setTimeout(()=>{
            setChoice(3)
        },timeout.GAME_TIMEOUT)
    }
    return (
        <div id="houses-desk" className={"game-desk"}>
            {choice === 3 ? <p>Computer has not made a choice yet!</p> : <IconOfChoice choice={choice}/>}
        </div>
    )
};
export default HouseDesk;
