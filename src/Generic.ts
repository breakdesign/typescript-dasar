function getData(value: any) {
    return value
}

console.log(getData("Rizky").length)
console.log(getData(123).length)


function myData<T>(value: T) {
    return value
}

console.log(getData("Rizky").length)
// jika menggunakan generic maka tidak tampil fungsi untuk `.length`
console.log(getData(123))


const arrowFunc = <T extends unknown>(value: T) => {
    return value
}