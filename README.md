# Fizzbuzz & Palindrome Typescript

**Typescript**
TypeScript adalah bahasa pemrograman open source yang dibangun di atas JavaScript dengan tambahan beberapa sintaks untuk type system atau mengatur tipe data pada JavaScript. Semua kode JavaScript valid yang Anda tulis juga merupakan kode TypeScript yang valid. Namun, dengan TypeScript, Anda bisa menggunakan pengetikan statis dan fitur-fitur terbaru yang bisa dikompilasi ke plain JavaScript, yang didukung oleh semua browser. TypeScript ditujukan untuk memecahkan masalah membuat JavaScript dapat diskalakan, dan itu melakukan pekerjaan yang cukup baik.

Anda harus mengkompilasi TypeScript ke dalam plain JavaScript yang dapat dimengerti oleh browser agar dapat menjalankannya.

Command : tsc <namafile>.ts

**Fizzbuzz**

Fizz adalah kata pertandingan grup untuk anak-anak untuk mengajarkan mereka tentang pembagian. Pemain bergiliran untuk menghitung secara bertahap, menggantikan setiap nomor dibagi oleh tiga dengan kata "Fizz", dan sejumlah dibagi oleh lima dengan kata "buzz". 

Dalam program ini, kita iterasi bilangan bulat **i** dari 1-100 (inklusif). Apabila **i** habis dibagi 15, maka cetak **Fizz Buzz**. Apabila tidak, cek apakah **i** habis dibagi 3 dan cetak **Fizz** apabila demikian. Apabila **i** juga tidak habis dibagi 3, maka cek apakah i habis dibagi 5. Apabila ya, maka cetak **Buzz**. Apabila tidak, maka cetak angka **i** itu sendiri.

Algoritma:
- Untuk mencari seluruh fizz dan buzz, kita harus membungkus bilangan ke dalam sebuah array, dan melakukan pengulangan for untuk mengakses array yang telah dibuat.
- Lalu kita akan membuat kondisi "else if' sederhana dan operator % untuk membagi bilangan dan menemukan fizz, buzz, dan fizz buzz
- Pada program ini saya mencetak angka 1-100 untuk menemukan bilangan mana saja yang merupakan fizz, buzz, dan fizz buzz

How to run:

1. Input command "tsc fizzbuzz.ts" 
2. Input command "node fizzbuzz.js"
3. Output akan menunjukkan kata tertentu seperti diatas apabila bilangan habis dibagi 3, 5 , dan 15.

**Palindrome**

Palindrome adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang. Jika kata yang dimasukan merupakan Palindrome maka hasilnya akan true dan jika kata yang dimasukan bukan palindrome maka hasilnya akan false.

Algoritma:
- Membandingkan kata inputan "var" setelah dibalik posisi karakternya dengan menggunakan "for"
- Jika var kata sama dengan kata terbalik maka disebut Palindrome
- Pengecekan antara karakter awal dengan karakter paling akhir pada suatu kata atau kalimat
- Jika karakter paling kiri dan paling kanan sama, maka lanjut ke karakter selanjutnya menuju sampai ke tengah kalimat, apabila sama maka stastunya adalah Palindrome

How to run:
1. Input command "tsc palindrome.ts" 
2. Input command "node palindrome.js"
3. Input text untuk yang akan di check
4. Apabila text dapat dibaca dari depan maupun belakang, maka akan menghasilkan output "It is a Palindrome"
Apabila tidak maka akan muncul "It is not a Palindrome"

