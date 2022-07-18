import "./style.css";
import PlayerName from "../../components/PlayerName";
import PlayerPoint from "../../components/PlayerPoint";
import VsPlayer from "../../components/VsPlayer";

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerPoint()}
            ${VsPlayer()}
            ${PlayerPoint()}
            ${PlayerName("Player2")}
        </header>
    `; 
}

export default ScoreBoard;