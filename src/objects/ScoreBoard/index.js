import "./style.css";
import PlayerName from "../../components/PlayerName";
import PlayerVs from "../../components/PlayerVs";
import PlayerPoint from "../../components/PlayerPoint";

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerPoint()}
            ${PlayerVs()}
            ${PlayerPoint()}
            ${PlayerName("Player2")}
        </header>
    `; 
}

export default ScoreBoard;