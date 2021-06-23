import {useEffect, useState} from "react";
import observer from "../store/observer";
import eventsNames from "../store/eventsNames";
import messages from "../constants/messages";
import timeout from "../constants/timeout";

const Footer = () => {
    const [message, setMessage] = useState(messages.MESSAGE_PLAY)
    useEffect(() => {
        observer.subscribeEvent(eventsNames.SET_GAME_MESSAGE, setGameMessage);
        return ()=>{
            observer.unSubscribeEvent(eventsNames.SET_GAME_MESSAGE)
        }
    },[message]);
    const setGameMessage = (message) => {
        setMessage(message)
        setTimeout(() => {
            setMessage(messages.MESSAGE_PLAY)
        }, timeout.GAME_TIMEOUT)
    }
    const resetScore = (ev) => {
        window.location.reload();
        setTimeout(() => {
        }, timeout.GAME_TIMEOUT)

    }
    return (<section id={'footer'}>
            <p id="message">{message}</p>
            <button id="reset-score" className="button" onClick={resetScore}>Reset Score!</button>

        </section>
    )

}
export default Footer;