1. feladat

// string
'cica';

// szám
5;

// bolean
true;

// object
const object = {
  age: 20,
  height: 195
};

// tömb
const array = [1, 2, 3];

2. feladat

A "const" értékét nem lehet megváltozatni (alapvetően), a "let" értékét igen.

const mentor = 'Máté';
let animal = 'cica';

const change = (str) => {
  return mentor = 'kutya';
};

const change2 = (str) => {
  return animal = 'kutya';
};

3. feladat

A referencia szerinti paraméterátadásnál megváltoztathatjuk az eredeti adatokat, az érték szerinti átadásnál nem.
Az egyszerű adattípusok értékként adódnak át, az összetett adattípusok referenciaként.

4. feladat

const containsElement = (arr, num) => {
  if (arr.includes(num)) {
    return true;
  } else {
    return false;
  }
};

5. feladat

const array = [
  {
    name: 'Pityu',
    age: 30
  },
  {
    name: 'Géza',
    age: 35
  },
  {
    name: 'István',
    age: 20
  }
];

const oldGuyFinder = (arr) => {
  let res = arr[0].name;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0].age < arr[i].age) {
      res = arr[i].name;
    }
  }
  return res;
};

6. feladat

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 5, 7, 10];

const metszet = (array1, array2) => {
  const res = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        res.push(array1[i]);
      }
    }
  }
  return res;
};

console.log(metszet(arr1, arr2));

7. feladat

const add = (num1, num2) => {
  return num1 + num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const powerOf = (num1, num2) => {
  return num1 ** num2;
};

module.exports = { add, multiply, powerOf };

8. feladat

const generateArray = (n, m) => {
  const array = new Array(n);
  for (let i = 0; i < n; i++);
  array[i] = new Array(m);
  return array;
};

console.log(generateArray(5, 10));
