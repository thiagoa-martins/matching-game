import "./style.css";

function CardGameVerse(nameImage, alt) {
    return `
        <article class="card-game-verse">
            <img src="./src/images/${nameImage}" alt="${alt}">
        </article>
    `;
}

export default CardGameVerse;