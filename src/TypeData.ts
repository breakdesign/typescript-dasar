// Penulisan Tipe Data String
let nama = "Rizky" // cara pertama
let tipeString: string // cara kedua
let namaAkhir: string = "Maulana" // cara ketiga

nama = "Rizky Maulana"


// Penulisan Tipe Data Number
let umur = "25" // cara pertama
let tipeNumber: number // cara kedua
let umurSaya: number = 25  // cara ketiga

umurSaya = 26


// Penulisan Tipe Data Boolean
let lakiLaki = true // cara pertama
let tipeBoolean: boolean // cara kedua
let sudahMenikah: boolean = false  // cara ketiga

tipeBoolean = false


// Penulisan Tipe Data Any
let tipeAny: any // cara pertama
let keterangan: any = false  // cara kedua

keterangan = "Hello World"
keterangan = []
keterangan = {}


// Penulisan Tipe Data Array
let tipeArrayNumber: number[] // contoh pertama
let tipeArrayString: string[] // contoh kedua
let tipeArrayAny: any[] // contoh ketiga

tipeArrayNumber = [1, 2, 3, 4, 5]
tipeArrayString = ["satu", "dua", "tiga"]
tipeArrayAny = ["Hello World", 123, true, {}, []]


// Penulisan Tipe Data Array Tuples
let tipeArrayTuples1: [string, number] // contoh pertama
let tipeArrayTuples2: [string, number, boolean, any, []] // contoh kedua

tipeArrayTuples1 = ["123", 123]
tipeArrayTuples2 = ["Hello World", 123, true, {}, []]


// Penulisan Tipe Data Object
let tipeObject1 = { // cara 1
    nama: "Rizky",
    umur: 25
} 

tipeObject1 = { // jumlah key harus sama dengan pendeklarasian awal
    nama: "Maulana",
    umur: 23
}

// cara 2
type User = {
    name: string,
    umur: number
}

let tipeObject2: User = {
    name: "Rizky",
    umur: 25
}


// Penulisan Tipe Data Enum
enum tipeEnum1 { // cara 1
    JAN,
    FEB,
    MAR
} 

console.log(tipeEnum1)
// result : 
//   '0': 'JAN',
//   '1': 'FEB',
//   '2': 'MAR',
//   JAN: 0,
//   FEB: 1,
//   MAR: 2

console.log(tipeEnum1.JAN) // result: 0

enum tipeEnum2 { // cara 1
    JAN = 100,
    FEB,
    MAR
} 

console.log(tipeEnum2)
// result : 
//   '100': 'JAN',
//   '101': 'FEB',
//   '102': 'MAR',
//   JAN: 100,
//   FEB: 101,
//   MAR: 102

console.log(tipeEnum2.JAN) // result: 100


// Penulisan Tipe Data Union
let phone: string | number

phone = "081333333333"
phone = 6283433353343

