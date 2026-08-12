const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const text = `sekarang adalah tanggal ${currentDay} bulan ${currentMonth} dan tahun ${currentYear}`;
console.log(text);
console.warn("PEMBATAS");
// Praktek Tanggal / String

const result = 50 / 0;
console.log(result); // output: Infinity
console.warn("PEMBATAS");
// Praktek Number

const completed = true;
const passed = false;
console.log(completed, passed); // output: true & false

const isGreater = 5 > 2;
// output: true (5 lebih besar dari 2)
console.log(isGreater);

const isLowest = 2 > 5;
// output: false (2 lebih kecil dari 5)
console.log(isLowest);
console.warn("PEMBATAS");
// Praktek Boolean

let message = null;
console.log(message);
let message2;
console.log(message2);
let message3 = undefined;
console.log(message3);
const name1 = { first: "ibam", last: null };
const name2 = { first: "sesko", last: undefined };

// output : {"first":"ibam","last":null}
console.log(JSON.stringify(name1));
// output : {"first":"sesko"}
console.log(JSON.stringify(name2));
console.warn("PEMBATAS");
// Nilai Kosong

let santri = {
  nama: "ibam",
  umur: 17,
  kelas: "9A Yakub",
};
console.log("Data Siswa:", santri);
console.warn("PEMBATAS");
// tipe data kompleks Object

let nilaiUjian = [80, 85, 90];
console.log("nilai ujian:", nilaiUjian);
// array dengan bbrp data string ada dibawah
const kelas9A = ["afif", "azka", "ibam", "dll"];
console.log("kelas 9A:", kelas9A);
// array dengan data objek ada dibawah
const siswa9AA = [
  { nama: "ibam", umur: 17, hobi: ["bermain bola", "makan", "tidur"] },
  { nama: "azka", umur: 17, hobi: ["bermain bola", "makan", "tidur"] },
  { nama: "ibam", umur: 17, hobi: ["bermain bola", "makan", "tidur"] },
  { nama: "azka", umur: 17, hobi: ["bermain bola", "makan", "tidur"] },
  { nama: "ibam", umur: 17, hobi: ["bermain bola", "makan", "tidur"] },
  { nama: "azka", umur: 17, hobi: ["bermain bola", "makan", "tidur"] },
];
console.log("siswa 9A:", siswa9AA);
console.warn("PEMBATAS");
// tipe data kompleks Array
console.warn("PEMBATAS");
// menampilkan NaN value dari operasi matematika yang tidak valid
const result2 = 0 / 0;
const result5 = 5 * "abc";
console.log("hasil dari 5 dibagi abc adalah:", result5);
console.log("hasil dari 0 dibagi 0 adalah:", result2);
console.warn("PEMBATAS");
// menampilkan inifinity dan -infinity dari operasi matematika
const result3 = 1 / 0;
const result4 = -1 / 0;
console.log("hasil dari 1 dibagi 0 adalah:", result3);
console.log("hasil dari -1 dibagi 0 adalah:", result4);
console.warn("PEMBATAS");
// menampilkan data dengan variable toExponential
let angka = 123456;
let hasil = angka.toExponential(2);
console.log("hasil dari angka" + angka + " adalah:", hasil);
console.warn("PEMBATAS");
// menampilkan variable dengan data toFixed
let angka2 = 3.14159;
let hasil2 = angka2.toFixed(2);
console.log("hasil dari angka" + angka2 + " adalah:", hasil2);
console.warn("PEMBATAS");
// menampilkan variable dengan data toPrecision
let angka3 = 123.456;
let hasil3 = angka3.toPrecision(2);
console.log("hasil dari angka" + angka3 + " adalah:", hasil3);
console.warn("PEMBATAS");
// menampilkan variable dengan data toString
let angka4 = 15;
let hasilDesimal = angka4.toString();
let hasilBiner = angka4.toString(2);
console.log("hasil dari angka" + angka4 + " adalah:", hasilDesimal);
console.log("hasil dari angka" + angka4 + " adalah:", hasilBiner);
console.warn("PEMBATAS");
// konversi string

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);
console.warn("PEMBATAS");
// konversi numerik

const strNumber2 = "123";
const strFloat = "3.14";
const strBoolean2 = "true";

const numFromString = Number(strNumber2);
const floatFromString = Number(strFloat);
const boolFromString = Number(strBoolean2);

console.log(numFromString);
console.log(floatFromString);
console.log(boolFromString);

const cm = "20cm";
const px = "64px";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM);
console.log(intFromPX);

const number1 = 123;
const string = "ibamomar";
const empty = null;

const boolFromNumber = Boolean(number1);
const boolFromString1 = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber);
console.log(boolFromString1);
console.log(boolFromNull);

const age1 = 17;
const message1 = "umurku:" + age1;
// output: umurku:17
console.log(message1);

const strNumber1 = "123";
const result1 = strNumber1 * 2;
console.log(result1);

const name5 = "ibam";
const age = 17;

console.log(`saya ${name5}, umur saya ${age}.`);

const name6 = "omar";
const age6 = 71;
console.log(`saya ${name6}, umur saya ${age6}.`);

let age7 = 19;
age7 < 18 ? "You are too young!" : "Welcome onboard!";

const angka5 = 2025;
console.log(`${angka5} adalah tahun ini.`);

const statement = 5 * 5;
console.log(
  "statement-nya adalah:   const statement = 5 * 5;   ",
  "sedangkan expression-nya adalah: 5 * 5;",
);

const number50 = 50;
const number100 = 100;
const theResult = number50 + number100;
console.log(theResult);

const number123 = "123";
parseInt(number123);
console.log(number123);
console.warn("PEMBATAS");
// assignment operator

const namaSaya = "ibam";
let asalSaya = "jakarta";
asalSaya = "pekanbaru";
console.log("nama saya", namaSaya, "asal saya", asalSaya);
console.warn("PEMBATAS");
// arithmetic operator

let sisa = 10 % 3;
console.log(sisa); // hasilnya = 1 (MODULUS)

let a = 5;
a++;
console.log(a); // hasilnya = 6 (INCREMENT)

let b = 5;
b--;
console.log(b); // hasilnya = 4 (DECREMENT)

console.log(2 ** 3); // hasilnya = 8 (EKSPONSIAL / PANGKAT)
console.warn("PEMBATAS");
// comparison operator

let a1 = 5;
let b1 = "5";
console.log(a1 == b1); // hasilnya = true (SAMA)

let a2 = 5;
let b2 = "6";
console.log(a2 != b2); // hasilnya = true (TIDAK SAMA) karena 5 dan 6 itu berbeda

let a3 = 5;
let b3 = "5";
console.log(a3 === b3); // hasilnya = false (TIDAK IDENTIK) karena tipe data nya berbeda

let a4 = 5;
let b4 = "5";
console.log(a4 !== b4); // hasilnya = true karena tipe data nya berbeda (TIDAK IDENTIK)

let a5 = 10;
let b5 = 5;
console.log(a5 > b5); // hasilnya = true karena 10 lebih besar dari 5

let a6 = 10;
let b6 = 10;
console.log(a6 >= b6); // hasilnya = true karena 10 besar-nya sama dengan 10

let a7 = 5;
let b7 = 10;
console.log(a7 < b7); // hasilnya = false karena 5 lebih kecil dari 10

let a8 = 10;
let b8 = 10;
console.log(a8 <= b8); // hasilnya = true karena 10 kecil-nya sama dengan 10
console.warn("PEMBATAS");
// Logical Operator

let ibam = "TES";
let ibam1 = false || true;
let omar = true && 1 > 0;
let omar1 = 10 > 5 && !false;
let omar2 = 5;
let namee = "TES2";
console.log(namee, omar1);
console.log(namee, a > 0 && b < 0);
console.log(ibam, omar, ibam1);
const yakub = true && true;
console.log(yakub);

const firstName = " Pondok Tahfizh";
const lastName = " Plus Abu Dzar";
const fullName = firstName + lastName;
const greeting = "Hello";
document.write(greeting + fullName);

const hargaBarang = 15000;
const jumlahBarang = 4;
const totalBelanja = 15000 * 4;
const keterangan = "Total belanja " + totalBelanja;
document.write(keterangan);

const jojo = -1;
const ojoj = 0;
console.log(true || false);

let nomorApa = 1;
let nomorApaa = 1;
let j = "j";
console.log(j, nomorApa, nomorApaa);
console.warn("PEMBATAS");
// If statement
let myAge = 19;
if (myAge >= 18) {
  console.log("Anda sudah dewasa");
}
console.warn("PEMBATAS");
// klause "else"

myScore = 89;
if (myScore >= 90) {
  console.log("Anda Lulus");
} else {
  console.log("Anda Tidak Lulus");
}
console.warn("PEMBATAS");
// Pernyataan Kondisional Lebih dari Satu: “else if” (Gunakan else if untuk mengevaluasi lebih dari satu kondisi.)

let myNilai = 85;
if (myNilai >= 90) {
  console.log("Nilai A");
} else if (myNilai >= 80) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}
console.warn("PEMBATAS");
// Konversi Boolean (Di JavaScript, banyak nilai yang secara otomatis dikonversi menjadi boolean ketika digunakan dalam pernyataan if.)

let namaAnomali = "";
if (namaAnomali) {
  console.log("nama anda ada");
} else {
  console.log("nama anda belum diisi");
}
console.warn("PEMBATAS");
// Operator Kondisional ‘?’ (JavaScript menyediakan sintaksis yang lebih ringkas yaitu menggunakan ternary operator. Ternary operator atau nama lainnya conditional operator direpresentasikan menggunakan tanda tanya (?).)

myAge = 20;
let status =
  myAge >= 18 ? "anda sudah Dewasa" : "anda masih Anak2 ya? aokwkaokwoa";
console.log(status);
console.warn("PEMBATAS");
// Multiple ‘?’ ‘?’ (Operator ? dapat digunakan berulang kali untuk menangani lebih dari dua kondisi.)

myNilai = 85;
let Category = myNilai >= 90 ? "A" : myNilai >= 80 ? "B" : "C";
console.log(Category);
console.warn("PEMBATAS");
// Penggunaan ‘?’ yang Non-Tradisional (Selain sebagai pengganti if-else, operator ? dapat digunakan untuk keperluan lain, seperti pemilihan nilai dalam satu baris kode.)

let warna = "merah";
console.log(warna === "merah" ? "Berhenti" : "Jalan");

console.log(5 > 3 ? (5 > 2 ? (5 > 4 ? "A" : "B") : "C") : "D");
console.log(10 > 5 ? "Benar" : "Salah");

let syaratUmur = 16;
if (syaratUmur >= 16) {
  console.log("Anda dapat mendaftar");
}
if (syaratUmur >= 12) {
  console.log("Anda dapat mendaftar dengan persetujuan orangtua");
}
if (syaratUmur >= 12) {
  console.log("Anda tidak dapat mendaftar");
}

let ketentuanTulis = 70;
let ketentuanProyek = 60;
console.log(
  ketentuanTulis >= 70 && ketentuanProyek >= 60
    ? "Anda Lulus"
    : "Anda Tidak Lulus",
);
console.warn("PEMBATAS");
// Operator Pengabungan Nullish (Operator ??)

let username = null;
let displayName = username ?? "Guest";
console.log(displayName);
let username1 = "null";
let displayName1 = username1 ?? "Guest";
console.log(displayName1);
console.warn("PEMBATAS");
// Operator OR || & nullish coalescing ??

let username2 = "";
let defaultWithOr = username2 || "Guest"; //seluruh nilai falsy diterima. "", 0, null, undefined, NaN, false, dan 1 lagi lupa
let defaultWithNullish = username2 ?? "Guest"; //hanya menerima nilai null dan undefined

console.log(defaultWithOr);
console.log(defaultWithNullish);
console.warn("PEMBATAS");
// prioritas

let hasilNya = null || (undefined ?? "default");
let hasilLanjut = null || "default";
let hasilAkhir = "default";
console.log(hasilNya);
console.warn("PEMBATAS");
// menggunakan ?? dengan && atau ||

let userInput = null;
let isLoggedIn = true;

let displayName2 = isLoggedIn && (userInput ?? "Tamu");
console.log(displayName2);

isLoggedIn = true;
let statuss = isLoggedIn ?? "Active";
console.log(statuss);

isLoggedIn = true;
let statusss = isLoggedIn && "Active";
console.log(statusss);

isLoggedIn = true;
let statussss = isLoggedIn && "Active";
console.log(statussss);
console.warn("PEMBATAS");
// LATIHAN / TUGAS
let name = null;
let nickname = "John";
let user = name ?? nickname;
console.log(user);

let valueNya = 0;
let resultNya = valueNya || 100;
console.log(resultNya);

let o = null;
let p = 5;
let q = o ?? p;
console.log(q);

let valueNya1 = 0;
let resultNya1 = valueNya1 ?? 100;
console.log(resultNya1);

let x = false;
let y = x ?? "default";
console.log(y);

let userNama = null ?? "Anonymous";
let nickNama = undefined ?? "Anonymous";
let Hasilnya = userNama ?? nickNama;
console.log(Hasilnya);

let itemPrice = undefined ?? 100;
console.log(itemPrice);

let alreadyLoggedIn = "User";
let userLogin = alreadyLoggedIn ?? "Guest";
console.log(userLogin);
console.warn("PEMBATAS");
//syntax
const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("i am a banana");
    break;
  case "apple":
    console.log("i am an apple");
    break;
  case "orange":
    console.log("i am an orange");
    break;
  case "strawberry":
    console.log("i am an strawberry");
    break;
  default:
    console.log("i am not a fruit, i am a programmer.");
}
console.warn("PEMBATAS");
//perbandingan if...else statement dengan switch statement
//if...else untuk menentukan hari
const day = new Date().getDay();

if (day === 0) {
  console.log("Hari Ahad");
} else if (day === 1) {
  console.log("Hari Senin");
} else if (day === 2) {
  console.log("Hari Selasa");
} else if (day === 3) {
  console.log("Hari Rabu");
} else if (day === 4) {
  console.log("Hari Kamis");
} else if (day === 5) {
  console.log("Hari Jumat");
} else if (day === 6) {
  console.log("Hari Sabtu");
}
console.warn("PEMBATAS");
//switch untuk menentukan hari

const dayy = new Date().getDay();

switch (dayy) {
  case 0:
    console.log("Hari Ahad");
    break;
  case 1:
    console.log("Hari Senin");
    break;
  case 2:
    console.log("Hari Selasa");
    break;
  case 3:
    console.log("Hari Rabu");
    break;
  case 4:
    console.log("Hari Kamis");
    break;
  case 5:
    console.log("Hari Jumat");
    break;
  case 6:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Hari tidak diketahui");
}
console.warn("PEMBATAS");
//kondisi jika membuat statement switch ta[i lupa menuliskan 'break'. apa yang akan terjadi?

const numberr = 2;

switch (numberr) {
  case 1:
    console.log("ini angka 1");
    break;
  case 2:
    console.log("ini angka 2");
  //    break;
  case 3:
    console.log("ini angka 3");
    break;
  default:
    console.log("ini bukan angka");
}
console.warn("PEMBATAS");
//switch untuk double case

let buah = "apel";

switch (buah) {
  case "apel":
  case "semangka":
    console.log("ini adalah buah");
    break;
  case "wortel":
    console.log("ini adal sayur");
    break;
  default:
    console.log("ini anomali");
}
console.warn("PEMBATAS");
//tipe data berpengaruh

let value = "10";

switch (value) {
  case 10:
    console.log("ini angka 10");
    break;
  case "10":
    console.log("ini string 10");
    break;
  default:
    console.log("UnKnown value");
}
console.warn("PEMBATAS");
//Tugas SWITCH Statement

let hari = "minggu";

switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
  case "jumat":
    console.log("09:00-17:00");
    break;
  case "sabtu":
    console.log("09:00-13:00");
    break;
  case "minggu":
    console.log("Libur");
    break;
  default:
    console.log("Hari tidak diketahui");
}

let nomor = 1;

switch (nomor) {
  case 1:
    console.log("MATEMATIKA");
    break;
  case 2:
    console.log("FISIKA");
    break;
  case 3:
    console.log("BIOLOGI");
    break;
  case 4:
    console.log("KIMIA");
    break;
  default:
    console.log("Mata Pelajaran tidak diketahui");
}

let fashionStore = 100.0;

switch (fashionStore) {
  case 100.0:
    console.log("Tidak ada Diskon.");
    break;
  case 299.999:
    console.log("Diskon 10%.");
    break;
  case 300.0:
    console.log("Diskon 20%.");
    break;
}

let warnaLampu = "merah";

switch (warnaLampu) {
  case "merah":
    console.log("Berhenti");
    break;
  case "kuning":
    console.log("Siap-Siap");
    break;
  case "hijau":
    console.log("Jalan");
    break;
  default:
    console.log("Warna tidak dikenali");
}

let menuRestaurant = 2;

switch (menuRestaurant) {
  case 1:
    console.log("Ayam Goreng");
    break;
  case 2:
    console.log("Burger");
    break;
  case 3:
    console.log("Kentang Goreng");
    break;
  case 4:
    console.log("Aneka Minuman");
    break;
  default:
    console.log("Menu tidak tersedia.");
}

// LOOPING
console.warn("PEMBATAS");
// 1. FOR LOOP
for (let i = 0; i <= 5; i++) {
  console.log(`angka ke-${i} adalah ${i}`);
}
console.warn("PEMBATAS");
// 2. FOR IN LOOP
const person = { Nama: "Fulan", Asal: "Manchester", tahunLahir: 2009 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`, "#GGMU");
}
console.warn("PEMBATAS");
// 3. FOR OF LOOP
const names = ["Bebek", "Ayam", "Telor", "Tempe"];

for (const item of names) {
  console.log(item);
}
console.warn("PEMBATAS");
// 4. WHILE LOOP
// let i = 0;

// while (i <= 5) {
//   console.log(`angka ke-${i} adalah ${i}`);
//   i++;
// }
console.warn("PEMBATAS");
// 5. DO-WHILE LOOP
// i = 0;

// do {
//   console.log(`angka ke-${i} adalah ${i}`);
//   i++;
// } while (i < 5);
console.warn("PEMBATAS");
// 6. MELEWATKAN BAGIAN
let w = 0;
for (; w <= 5; w++) {
  console.log(w);
}
console.warn("PEMBATAS");
// CONTROL STATEMENT

// 1. BREAK
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.warn("PEMBATAS");

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

const numberrr = 1;

switch (numberrr) {
  case 1:
    console.log("ini 1");
    break;
  case 2:
    console.log("ini 2");
    break;
  case 3:
    console.log("ini 3");
    break;
  default:
    console.log("ini default");
}
console.warn("PEMBATAS");
// 2. CONTINUE
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//TUGAS WHILE dan FOR

console.warn("PEMBATAS");

let i = 1;
do {
  console.log(i);
  i++;
} while (i < 4);

console.warn("PEMBATAS");

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

console.warn("PEMBATAS");

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

console.warn("PEMBATAS");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

console.warn("PEMBATAS");

let f = 0;
while (f < 3) {
  console.log(f);
  f++;
}

console.warn("PEMBATAS");

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.warn("PEMBATAS");

i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

console.warn("PEMBATAS");

for (let i = 0; i <= 12; i++) {
  if (i === 8) {
    continue;
  }
  console.log(i);
}

console.warn("PEMBATAS");
//FUNCTION (fungsi)

const temperatureInCelsius = 90;
const temperatureInFahrenheit = (9 / 5) * temperatureInCelsius + 32;

console.log(`Hasil konversi suhu:`, temperatureInFahrenheit, `°F`);

// Kalo ada 70* 80* 100*
let temperatureInCelsius2;
let temperatureInFahrenheit2;

temperatureInCelsius2 = 50;
temperatureInFahrenheit2 = (9 / 5) * temperatureInCelsius2 + 32;
console.log(`Hasil konversi:`, temperatureInFahrenheit2, `°F`);

temperatureInCelsius2 = 70;
temperatureInFahrenheit2 = (9 / 5) * temperatureInCelsius2 + 32;
console.log(`Hasil konversi:`, temperatureInFahrenheit2, `°F`);

temperatureInCelsius2 = 100;
temperatureInFahrenheit2 = (9 / 5) * temperatureInCelsius2 + 32;
console.log(`Hasil konversi:`, temperatureInFahrenheit2, `°F`);

function sapa() {
  console.log("Halo, selamat datang di dunia JavaScript!");
}
sapa();

function greet(name) {
  console.log(`Halo, ${name}! Selamat datang di dunia JavaScript!`);
}
greet("John");

function convertCelciusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log(`Hasil konversi:`, temperatureInFahrenheit, `°F`);
}

const temperatureInCelsius3 = 90;

// hanya menampilkan nilai function
console.log(convertCelciusToFahrenheit);

//akan menjalankan nilai funciton
convertCelciusToFahrenheit(temperatureInCelsius3);

// function namaFungsi(parameter1, parameter2, ...) {
//   //kode didalam fungsi
// }
function hitungPersegi(panjang, lebar) {
  let luas = panjang * lebar;
  console.log("Luas persegi: " + luas);
}
hitungPersegi(5, 4);

function tambah(a = 5, b = 10) {
  return a + b;
}
console.log(tambah());

function perkenalan(nama) {
  if (nama === undefined || nama === "" || nama === null) {
    return "Halo, Tamu!";
  } else {
    return `Halo, ${nama}!`;
  }
}
console.log(perkenalan("Omar"));

function hitungBiayaParkir(lamaParkir) {
  if (lamaParkir < 2 || lamaParkir == 2) {
    return "Rp 3.000";
  } if (lamaParkir > 2) {
    return "Rp 2.000";
  }
}
console.log(hitungBiayaParkir(5));

function cekKelulusan(nilai) {
  if (nilai < 75) {
    return "Maaf, Kamu belum lulus.";
} if (nilai == 75) {
    return "Selamat, Kamu lulus dengan nilai pas-pasan!";
  
} else (nilai > 75 )  
  return "Selamat, Kamu lulus dengan nilai yang memuaskan!";
}
console.log(cekKelulusan(76));

function cekMedali(skor) {
  if (skor >= 90) {
    return "Medali Emas";
} if (skor >= 75) {
    return "Medali Perak";
} if (skor >= 60) { 
    return "Medali Perunggu";
} else {
    return "Tidak mendapatkan medali";
}
}
console.log(cekMedali(90));

console.warn("PEMBATAS");   

console.log(+"1" + 2);
// alert(`Bismillah`);