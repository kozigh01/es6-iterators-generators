const list = [
  'Neal Stephenson',
  'Arthur Clarke',
  'Isaac Asimov',
  'Robert Heinlein'
];

// for Loop
console.group('For Loop:');
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
console.groupEnd();

// while loop
console.group('While loop:');
let i = 0;
while (i < list.length) {
  console.log(list[i]);
  i++;
}
console.groupEnd();

// for-of loop
console.group('For-of: ');
for (let item of list) {
  console.log(item);
}
console.groupEnd();


// Iterable shape example
const myiterable = {
  [Symbol.iterator]() {
    let step = 0;

    let iterator = {
      next() {
        step++;

        switch(step) {
          case 1:
            return { value: 'this', done: false };
          case 2:
            return { value: 'is', done: false };
          case 3:
            return { value: 'iterable', done: false };
          default:
            return { value: undefined, done: true };
        }
      }
    };

    return iterator;
  }
}
// let iterator = myiterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

console.group('Custom Iterable: for-of');
for(const item of myiterable) {
  console.log(`${item}`);
}
console.groupEnd();

console.group('Custom Iterable: destructuring');
const [first, second, third] = myiterable;
console.log(first, second, third);
console.groupEnd();

console.group('Custom Iterable: spread');
console.log([...myiterable].reverse());
console.groupEnd();

console.group('Custom Iterable: set');
const newset = new Set(myiterable);
console.log(`myiterable contains 'is': ${newset.has('is')}`);
console.log(`myiterable contains 'not': ${newset.has('not')}`);
console.groupEnd();

// Making object iterable
const autors = {
  all: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Suess'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J.R.R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ]
  }
};

