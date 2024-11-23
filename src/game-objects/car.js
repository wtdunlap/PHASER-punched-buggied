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
            return this.texture;
        } else if (rarity <= 9 && rarity >= 7) {
            switch (Phaser.Math.Between(1, 8)) {
                case 1:
                    // this.makeCar("ambulance");
                    console.log("ambulance");
                    return this.texture;
                case 2:
                    // this.makeCar("broDozer");
                    console.log("broDozer");
                    return this.texture;
                case 3:
                    // this.makeCar("fireTruck");
                    console.log("fireTruck");
                    return this.texture;
                case 4:
                    // this.makeCar("mail");
                    console.log("mail");
                    return this.texture;
                case 5:
                    // this.makeCar("playmobile");
                    console.log("playmobile");
                    return this.texture;
                case 6:
                    // this.makeCar("police");
                    console.log("police");
                    return this.texture;
                case 7:
                    // this.makeCar("smartCar");
                    console.log("smartCar");
                    return this.texture;
                case 8:
                    // this.makeCar("sodaTruck");
                    console.log("sodaTruck");
                    return this.texture;
            }
        } else if (rarity <= 6) {
            switch (Phaser.Math.Between(1, 10)) {
                case 1:
                    // this.makeCar("bigRig");
                    console.log("bigRig");
                    return this.texture;
                case 2:
                    // this.makeCar("boxTruck");
                    console.log("boxTruck");
                    return this.texture;
                case 3:
                    this.makeCar("coupe");
                    console.log("coupe");
                    return this.texture;
                case 4:
                    this.makeCar("hatch");
                    console.log("hatch");
                    return this.texture;
                case 5:
                    // this.makeCar("jeep");
                    console.log("jeep");
                    return this.texture;
                case 6:
                    // this.makeCar("muscleCar");
                    console.log("muscleCar");
                    return this.texture;
                case 7:
                    this.makeCar("sport");
                    console.log("sport");
                    return this.texture;
                case 8:
                    // this.makeCar("SUV");
                    console.log("SUV");
                    return this.texture;
                case 9:
                    // this.makeCar("truck");
                    console.log("truck");
                    return this.texture;
                case 10:
                    // this.makeCar("van");
                    console.log("van");
                    return this.texture;
            }
        }
    }
}
