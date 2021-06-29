import observer from "../store/observer";
import React, {useState, useEffect} from "react";


const ScoreFragment = (props) => {
    const [score, setScore] = useState(0);
    const addPoint = (points) => {
        setScore(score + points);
    }
    useEffect(() => {
        observer.subscribeEvent(props.eventName, addPoint)
return  ()=>{
            observer.unSubscribeEvent(props.eventName)
}
    })
    return (
        <div id={`${props.playerName}-score`} className={"scoreboard"}>
            <p>{props.playerName} score is: {score}</p>
        </div>
    )
}
export default ScoreFragment;