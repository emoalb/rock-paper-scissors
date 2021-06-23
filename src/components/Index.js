
import PlayerNameForm from "./PlayerNameForm";

const Index = () => {
    return (
        <section id={"welcome-page"}>
            <h2>Welcome to Rock Paper Scissors game</h2>
            <p>Rules are simple </p>
            <div className={'circle-text'}>
                <i className={`far fa-hand-rock`}/>
                <p>&gt;</p>
                <i className={`far fa-hand-scissors`}/>
                <p>&gt;</p>
                <i className={`far fa-hand-paper`}/>
                <p>&gt;</p>
                <i className={`far fa-hand-rock`}/>
            </div>
            <PlayerNameForm/>
        </section>
    )
}
export default Index;