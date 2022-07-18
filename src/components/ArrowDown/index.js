import "./style.css";

function ArrowDown(currentPlayer = 1) {
    return /*html*/`
        <img class="arrow-down" 
             data-currentPlayer="${currentPlayer}"
             src="./src/images/icon-arrow-down.png" 
             alt="Arrow down">
    `;
}

export default ArrowDown;