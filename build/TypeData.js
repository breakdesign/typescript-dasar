"use strict";
// Penulisan Tipe Data String
var nama = "Rizky"; // cara pertama
var tipeString; // cara kedua
var namaAkhir = "Maulana"; // cara ketiga
nama = "Rizky Maulana";
// Penulisan Tipe Data Number
var umur = "25"; // cara pertama
var tipeNumber; // cara kedua
var umurSaya = 25; // cara ketiga
umurSaya = 26;
// Penulisan Tipe Data Boolean
var lakiLaki = true; // cara pertama
var tipeBoolean; // cara kedua
var sudahMenikah = false; // cara ketiga
tipeBoolean = false;
// Penulisan Tipe Data Any
var tipeAny; // cara pertama
var keterangan = false; // cara kedua
keterangan = "Hello World";
keterangan = [];
keterangan = {};
// Penulisan Tipe Data Array
var tipeArrayNumber; // contoh pertama
var tipeArrayString; // contoh kedua
var tipeArrayAny; // contoh ketiga
tipeArrayNumber = [1, 2, 3, 4, 5];
tipeArrayString = ["satu", "dua", "tiga"];
tipeArrayAny = ["Hello World", 123, true, {}, []];
// Penulisan Tipe Data Array Tuples
var tipeArrayTuples1; // contoh pertama
var tipeArrayTuples2; // contoh kedua
tipeArrayTuples1 = ["123", 123];
tipeArrayTuples2 = ["Hello World", 123, true, {}, []];
// Penulisan Tipe Data Object
var tipeObject1 = {
    nama: "Rizky",
    umur: 25
};
tipeObject1 = {
    nama: "Maulana",
    umur: 23
};
var tipeObject2 = {
    name: "Rizky",
    umur: 25
};
// Penulisan Tipe Data Enum
var tipeEnum1;
(function (tipeEnum1) {
    tipeEnum1[tipeEnum1["JAN"] = 0] = "JAN";
    tipeEnum1[tipeEnum1["FEB"] = 1] = "FEB";
    tipeEnum1[tipeEnum1["MAR"] = 2] = "MAR";
})(tipeEnum1 || (tipeEnum1 = {}));
console.log(tipeEnum1);
// result : 
//   '0': 'JAN',
//   '1': 'FEB',
//   '2': 'MAR',
//   JAN: 0,
//   FEB: 1,
//   MAR: 2
console.log(tipeEnum1.JAN); // result: 0
var tipeEnum2;
(function (tipeEnum2) {
    tipeEnum2[tipeEnum2["JAN"] = 100] = "JAN";
    tipeEnum2[tipeEnum2["FEB"] = 101] = "FEB";
    tipeEnum2[tipeEnum2["MAR"] = 102] = "MAR";
})(tipeEnum2 || (tipeEnum2 = {}));
console.log(tipeEnum2);
// result : 
//   '100': 'JAN',
//   '101': 'FEB',
//   '102': 'MAR',
//   JAN: 100,
//   FEB: 101,
//   MAR: 102
console.log(tipeEnum2.JAN); // result: 100
// Penulisan Tipe Data Union
var phone;
phone = "081333333333";
phone = 6283433353343;
