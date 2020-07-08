# TypeScript Dasar

Step By Step belajar Typescript dari dasar

Sebelum memulai pastikan beberapa Apps berikut terinstal
- Nodejs atau bisa cek [disini](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- Text Editor yang mendukung pemrograman typescript (contoh: Visual Studio Code)
- NPM / Yarn (Penulis: menggunakan Yarn)

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

- Untuk Generate Build Project dengan cara `yarn ts`
- Untuk melihat hasil file ts, dengan cara `node build/index.js` -> sesuaikan lokasi filenya
- untuk menjalankan terus menerus, bisa dengan cara `yarn dev`

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)