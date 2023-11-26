"use strict";
console.log("Student.js file was loaded");

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];
console.table(students);
// 1. atrinkti i nauja masyva studentus kurie turi masina
function turiNaujaMasina() {
  const studentaiSuNaujaMasina = students.filter(
    (student) => student.hasCar === true
  );
  console.table(studentaiSuNaujaMasina);
}

turiNaujaMasina();

// 1.1 atrinkti i nauja masyva studentus kurie turi masina su forEach
const studentaiMasina = [];

students.forEach((student) => {
  if (student.hasCar) {
    studentaiMasina.push(student);
  }
});

console.table(studentaiMasina);

// 2. Atrinkti i nauja masyva zmones is Vilniaus
function yraIsVilniaus() {
  const studentaiIsVilniaus = students.filter(
    (student) => student.town === "Vilnius"
  );
  console.table(studentaiIsVilniaus);
}

yraIsVilniaus();

// 3. Atrinkti i nauja masyva moteris
function yraMoteris() {
  const studenteMoteris = students.filter(
    (student) => student.gender === "female"
  );
  console.table(studenteMoteris);
}

yraMoteris();

// 4. suzinoti ar yra nors vienas zmogus is Kauno
const studentaiIsKaunoMap = students.map(
  (student) => student.town === "Kaunas"
);

if (studentaiIsKaunoMap.includes(true)) {
  console.log("Yra bent vienas žmogus iš Kauno.");
} else {
  console.log("Nėra žmonių iš Kauno.");
}

// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
const jauniStudentai = students.filter((student) => student.age < 26);
console.log("jauniStudentai ===", jauniStudentai.length);

// 6.0 Grazinti nauja masyva kuriame yra visu zmoniu amziai;
const amziai = students.map((student) => student.age);
console.log(amziai);

// 6. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
const vardasMiestas = students
  .filter((student) => student.name && student.town)
  .map((student) => ({ name: student.name, town: student.town }));

console.table(vardasMiestas);

// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu
const vardasMetai = students
  .filter((student) => student.name && student.age)
  .map((student) => ({ name: student.name, age: student.age }));

console.table(vardasMetai);

const olEl = document.querySelector("#sarasas");
console.log("olEl ===", olEl);

vardasMetai.forEach((student) => {
  const liEl = document.createElement("li");
  liEl.textContent = `${student.name} - ${student.age} metai`;
  olEl.appendChild(liEl);
});

// 8. Gauti visu zmoniu metu suma .reduce
const amziuSuma = students
  .map((student) => student.age)
  .reduce((sum, age) => sum + age, 0);

console.log("Amžių suma:", amziuSuma);

// 9. suskaiciuoti visu zmoniu metu vidurki
console.log(amziai.length);

const metuVidurkis = amziuSuma / amziai.length;
console.log("metuVidurkis ===", metuVidurkis);

// 10. surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa
const arMikeNusipirkoMasina = students.some(
  (student) => student.name === "Mike" || student.hasCar
);

if (arMikeNusipirkoMasina) {
  console.log("Mike nusipirko mašiną.");
} else {
  console.log("Mike ne nusipirko mašinos arba toks studentas neegzistuoja.");
}
