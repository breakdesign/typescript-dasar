class List<T> {
    private data: T[];

    // rest parameter(...) menampung value dalam bentuk array
    constructor(...elements: T[]) {
        this.data = elements
    }

    add(element: T): void {
        this.data.push(element)
    }

    addMultiple(...element: T[]): void {
        this.data.push(...element)
    }

    getAll(): T[] {
        return this.data
    }
}

// jika generic di isi number maka isi array harus number
// jika tanpa rest parameter harus menambahkan array didalamnya
// let number = new List<number>([1,2,3])
// jika menggunakan rest parameter isi dari param tinggal langsung isinya
let number = new List<number>(1, 2, 3)
console.log(number)
number.add(4)
console.log(number)
number.addMultiple(5, 6, 7)
console.log(number.getAll())
