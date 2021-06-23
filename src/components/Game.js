import ScoreBoard from "./ScoreBoard";
import PlayersDesk from "./PlayersDesk";
import HouseDesk from "./HouseDesk";
import {Fragment} from "react";
import PlayButton from "./PlayButton";
import Footer from "./Footer";

const Game = (props) => {
    return (<Fragment>
            <ScoreBoard/>
            <section id="playground-area">
                <PlayersDesk/>
                <HouseDesk/>
            </section>
            <PlayButton/>
            <Footer/>
        </Fragment>
    )
}
export default Game;