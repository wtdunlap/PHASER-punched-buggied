import { Scene } from "phaser";

export class MainMenu extends Scene {
    constructor() {
        super("MainMenu");
    }

    create() {
        this.add
            .image(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2 + 75,
                "grey"
            )
            .setOrigin(0.5).setScale(2.5);

        this.title = this.add
            .text(512, 260, "Road Trip! \nEveryone in the car", {
                fontFamily: "Courier New",
                fontSize: 70,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 15,
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
            let door = this.sound.add("door");
            door.play();
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
