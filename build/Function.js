"use strict";
// Contoh Function Tanpa Nilai Return
function printName() {
    console.log("hello my name is Rizky");
}
// Contoh Function Dengan Return String
function getName() {
    return "Rizky Maulana";
}
// Contoh Function Dengan Return Number
function getAge() {
    return 25;
}
// Contoh Function 
function sum(val1, val2) {
    return val1 * val2;
}
var Add = function (val1, val2) {
    return val1 + val2;
};
// Contoh Function dengan default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Maulana"; }
    return first + " " + last;
};
// Contoh Function dengan Optional Parameter
// jika menggunakan `?` ketika parameter kedua dikosongi maka akan return `undefined`
// optional paramter tidak bekerja untuk tipe data number
var getFullName = function (first, last) {
    return first + " " + last;
};
