import { Scene } from "phaser";

export class Game extends Scene {
    constructor() {
        super("Game");
    }

    init() {
        this.cameras.main.fadeIn(1000, 255, 255, 255);
    }

    create() {
        this.cameras.main.setBackgroundColor(0xffffff);
        this.add
            .image(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2 + 275,
                "window"
            )
            .setOrigin(0.5)
            .setScale(1.4);

            this.sittingUpDown();


        this.input.once("pointerdown", () => {
            this.scene.start("GameOver");
        });
    }

    sittingUpDown() {
        const camera = this.cameras.main;
        this.tweens.add({
            targets: camera,
            y: camera.y + 5,   // Move camera down by 50 pixels
            duration: 500,     // Duration for moving down
            ease: 'Sine.easeInOut', // Easing function
            yoyo: true,         // Reverse the tween to go back up
            repeat: 0,          // Repeat indefinitely
        });
    }
}
