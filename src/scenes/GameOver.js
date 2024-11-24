import { Scene } from "phaser";

export class GameOver extends Scene {
    constructor() {
        super("GameOver");
    }

    init(data) {
        this.score = data.score;
        this.sound.get("theme").pause();
    }

    create() {
        this.cameras.main.setBackgroundColor(0xffffff);

        this.text = this.add
            .text(512, this.cameras.main.height / 2, `Game Over\nFinal Score: ${this.score}`, {
                fontFamily: "surfer",
                fontSize: 64,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);

        this.tweens.add({
            targets: this.text,
            scale: 1.5,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: -1,
            repeatDelay: 0,
        });

        this.input.once("pointerdown", () => {
            this.scene.start("MainMenu");
        });
    }
}
