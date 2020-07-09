// Contoh Function Tanpa Nilai Return
function printName(): void {
    console.log("hello my name is Rizky")
}


// Contoh Function Dengan Return String
function getName(): string {
    return "Rizky Maulana"
}


// Contoh Function Dengan Return Number
function getAge(): number {
    return 25
}


// Contoh Function 
function sum(val1: number, val2: number): number {
    return val1 * val2
}


// Contoh Tipe Data Function
type Tambah = (val1: number, val2: number) => number

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2
}


// Contoh Function dengan default parameter
const fullName = (first: string, last: string = "Maulana"): string => {
    return first + " " + last
}


// Contoh Function dengan Optional Parameter
// jika menggunakan `?` ketika parameter kedua dikosongi maka akan return `undefined`
// optional paramter tidak bekerja untuk tipe data number
const getFullName = (first: string, last?: string): string => {
    return first + " " + last
}