import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 500,
    parent: "game-container",
    backgroundColor: "#ffffff",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        orientation: "landscape",
    },
    scene: [Boot, Preloader, MainMenu, Game, GameOver],
};

export default new Phaser.Game(config);
