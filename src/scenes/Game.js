import Phaser, { Scene } from "phaser";
import makeTexture from "../utils/makeTexture";
// import { Car } from "../game-objects/car";

export class Game extends Scene {
    constructor() {
        super("Game", { active: true });
        this.score;
        this.workingScore;
        this.hits;
        this.workingHits;
        this.timerEvent;
        this.statArray = [];
        this.activeCars = [];
        this.buggyX;
        this.clicked = false;
        this.clickable = false;
    }

    init() {
        if (!this.score || this.score > 0) {
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

        // timer event that fires between every 1.5 and 2.5 seconds
        this.timerEvent = this.time.addEvent({
            delay: Phaser.Math.Between(1500, 2500),
            callback: this.onEvent,
            callbackScope: this,
            loop: true,
        });

        // controls
        this.input.on("pointerdown", () => {
            if (this.clickable == true && this.clicked == false) {
                console.log("acceptable");
                this.score = this.score + 1;
                this.clicked = true;
            } else {
                this.hits = this.hits - 1;
            }
            // if (this.clickable == true) {
            //     if (this.clicked == false) {
            //     this.score = this.score + 1;
            //     this.clicked = true;
            // } else {
            //         this.hits = this.hits - 1;
            //     }
            // }
        });
    }

    // makes a new car and reference the texture used
    onEvent() {
        this.statArray = makeTexture();
        this.makeCar(this.statArray);
    }

    makeCar() {
        let [texture, scale] = this.statArray;
        console.log(`making ${texture}`);
        if (texture !== "blank") {
            const newCar = this.add
                .image(1500, 225, texture)
                .setScale(scale)
                .setDepth(-1);
            newCar.setInteractive();

            if (
                texture == "bigRig" ||
                texture == "bigRig2" ||
                texture == "bigRig3"
            ) {
                newCar.setScale(scale);
                newCar.setDepth(-5);
                this.tweens.add({
                    targets: newCar,
                    x: { from: 3000, to: -3000 },
                    duration: 5500,
                    repeat: 0,
                    onStart: function () {
                        console.log(`${texture} driving by`);
                    },
                    onComplete: function () {},
                });
            } else {
                this.tweens.add({
                    targets: newCar,
                    x: { from: 1500, to: -500 },
                    duration: 2500,
                    repeat: 0,
                    onStart: function () {
                        if (texture == "buggy") {
                            console.log(`🤣😂😁${texture} driving by`);
                            this.clickable = false;
                            this.clicked = false;
                        } else {
                            console.log(`${texture} driving by`);
                            this.clickable = false;
                            this.clicked = false;
                        }
                    },
                    onUpdate: (tween, target) => {
                        if (texture == "buggy" && target.visible == true) {
                            this.clickable = true;
                        } else {
                            this.clickable = false;
                        }
                    },
                    onComplete: function () {
                        this.clickable = false;
                        this.clicked = false;
                    },
                });
            }
        } else {
            console.log("bad texture");
        }
    }

    // stops and passes current score to gameover screen
    gameOver() {
        this.scene.start("GameOver", { score: this.score });
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
