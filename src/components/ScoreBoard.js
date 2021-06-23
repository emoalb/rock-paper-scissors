import React from "react";
import ScoreFragment from "./ScoreFragment";
import eventsNames from "../store/eventsNames";
import {useParams} from "react-router";

const ScoreBoard = () => {
    const {uname} = useParams();


    return (
        <section id="score-board">
            <h2>Welcome {uname?uname.toLowerCase().charAt(0).toUpperCase()+uname.toLowerCase().substr(1,uname.length-1):"Anonymous"}!</h2>
            <div id="score-board-result">
                <ScoreFragment playerName={"Player"} eventName={eventsNames.INCREMENT_PLAYER_SCORE}/>
                <ScoreFragment playerName={"Computer"} eventName={eventsNames.INCREMENT_HOUSE_SCORE}/>
            </div>
        </section>
    )
}
export default ScoreBoard;