import "./style.css";
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";

function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Player2")}
        </header>
    `; 
}

export default ScoreBoard;