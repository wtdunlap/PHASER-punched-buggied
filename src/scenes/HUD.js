import {Scene} from "phaser";

export class HUD extends Scene {
    constructor() {
        super("HUD");
    }

    init() {

    }

    create() {
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff'
        });

        this.healthText = this.add.text(16, 60, 'Chances: 3', {
            fontSize: '32px',
            fill: '#fff'
        });
    }


}