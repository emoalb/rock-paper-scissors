import calculateChoice from "./computerChoiceGenerator";

const calculateResult = (playerChoice) => {
    let computerChoice = calculateChoice()
    console.log("Player choice is:" + playerChoice)
    console.log("Computer choice is: " + computerChoice)
    if ((playerChoice + 1) % 3 === computerChoice) {
        return -1;
    } else if (playerChoice === computerChoice) {
        return 0;
    } else {
        return 1;

    }
}
export default calculateResult;