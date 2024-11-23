import { Scene } from "phaser";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        this.load.setPath("assets");

        this.load.image("coupe", "./textures/coupe.png");
        this.load.image("sport", "./textures/sport.png");
        this.load.image("hatch", "./textures/hatch.png");
        this.load.image("buggy", "./textures/rare/buggy.png");
        this.load.image("interior", "./textures/interior.png");
        this.load.image("splash", "./textures/splash.png");

        this.load.audio("door", "./sounds/openThenClose.mp3");
        this.load.audio("theme", "./sounds/joakimKarud_enjoy.mp3");
    }

    create() {
        this.add
            .image(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                "splash"
            )
            .setScale(0.55)
            .setOrigin(0.5);

        this.input.once("pointerdown", () => {
            this.scene.start("MainMenu");
        });
    }
}
