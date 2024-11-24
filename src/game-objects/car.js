import Phaser from "phaser";

export class Car extends Phaser.GameObjects.Image {
    constructor(scene) {
        super(scene);
        this.texture = "blank";
    }

    makeCar(texture) {
        console.log(`making ${texture}`);
        const newCar = this.scene.add
            .image(1500, 220, texture)
            .setScale(Phaser.Math.FloatBetween(1.6, 1.75))
            .setDepth(Phaser.Math.Between(-3, -1));

        if (texture == "bigRig" || "bigRig2" || "bigRig3") {
            newCar.setScale(0.8);
            this.scene.tweens.add({
                targets: newCar,
                x: { from: 3000, to: -3000 },
                duration: 5500,
                repeat: 0,
                onStart: function () {
                    console.log(`${texture} driving by`);
                },
                onComplete: function () {
                    console.log(`${texture} missed`);
                },
            });
        } else {
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
        }

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
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            // this.makeCar("broDozer");
                            console.log("broDozer");
                            break;
                        case 2:
                            // this.makeCar("broDozer");
                            console.log("broDozer2");
                            break;
                        case 3:
                            // this.makeCar("broDozer");
                            console.log("broDozer3");
                            break;
                    }
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
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            // this.makeCar("smartCar");
                            console.log("smartCar");
                            break;
                        case 2:
                            // this.makeCar("smartCar");
                            console.log("smartCar2");
                            break;
                        case 3:
                            // this.makeCar("smartCar");
                            console.log("smartCar3");
                            break;
                    }
                    break;
                case 8:
                    // this.makeCar("sodaTruck");
                    console.log("sodaTruck");
                    break;
            }
        } else if (rarity <= 6) {
            switch (Phaser.Math.Between(1, 10)) {
                case 1:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            this.makeCar("bigRig");
                            console.log("bigRig");
                            break;
                        case 2:
                            this.makeCar("bigRig");
                            console.log("bigRig2");
                            break;
                        case 3:
                            this.makeCar("bigRig");
                            console.log("bigRig3");
                            break;
                    }
                    break;
                case 2:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            this.makeCar("boxTruck");
                            console.log("boxTruck");
                            break;
                        case 2:
                            this.makeCar("boxTruck");
                            console.log("boxTruck2");
                            break;
                        case 3:
                            this.makeCar("boxTruck");
                            console.log("boxTruck3");
                            break;
                    }
                    break;
                case 3:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            this.makeCar("coupe");
                            console.log("coupe");
                            break;
                        case 2:
                            this.makeCar("coupe");
                            console.log("coupe2");
                            break;
                        case 3:
                            this.makeCar("coupe");
                            console.log("coupe3");
                            break;
                    }
                    break;
                case 4:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            this.makeCar("hatch");
                            console.log("hatch");
                            break;
                        case 2:
                            this.makeCar("hatch");
                            console.log("hatch2");
                            break;
                        case 3:
                            this.makeCar("hatch");
                            console.log("hatch3");
                            break;
                    }
                    break;
                case 5:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            // this.makeCar("jeep");
                            console.log("jeep");
                            break;
                        case 2:
                            // this.makeCar("jeep");
                            console.log("jeep2");
                            break;
                        case 3:
                            // this.makeCar("jeep");
                            console.log("jeep3");
                            break;
                    }
                    break;
                case 6:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            // this.makeCar("muscleCar");
                            console.log("muscleCar");
                            break;
                        case 2:
                            // this.makeCar("muscleCar");
                            console.log("muscleCar2");
                            break;
                        case 3:
                            // this.makeCar("muscleCar");
                            console.log("muscleCar3");
                            break;
                    }
                    break;
                case 7:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            this.makeCar("sport");
                            console.log("sport");
                            break;
                        case 2:
                            this.makeCar("sport");
                            console.log("sport2");
                            break;
                        case 3:
                            this.makeCar("sport");
                            console.log("sport3");
                            break;
                    }
                    break;
                case 8:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            // this.makeCar("SUV");
                            console.log("SUV");
                            break;
                        case 2:
                            // this.makeCar("SUV");
                            console.log("SUV2");
                            break;
                        case 3:
                            // this.makeCar("SUV");
                            console.log("SUV3");
                            break;
                    }
                    break;
                case 9:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            this.makeCar("truck");
                            console.log("truck");
                            break;
                        case 2:
                            this.makeCar("truck");
                            console.log("truck2");
                            break;
                        case 3:
                            this.makeCar("truck");
                            console.log("truck3");
                            break;
                    }
                    break;
                case 10:
                    switch (Phaser.Math.Between(1, 3)) {
                        case 1:
                            // this.makeCar("van");
                            console.log("van");
                            break;
                        case 2:
                            // this.makeCar("van");
                            console.log("van2");
                            break;
                        case 3:
                            // this.makeCar("van");
                            console.log("van3");
                            break;
                    }
                    break;
            }
        }
    }
}
