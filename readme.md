# TypeScript Dasar

Step By Step belajar Typescript dari dasar

Sebelum memulai pastikan beberapa Apps berikut terinstal
- Nodejs atau bisa cek [disini](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- Text Editor yang mendukung pemrograman typescript (contoh: Visual Studio Code)
- NPM / Yarn (Penulis: menggunakan Yarn)

## Usage

- Untuk Generate Build Project dengan cara `yarn ts`
- Untuk melihat hasil file ts, dengan cara `node build/index.js` -> sesuaikan lokasi filenya
- untuk menjalankan terus menerus, bisa dengan cara `yarn dev`

## 1. Installation

- Jalankan `yarn init` di terminal untuk membuat `package.json`
- Install typescript dengan cara `yarn add global typescript` atau `npm install -g typescript`
- Rubah key `scripts` di didalam file `package.json` seperti dibawah ini

```json
"scripts": {
  "tsc": "rm -rf build/ && tsc",
  "ts": "rm -rf build/ && tsc -w",
  "dev": "nodemon ./build/index.js"
}
```

- Install Package `nodemon` dengan cara `yarn add global nodemon` atau `npm install -g nodemon`
- Jalankan perintah berikut `./node_modules/.bin/tsc --init` untuk membuat file `tsconfig.js`
- Rubah beberapa script berikut:

`"allowJs": true`
`"outDir": "./build"` -> set lokasi build project anda


## 2. Type Data
Isi value dari variable di typescript akan otomatis mendeklarasikan tipe datanya contoh:
- `let angka = 123` -> maka variable `angka` bertipe data `numberic`
- `let alamat = "jalan buntu"` -> maka variable `alamat` bertipe data `string`

Deklarasi Tipe Data di typescript bisa menggunakan 2 cara:
1. `let nama: string` -> cara standard deklarasi variable di typescript( langsung menentukan tipe datanya `string` )
1. `let nama = "Rizky"` -> cara standard mendeklarasikan variable di javascript
2. `let nama: string = "Rizky"` -> cara standard deklarasi variable di typescript( langsung menentukan tipe datanya `string` )

Contoh Tipe Data di TypeScript:
- String      -> `let nama: string`           -> Tipe data menampung semua huruf angka dan karakter spesial
- Number      -> `let umur: number`           -> Tipe data menampung angka saja
- Boolean     -> `let sudahMenikah: boolean`  -> Tipe data menampung nilai `true` atau `false`
- Any         -> `let bebas: any`             -> Tipe data menampung segala tipe data
- Array       -> `let bank: any[]`            -> Tipe data array menampung berbagai tipedata
- Array Tuple -> `let tuple: [string, number]`-> Tipe data array yang memiliki panjang array terbatas
- Object      -> `let object = {angka:"satu"}`-> Tipe data Object menampung 1 key angka dengan isi string
- Enum        -> `enum typeEnum = {JAN, FEB}` -> Meng Assign value ke key, jika tidak ada value dari key maka akan di isi indexnya dimulai dari 0
- Union       -> `let phone: number | string` -> Variable Phone ini bisa menampung 2 tipe data `number` dan `string`
