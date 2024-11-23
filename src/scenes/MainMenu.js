import { Scene } from "phaser";

export class MainMenu extends Scene {
    constructor() {
        super("MainMenu");
    }

    init() {
        let music = this.sound.add("theme", { volume: 0.15 });
        music.loop = true;
        music.play();
    }

    create() {
        this.add
            .image(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2 + 75,
                "hatch"
            )
            .setOrigin(0.5)
            .setScale(1.5);

        this.title = this.add
            .text(512, 260, "Road Trip! \nEveryone in the car", {
                fontFamily: "surfer",
                fontSize: 70,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);

        this.tweens.add({
            targets: this.title,
            scale: 1.25,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: -1,
            repeatDelay: 0,
        });

        this.input.once("pointerdown", () => {
            this.sound.add("door").play();
            this.cameras.main.fadeOut(1000, 255, 255, 255);
            this.cameras.main.once(
                Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
                () => {
                    this.scene.start("Game");
                }
            );
        });
    }
}
