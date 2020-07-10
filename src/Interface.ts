interface Laptop {
    name: string
    on(): void
    off(): void
}

class Asus implements Laptop {
    name: string
    isGaming: boolean = true

    constructor(name: string) {
        this.name = name
    }

    on(): void {
        console.log("Hidupkan Laptop")
    }
    off(): void {
        console.log("Matikan Laptop")
    }
}

class Macbook implements Laptop {
    name: string
    isKeyboardLigth: boolean = true

    constructor(name: string) {
        this.name = name
    }

    on(): void {
        console.log("Hidupkan Laptop")
    }
    off(): void {
        console.log("Matikan Laptop")
    }
}


let asus = new Asus("Laptop Asus Gaming")
asus.on();
console.log("isGaming: " + asus.isGaming)
asus.off();


let macbook = new Macbook("Laptop Macbook")
macbook.on();
console.log("IsKeyboardLigth: " + macbook.isKeyboardLigth)
macbook.off();