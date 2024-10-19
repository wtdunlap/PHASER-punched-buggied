import { Scene } from "phaser";

export class Boot extends Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        this.load.image("splash", "assets/textures/splash.png");
        this.load.audio("theme", "./sounds/joakimKarud_enjoy.mp3");
    }

    create() {
        this.scene.start("Preloader");
    }
}
