const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = (a,b) => b(a).map((c,d)=>`${d+1}. ${c}`)

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (a) => a.sort() 

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (a) => a.sort().reverse()

// ! JANGAN DIMODIFIKASI
function main() {
  console.log( sorter(names, sortAscending).join("\n") );
  console.log('-------------')
  console.log(sorter?.(names, sortDescending)?.join("\n"));
}
main()

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
