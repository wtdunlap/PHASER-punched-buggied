import Phaser, { Scene } from "phaser";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        this.load.setPath("assets");

        this.load.image("grey", "./textures/grey.png");
        this.load.image("red", "./textures/red.png");
        this.load.image("yellow", "./textures/yellow.png");
        this.load.image("window", "./textures/window.png");
        this.load.image("splash", "./textures/splash.png");
        this.load.image("splash2", "./textures/splash2.png");

        this.load.audio("door", "./sounds/openThenClose.mp3");
        this.load.audio("theme", "./sounds/joakimKarud_enjoy.mp3");
    }

    create() {
        let image = this.add.image(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            "splash2"
        );
        let music = this.sound.add("theme", { volume: 0.25 });

        let scaleX = this.cameras.main.width / image.width;
        let scaleY = this.cameras.main.height / image.height;
        let scale = Math.max(scaleX, scaleY);
        image.setScale(scale).setScrollFactor(0);

        this.input.once("pointerdown", () => {
            this.scene.start("MainMenu");
            music.loop = true;
            music.play();
        });
    }
}
