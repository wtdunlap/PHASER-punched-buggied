import Phaser from "phaser";

export default function makeTexture() {
    const rarity = Phaser.Math.Between(1, 10);
    if (rarity === 10) {
        return ["buggy", 1.75];
    } else if (rarity <= 9 && rarity >= 7) {
        switch (Phaser.Math.Between(1, 8)) {
            case 1:
                console.log("ambulance");
                return ["blank", 1];
            case 2:
                // subsets for colors
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("broDozer");
                        return ["blank", 1];
                    case 2:
                        console.log("broDozer2");
                        return ["blank", 1];
                    case 3:
                        console.log("broDozer3");
                        return ["blank", 1];
                }
                break;
            case 3:
                console.log("fireTruck");
                return ["blank", 1];
                break;
            case 4:
                console.log("mail");
                return ["blank", 1];
                break;
            case 5:
                console.log("playmobile");
                return ["blank", 1];
                break;
            case 6:
                console.log("police");
                return ["blank", 1];
                break;
            case 7:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("smartCar");
                        return ["blank", 1];
                        break;
                    case 2:
                        console.log("smartCar2");
                        return ["blank", 1];
                        break;
                    case 3:
                        console.log("smartCar3");
                        return ["blank", 1];
                        break;
                }
                break;
            case 8:
                console.log("sodaTruck");
                return ["blank", 1];
                break;
        }
    } else if (rarity <= 6) {
        switch (Phaser.Math.Between(1, 10)) {
            case 1:
                // all common cars have 3 types
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("bigRig");
                        return ["bigRig", 0.8];
                        break;
                    case 2:
                        console.log("bigRig2");
                        return ["bigRig", 0.8];
                        break;
                    case 3:
                        console.log("bigRig3");
                        return ["bigRig", 0.8];
                        break;
                }
                break;
            case 2:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("boxTruck");
                        return ["boxTruck", 1.75];
                        break;
                    case 2:
                        console.log("boxTruck2");
                        return ["boxTruck", 1.75];
                        break;
                    case 3:
                        console.log("boxTruck3");
                        return ["boxTruck", 1.75];
                        break;
                }
                break;
            case 3:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("coupe");
                        return ["coupe", 1.75];
                        break;
                    case 2:
                        console.log("coupe2");
                        return ["coupe", 1.75];
                        break;
                    case 3:
                        console.log("coupe3");
                        return ["coupe", 1.75];
                        break;
                }
                break;
            case 4:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("hatch");
                        return ["hatch", 1.75];
                        break;
                    case 2:
                        console.log("hatch2");
                        return ["hatch", 1.75];
                        break;
                    case 3:
                        console.log("hatch3");
                        return ["hatch", 1.75];
                        break;
                }
                break;
            case 5:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("jeep");
                        return ["jeep", 1];
                        break;
                    case 2:
                        console.log("jeep2");
                        return ["jeep", 1];
                        break;
                    case 3:
                        console.log("jeep3");
                        return ["jeep", 1];
                        break;
                }
                break;
            case 6:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("muscleCar");
                        return ["muscleCar", 1];
                        break;
                    case 2:
                        console.log("muscleCar2");
                        return ["muscleCar", 1];
                        break;
                    case 3:
                        console.log("muscleCar3");
                        return ["muscleCar", 1];
                        break;
                }
                break;
            case 7:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("sport");
                        return ["sport", 1.75];
                        break;
                    case 2:
                        console.log("sport2");
                        return ["sport", 1.75];
                        break;
                    case 3:
                        console.log("sport3");
                        return ["sport", 1.75];
                        break;
                }
                break;
            case 8:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("SUV");
                        return ["SUV", 1];
                    case 2:
                        console.log("SUV2");
                        return ["SUV", 1];
                    case 3:
                        console.log("SUV3");
                        return ["SUV", 1];
                }
                break;
            case 9:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("truck");
                        return ["blank", 1];
                    case 2:
                        console.log("truck2");
                        return ["blank", 1];
                    case 3:
                        console.log("truck3");
                        return ["blank", 1];
                }
                break;
            case 10:
                switch (Phaser.Math.Between(1, 3)) {
                    case 1:
                        console.log("van");
                        return ["blank", 1];
                    case 2:
                        console.log("van2");
                        return ["blank", 1];
                    case 3:
                        console.log("van3");
                        return ["blank", 1];
                }
                break;
        }
    }
}
