// Iterator
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < array.length ? 
        { value: array[nextIndex++], done: false } :
        { done: true }
    }
  }
}
let it = makeIterator(['one', 'two', 'three']);
console.group('Make Iterator');
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
console.groupEnd();

// Generator
function* idMaker() {
  let index = 0;
  while(true) {
    yield index++;
  }
}
let gen = idMaker();
console.group('Generator Function');
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.groupEnd();

// Create Iterable using generator function
let myIterable = {
  [Symbol.iterator]: function*() {
    yield 3;
    yield 2;
    yield 1;
  }
};
console.group('Interable with Generator Function')
for (let val of myIterable) {
  console.log(val);
}
console.groupEnd();

console.group('Iterable Spread Operation');
console.log([...myIterable]);
console.groupEnd();

console.group('Iterable Spread Operation');
let [a, b, c] = myIterable;
console.log(a, b, c);
console.groupEnd();

console.group('Generator for..of');
function* gen2() {
  yield* ['c', 'b', 'a'];
}
for (let val of gen2()) {
  console.log(val);
}
console.groupEnd();

console.group('Fibonacci demo');
function* fibonacci() {
  let fn1 = 0;
  let fn2 = 1;
  while(true) {
    let current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}
let sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.groupEnd();