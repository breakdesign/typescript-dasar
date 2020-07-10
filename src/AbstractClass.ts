abstract class Kendaraan {
    abstract roda: number;

    start(): void {
        console.log("Hidupkan Mesin");
    }
}


class Mobil extends Kendaraan {
    roda:number = 4
}

class Motor extends Kendaraan {
    roda:number = 2
}


let mobil = new Mobil();
console.log("Roda Mobil: " + mobil.roda)
mobil.start()

let motor = new Motor();
console.log("Roda Motor: " + motor.roda)
motor.start()