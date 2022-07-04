import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";

import PlayerName from "./src/components/PlayerName";
import CardGame from "./src/components/CardGame";
import CardGameVerse from "./src/components/CardGameVerse";
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlPlayerName = PlayerName("Player1") + PlayerName("Player2");

$root.insertAdjacentHTML("beforeend", $htmlPlayerName)

const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);



