import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("logo-javascript", "Logo javascript")}
        </article>
    `;
}

export default CardFrontBack;