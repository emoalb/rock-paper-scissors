import observer from "../store/observer";
import eventsNames from "../store/eventsNames";


const getRandomInt = (max) =>  Math.floor(Math.random() * max);

const calculateChoice = () => {
    let result = getRandomInt(3);
    observer.triggerEvent(eventsNames.SET_HOUSE_CHOICE, result);
    return result
}
export default calculateChoice;


