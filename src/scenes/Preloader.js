import { Scene } from "phaser";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        this.load.setPath("assets");

        // vehicles - common
        this.load.image("coupe", "./textures/coupe.png");
        // this.load.image("coupe2", "./textures/coupe2.png");
        // this.load.image("coupe3", "./textures/coupe3.png");

        this.load.image("sport", "./textures/sport.png");
        // this.load.image("sport2", "./textures/sport2.png");
        // this.load.image("sport3", "./textures/sport3.png");

        this.load.image("hatch", "./textures/hatch.png");
        // this.load.image("hatch2", "./textures/hatch2.png");
        // this.load.image("hatch3", "./textures/hatch3.png");

        this.load.image("jeep", "./textures/jeep.png");
        // this.load.image("jeep2", "./textures/jeep2.png");
        // this.load.image("jeep3", "./textures/jeep3.png");

        this.load.image("muscleCar", "./textures/muscleCar.png");
        // this.load.image("muscleCar2", "./textures/muscleCar2.png");
        // this.load.image("muscleCar3", "./textures/muscleCar3.png");

        this.load.image("SUV", "./textures/SUV.png");
        // this.load.image("SUV2", "./textures/SUV2.png");
        // this.load.image("SUV3", "./textures/SUV3.png");

        // this.load.image("truck", "./textures/truck.png");
        // this.load.image("truck2", "./textures/truck2.png");
        // this.load.image("truck3", "./textures/truck3.png");

        // this.load.image("van", "./textures/van.png");
        // this.load.image("van2", "./textures/van2.png");
        // this.load.image("van3", "./textures/van3.png");

        this.load.image("boxTruck", "./textures/boxTruck.png");
        // this.load.image("boxTruck2", "./textures/boxTruck2.png");
        // this.load.image("boxTruck3", "./textures/boxTruck3.png");

        this.load.image("bigRig", "./textures/bigRig.png");
        // this.load.image("bigRig2", "./textures/bigRig2.png");
        // this.load.image("bigRig3", "./textures/bigRig3.png");

        // vehicles - rare
        this.load.image("buggy", "./textures/rare/buggy.png");

        // misc
        this.load.image("interior", "./textures/interior.png");
        this.load.image("splash", "./textures/splash.png");

        // audio
        this.load.audio("door", "./sounds/openThenClose.mp3");
        this.load.audio("theme", "./sounds/joakimKarud_enjoy.mp3");
    }

    create() {
        this.add
            .image(
                this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                "splash"
            )
            .setScale(0.55)
            .setOrigin(0.5);

        this.input.once("pointerdown", () => {
            this.scene.start("MainMenu");
        });
    }
}
