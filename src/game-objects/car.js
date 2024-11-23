import Phaser from "phaser";

export class Car extends Phaser.GameObjects.Image {
    constructor(scene) {
        super(scene);
        this.texture = "blank";
    }

    makeCar(texture) {
        console.log(`making ${texture}`);
        const newCar = this.scene.add
            .image(1500, 350, texture)
            .setScale(Phaser.Math.FloatBetween(1.5, 1.76))
            .setDepth(Phaser.Math.Between(-3, -1));
        // newCar.setInteractive();
        // newCar.on("pointerdown", function (texture) {
        //     if (texture == "buggy") {
        //         this.score++;
        //     } else {
        //         this.hits--;
        //     }
        // });
        this.scene.tweens.add({
            targets: newCar,
            x: { from: 1500, to: -500 },
            duration: 2000,
            repeat: 0,
            onStart: function () {
                if (texture == "buggy") {
                    console.log(`🤣😂😁${texture} driving by`);
                    this.texture = texture;
                } else {
                    console.log(`${texture} driving by`);
                }
            },
            onComplete: function () {
                console.log(`${texture} missed`);
            },
        });
        this.texture = texture;
    }

    makeTexture() {
        const rarity = Phaser.Math.Between(1, 10);
        if (rarity === 10) {
            this.makeCar("buggy");
        } else if (rarity <= 9 && rarity >= 7) {
            switch (Phaser.Math.Between(1, 8)) {
                case 1:
                    // this.makeCar("ambulance");
                    console.log("ambulance");
                    break;
                case 2:
                    // this.makeCar("broDozer");
                    console.log("broDozer");
                    break;
                case 3:
                    // this.makeCar("fireTruck");
                    console.log("fireTruck");
                    break;
                case 4:
                    // this.makeCar("mail");
                    console.log("mail");
                    break;
                case 5:
                    // this.makeCar("playmobile");
                    console.log("playmobile");
                    break;
                case 6:
                    // this.makeCar("police");
                    console.log("police");
                    break;
                case 7:
                    // this.makeCar("smartCar");
                    console.log("smartCar");
                    break;
                case 8:
                    // this.makeCar("sodaTruck");
                    console.log("sodaTruck");
                    break;
            }
        } else if (rarity <= 6) {
            switch (Phaser.Math.Between(1, 10)) {
                case 1:
                    // this.makeCar("bigRig");
                    console.log("bigRig");
                    break;
                case 2:
                    // this.makeCar("boxTruck");
                    console.log("boxTruck");
                    break;
                case 3:
                    this.makeCar("coupe");
                    console.log("coupe");
                    break;
                case 4:
                    this.makeCar("hatch");
                    console.log("hatch");
                    break;
                case 5:
                    // this.makeCar("jeep");
                    console.log("jeep");
                    break;
                case 6:
                    // this.makeCar("muscleCar");
                    console.log("muscleCar");
                    break;
                case 7:
                    this.makeCar("sport");
                    console.log("sport");
                    break;
                case 8:
                    // this.makeCar("SUV");
                    console.log("SUV");
                    break;
                case 9:
                    // this.makeCar("truck");
                    console.log("truck");
                    break;
                case 10:
                    // this.makeCar("van");
                    console.log("van");
                    break;
            }
        }
    }
}
