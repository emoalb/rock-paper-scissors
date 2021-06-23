import calculateResult from "../engine/calculateResult";
import observer from "../store/observer";
import eventsNames from "../store/eventsNames";
import {useEffect, useState} from "react";
import messages from "../constants/messages";
import timeout from "../constants/timeout";

const PlayButton = () => {
    const [choice, setChoice] = useState(0)
    const [isDisabledButton,setIsDisabledButton] = useState(false)

    useEffect(() => {
        observer.subscribeEvent(eventsNames.SET_PLAYER_CHOICE, setPlayerChoice);
   return ()=>{
       observer.unSubscribeEvent(eventsNames.SET_PLAYER_CHOICE)
   }
    },[choice])

    const setPlayerChoice = (choice)=>{
        console.log("Play Choice is:" + choice)

        setChoice(choice)


    }
    const placeChoice = (event) => {
        event.preventDefault();
        setIsDisabledButton(true)
        let result = calculateResult(choice)

        if (result === -1) {
            observer.triggerEvent(eventsNames.INCREMENT_HOUSE_SCORE, 1)
            observer.triggerEvent(eventsNames.SET_GAME_MESSAGE,messages.MESSAGE_LOOSE)
        } else if (result === 0) {
            observer.triggerEvent(eventsNames.SET_GAME_MESSAGE,messages.MESSAGE_TIE)
        } else if (result === 1) {
            observer.triggerEvent(eventsNames.INCREMENT_PLAYER_SCORE, 1)
            observer.triggerEvent(eventsNames.SET_GAME_MESSAGE, messages.MESSAGE_WIN)
        }
        setTimeout(()=>{
            setIsDisabledButton(false)
        },timeout.GAME_TIMEOUT);
    }
    return (
        <button id="play-button"  className="button" disabled={isDisabledButton} onClick={placeChoice}>Play!</button>
    )
}
export default PlayButton