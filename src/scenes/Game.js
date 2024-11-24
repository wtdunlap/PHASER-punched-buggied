import Phaser, { Scene } from "phaser";
import { Car } from "../game-objects/car";

export class Game extends Scene {
    constructor() {
        super("Game", { active: true });
        this.score;
        this.workingScore;
        this.hits;
        this.workingHits;
        this.timerEvent;
        this.texture;
    }

    init() {
        if (!this.score) {
            this.score = 0;
        }
        this.workingScore = this.score;
        if (!this.hits) {
            this.hits = 3;
        }
        this.workingHits = this.hits;
    }

    create() {
        // setup scene
        const car = new Car(this);
        this.cameras.main
            .setBackgroundColor(0xffffff)
            .fadeIn(1000, 255, 255, 255);
        this.interior = this.add
            .image(
                this.sys.game.config.width / 2 + 150,
                this.sys.game.config.height / 2 + 200,
                "interior"
            )
            .setOrigin(0.5)
            .setScale(1.4)
            .setDepth(10);

        this.hitsText = this.add
            .text(16, 16, `Hits: ${this.hits}`, {
                fontFamily: "surfer",
                fontSize: "36px",
                fill: "#ffffff",
                stroke: "#000000",
                strokeThickness: 6,
            })
            .setDepth(16);

        this.scoreText = this.add
            .text(16, 60, `Score: ${this.score}`, {
                fontFamily: "surfer",
                fontSize: "36px",
                fill: "#ffffff",
                stroke: "#000000",
                strokeThickness: 6,
            })
            .setDepth(16);

        // animations
        const gettingIn = this.tweens.add({
            targets: this.interior,
            y: this.interior.y + 5,
            duration: 500,
            ease: "Sine.easeInOut",
            yoyo: true,
            repeat: 0,
        });
        gettingIn.on("start", () => {
            console.log("getting in the car");
        });
        gettingIn.on("complete", () => {
            console.log("sitting in the car");
        });

        // controls
        this.input.on("pointerdown", () => {
            if (this.texture == "buggy") {
                this.score = this.score + 1;
                console.log("Scored");
            } else {
                this.hits = this.hits - 1;
            }
        });

        // timer event that fires between every 0.75 and 2.5 seconds
        this.timerEvent = this.time.addEvent({ delay: Phaser.Math.Between(750, 2500), callback: this.onEvent, callbackScope: this, loop: true });
    }

    // makes a new car and reference the texture used
    onEvent() {
        const car = new Car(this);
        car.makeTexture();
        this.texture = car.texture;
    }

    // stops and passes current score to gameover screen
    gameOver() {
        this.scene.start("GameOver", {score: this.score})
    }

    update() {
        if (this.score !== this.workingScore) {
            this.scoreText.setText("Score: " + this.score);
            this.workingScore = this.score;
        }
        if (this.hits !== this.workingHits) {
            this.hitsText.setText("Hits: " + this.hits);
            this.workingHits = this.hits;
        }
        if (this.hits <= 0) {
            this.gameOver();
        }
    }
}
