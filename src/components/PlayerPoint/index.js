import ArrowDown from "../ArrowDown";
import "./style.css";

function PlayerPoint() {
    return /*html*/`
        <div>
            ${ArrowDown()}
            <article class="player-point">
                <div></div>
                <div></div>
                <div></div>
            </article>
        </div>
    `;
}

export default PlayerPoint;