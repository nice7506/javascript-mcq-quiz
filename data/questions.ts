
import { Question } from '../types';

export const jsQuestions: Question[] = [
  {
    id: 1,
    question: "What's the output?",
    code: `function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();`,
    options: [
      { letter: 'A', text: '`Lydia` and `undefined`' },
      { letter: 'B', text: '`Lydia` and `ReferenceError`' },
      { letter: 'C', text: '`ReferenceError` and `21`' },
      { letter: 'D', text: '`undefined` and `ReferenceError`' },
    ],
    answer: 'D',
    explanation: "Within the function, `name` is hoisted with `var` and initialized to `undefined`. `age` is hoisted with `let` but is in the 'temporal dead zone' and not initialized, so accessing it causes a `ReferenceError`."
  },
  {
    id: 2,
    question: "What's the output?",
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}`,
    options: [
      { letter: 'A', text: '`0 1 2` and `0 1 2`' },
      { letter: 'B', text: '`0 1 2` and `3 3 3`' },
      { letter: 'C', text: '`3 3 3` and `0 1 2`' },
    ],
    answer: 'C',
    explanation: "The first loop uses `var`, which is function-scoped. By the time `setTimeout` callbacks run, the loop is finished and `i` is `3`. The second loop uses `let`, which is block-scoped, so each iteration captures the correct value of `i`."
  },
  {
    id: 3,
    question: "What's the output?",
    code: `const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());`,
    options: [
      { letter: 'A', text: '`20` and `62.831...`' },
      { letter: 'B', text: '`20` and `NaN`' },
      { letter: 'C', text: '`20` and `63`' },
      { letter: 'D', text: '`NaN` and `63`' },
    ],
    answer: 'B',
    explanation: "A regular function's `this` refers to the object it's called on (`shape`). An arrow function's `this` is lexically scoped, referring to the surrounding scope (e.g., `window`), where `radius` is `undefined`."
  },
  {
    id: 4,
    question: "What's the output?",
    code: `+true;
!'Lydia';`,
    options: [
      { letter: 'A', text: '`1` and `false`' },
      { letter: 'B', text: '`false` and `NaN`' },
      { letter: 'C', text: '`false` and `false`' },
    ],
    answer: 'A',
    explanation: "The unary plus `+` operator converts `true` to the number `1`. The logical NOT `!` operator converts the truthy string `'Lydia'` to `false`."
  },
  {
    id: 5,
    question: "What's the output?",
    code: `let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);`,
    options: [
      { letter: 'A', text: '`Hello`' },
      { letter: 'B', text: '`Hey!`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'A',
    explanation: "Objects in JavaScript are passed by reference. Both `c` and `d` point to the same object in memory. Modifying the object through `c` is reflected when accessing it through `d`."
  },
  {
    id: 6,
    question: "What's the output?",
    code: `let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);`,
    options: [
        { letter: 'A', text: '`true` `false` `true`' },
        { letter: 'B', text: '`false` `false` `true`' },
        { letter: 'C', text: '`true` `false` `false`' },
        { letter: 'D', text: '`false` `true` `true`' },
    ],
    answer: 'C',
    explanation: "`new Number(3)` creates an object. `==` checks for value equality after type coercion, so `3 == new Number(3)` is true. `===` checks for value and type, and an object is not a primitive number, so `a === b` is false."
  },
  {
    id: 7,
    question: "What's the output?",
    code: `function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);`,
    options: [
      { letter: 'A', text: '`Person {...}` and `undefined`' },
      { letter: 'B', text: '`Person {...}` and `Person {...}`' },
      { letter: 'C', text: '`Person {...}` and `{}`' },
      { letter: 'D', text: '`Person {...}` and `ReferenceError`' },
    ],
    answer: 'A',
    explanation: "Calling `Person` without `new` makes `this` refer to the global object (e.g. `window`). The function doesn't return anything, so `sarah` is `undefined`."
  },
  {
    id: 8,
    question: "What are the three phases of event propagation?",
    options: [
      { letter: 'A', text: 'Target > Capturing > Bubbling' },
      { letter: 'B', text: 'Bubbling > Target > Capturing' },
      { letter: 'C', text: 'Target > Bubbling > Capturing' },
      { letter: 'D', text: 'Capturing > Target > Bubbling' },
    ],
    answer: 'D',
    explanation: "The event first goes down through ancestors (Capturing phase), reaches the element (Target phase), and then goes back up through ancestors (Bubbling phase)."
  },
  {
    id: 9,
    question: "What's the output?",
    code: `function sum(a, b) {
  return a + b;
}

sum(1, '2');`,
    options: [
      { letter: 'A', text: '`NaN`' },
      { letter: 'B', text: '`TypeError`' },
      { letter: 'C', text: '`"12"`' },
      { letter: 'D', text: '`3`' },
    ],
    answer: 'C',
    explanation: "When the `+` operator is used with a number and a string, the number is converted to a string, and then the two strings are concatenated."
  },
  {
    id: 10,
    question: "What's the output?",
    code: `let number = 0;
console.log(number++);
console.log(++number);
console.log(number);`,
    options: [
      { letter: 'A', text: '`1 1 2`' },
      { letter: 'B', text: '`1 2 2`' },
      { letter: 'C', text: '`0 2 2`' },
      { letter: 'D', text: '`0 1 2`' },
    ],
    answer: 'C',
    explanation: "The postfix `number++` returns the value *before* incrementing. The prefix `++number` increments the value *before* returning it."
  },
  {
    id: 11,
    question: "Which of these values are falsy?",
    code: `0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;`,
    options: [
        { letter: 'A', text: '`0`, `\'\'`, `undefined`' },
        { letter: 'B', text: 'All except `(\' \')`' },
        { letter: 'C', text: '`0`, `\'\'`, `new Boolean(false)`, `undefined`' },
        { letter: 'D', text: 'All of them are falsy' },
    ],
    answer: 'A',
    explanation: "The main falsy values in JavaScript are `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Objects, even if they wrap a falsy value like `new Number(0)`, are truthy."
  },
  {
    id: 12,
    question: "What's the output?",
    code: `const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);`,
    options: [
        { letter: 'A', text: '`[1, 2, 3, null x 7, 11]`' },
        { letter: 'B', text: '`[1, 2, 3, 11]`' },
        { letter: 'C', text: '`[1, 2, 3, empty x 7, 11]`' },
        { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'C',
    explanation: "Assigning a value to an index beyond the array's length creates 'empty slots', which behave like `undefined` but are often displayed differently by consoles."
  },
   {
    id: 13,
    question: "What's the output?",
    code: `const person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);`,
    options: [
        { letter: 'A', text: '`null`' },
        { letter: 'B', text: '`[null]`' },
        { letter: 'C', text: `[{}]` },
        { letter: 'D', text: `[{ name: "Lydia" }]` },
    ],
    answer: 'D',
    explanation: "The `members` array holds a reference to the original `person` object. Reassigning the `person` variable to `null` does not affect the object referenced inside the array."
  },
  {
    id: 14,
    question: "What's the output?",
    code: `console.log(3 + 4 + '5');`,
    options: [
        { letter: 'A', text: '`"345"`' },
        { letter: 'B', text: '`"75"`' },
        { letter: 'C', text: '`12`' },
        { letter: 'D', text: '`"12"`' },
    ],
    answer: 'B',
    explanation: "Operator associativity for `+` is left-to-right. `3 + 4` is calculated first, resulting in `7`. Then, `7 + '5'` is performed, which results in string concatenation: `'75'`."
  },
  {
    id: 15,
    question: "What's the output?",
    code: `const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);`,
    options: [
        { letter: 'A', text: '`{ admin: true, user: { ... } }`' },
        { letter: 'B', text: '`{ admin: true, name: "Lydia", age: 21 }`' },
        { letter: 'C', text: '`{ admin: true, user: [...] }`' },
        { letter: 'D', text: '`{ admin: true }`' },
    ],
    answer: 'B',
    explanation: "The spread syntax `...` copies the properties from the `user` object into the new `admin` object at the top level."
  },
  {
    id: 16,
    question: "What's the output?",
    code: `const user = {
  name: 'Lydia',
  info: { age: 21 },
};

Object.freeze(user);

user.name = 'Sarah';
user.info.age = 22;

console.log(user.name);
console.log(user.info.age);`,
    options: [
      { letter: 'A', text: '`Lydia` and `21`' },
      { letter: 'B', text: '`Lydia` and `22`' },
      { letter: 'C', text: '`Sarah` and `21`' },
      { letter: 'D', text: '`Sarah` and `22`' },
    ],
    answer: 'B',
    explanation: "`Object.freeze` prevents changes to the top-level properties of the `user` object, so `name` stays 'Lydia'. It is shallow, so the nested `info` object is still mutable, and `age` can be updated to `22`."
  },
  {
    id: 17,
    question: "What happens when this code runs?",
    code: `const defaultColor = 'blue';

function setColor(color = defaultColor, defaultColor = 'green') {
  console.log(color, defaultColor);
}

setColor();`,
    options: [
      { letter: 'A', text: '`"blue" "green"` is logged' },
      { letter: 'B', text: '`"green" "green"` is logged' },
      { letter: 'C', text: '`"blue" "undefined"` is logged' },
      { letter: 'D', text: '`ReferenceError` is thrown before anything is logged' },
    ],
    answer: 'D',
    explanation: "Default parameter values are evaluated left to right in their own scope. While evaluating the default for `color`, the parameter `defaultColor` shadows the outer variable but is still in the temporal dead zone, so accessing it causes a `ReferenceError`."
  },
  {
    id: 18,
    question: "What's the output?",
    code: `function User() {}
User.prototype.sayHi = function () {
  return 'Hi';
};

const user = new User();

user.sayHi = () => 'Hello';
delete user.sayHi;

console.log(user.sayHi());`,
    options: [
      { letter: 'A', text: '`"Hello"`' },
      { letter: 'B', text: '`"Hi"`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'B',
    explanation: "The own property `sayHi` added to `user` is deleted, so property lookup falls back to the method on `User.prototype`, which returns 'Hi'."
  },
  {
    id: 19,
    question: "What's the output?",
    code: `const obj = {
  value: 42,
  getValue() {
    return this.value;
  },
};

const fn = obj.getValue;

console.log(fn.call({ value: 10 }), fn());`,
    options: [
      { letter: 'A', text: '`42 42`' },
      { letter: 'B', text: '`10 42`' },
      { letter: 'C', text: '`10 undefined`' },
      { letter: 'D', text: '`undefined undefined`' },
    ],
    answer: 'C',
    explanation: "`fn.call({ value: 10 })` sets `this` to the provided object, so it returns `10`. The plain call `fn()` loses the object context; in strict-mode modules `this` is `undefined`, so `this.value` is also `undefined`."
  },
  {
    id: 20,
    question: "What's the output?",
    code: `const p1 = Promise.resolve(1);
const p2 = Promise.reject('error');

Promise.allSettled([p1, p2]).then(results => {
  console.log(results[0].status, results[1].status);
});`,
    options: [
      { letter: 'A', text: '`"fulfilled" "rejected"`' },
      { letter: 'B', text: '`"fulfilled" "fulfilled"`' },
      { letter: 'C', text: '`"rejected" "rejected"`' },
      { letter: 'D', text: '`"rejected" "fulfilled"`' },
    ],
    answer: 'A',
    explanation: "`Promise.allSettled` waits for all promises to settle and returns an array of result objects. The resolved promise has `status: 'fulfilled'`, while the rejected one has `status: 'rejected'`."
  },
  {
    id: 21,
    question: "What's the output?",
    code: `const arr = [1, 2, 3];

const result = arr.flatMap(x => [x, x * 2]).filter(x => x % 2 === 0);

console.log(result);`,
    options: [
      { letter: 'A', text: '`[2, 4, 6]`' },
      { letter: 'B', text: '`[1, 2, 3, 2, 4, 6]`' },
      { letter: 'C', text: '`[2, 2, 4]`' },
      { letter: 'D', text: '`[4]`' },
    ],
    answer: 'A',
    explanation: "`flatMap` maps each number to `[x, x * 2]` and flattens, producing `[1, 2, 2, 4, 3, 6]`. Filtering for even numbers leaves `[2, 4, 6]`."
  },
  {
    id: 22,
    question: "What's the output?",
    code: `async function* gen() {
  yield 1;
  yield Promise.resolve(2);
  yield 3;
}

(async () => {
  const values = [];
  for await (const v of gen()) {
    values.push(v);
  }
  console.log(values);
})();`,
    options: [
      { letter: 'A', text: '`[1, Promise { 2 }, 3]`' },
      { letter: 'B', text: '`[1, 2, 3]`' },
      { letter: 'C', text: '`[Promise { 1 }, Promise { 2 }, Promise { 3 }]`' },
      { letter: 'D', text: '`[1, 3]`' },
    ],
    answer: 'B',
    explanation: "`for await...of` awaits each yielded value. Even though the second yield is a `Promise`, the loop waits for it to resolve and pushes the resolved value `2`, resulting in `[1, 2, 3]`."
  },
  {
    id: 23,
    question: "Which statement about `WeakMap` is true?",
    options: [
      { letter: 'A', text: 'Keys can be any primitive or object, just like in `Map`.' },
      { letter: 'B', text: 'Its keys are held weakly and must be objects, allowing garbage collection when there are no other references.' },
      { letter: 'C', text: 'It exposes a `.size` property that always reflects the number of entries.' },
      { letter: 'D', text: 'You can iterate over its entries with `for...of`.' },
    ],
    answer: 'B',
    explanation: "`WeakMap` keys must be objects and are held weakly, so if there are no other references to a key object, it can be garbage-collected, and the entry disappears. For this reason, `WeakMap` is not iterable and does not have a reliable `size`."
  },
  {
    id: 24,
    question: "What's the output?",
    code: `const obj = {
  value: 1,
  toJSON() {
    return this.value * 2;
  },
};

console.log(JSON.stringify(obj));`,
    options: [
      { letter: 'A', text: '`"{"value":1}"`' },
      { letter: 'B', text: '`"{"value":2}"`' },
      { letter: 'C', text: '`"2"`' },
      { letter: 'D', text: '`{ value: 2 }`' },
    ],
    answer: 'C',
    explanation: "If an object defines a `toJSON` method, `JSON.stringify` uses its return value as the serialized form. The method returns the number `2`, so the final JSON string is `'2'`."
  },
  {
    id: 25,
    question: "What's the output?",
    code: `function tag(strings, ...values) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(values[0]);
}

const name = 'Lydia';
tag\`Hello \${name}!\`;`,
    options: [
      { letter: 'A', text: '`"Hello "`, `"!"`, `"Lydia"`' },
      { letter: 'B', text: '`["Hello ", "!"]`, `["Lydia"]`' },
      { letter: 'C', text: '`"Hello Lydia!"`, `"Lydia"`, `"!"`' },
      { letter: 'D', text: '`"Hello "`, `"Lydia"`, `"!"`' },
    ],
    answer: 'A',
    explanation: "In tagged templates, the first argument is an array of literal string segments. For ``tag`Hello ${name}!``, `strings` is `['Hello ', '!']` and `values` is `['Lydia']`, so the three logs are `'Hello '`, `'!'`, and `'Lydia'`."
  },
  {
    id: 26,
    id: 26,
    question: "The JavaScript global execution context creates two things for you: the global object, and the 'this' keyword.",
    options: [
      { letter: 'A', text: 'true' },
      { letter: 'B', text: 'false' },
      { letter: 'C', text: 'it depends' },
    ],
    answer: 'A',
    explanation: "The base execution context is the global execution context: it's what's accessible everywhere in your code."
  },
  {
    id: 27,
    question: "What's the output?",
    code: `for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}`,
    options: [
      { letter: 'A', text: '`1` `2`' },
      { letter: 'B', text: '`1` `2` `3`' },
      { letter: 'C', text: '`1` `2` `4`' },
      { letter: 'D', text: '`1` `3` `4`' },
    ],
    answer: 'C',
    explanation: "The `continue` statement skips the current iteration of a loop when a specified condition is met, and continues with the next iteration."
  },
  {
    id: 28,
    question: "What's the output?",
    code: `String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

console.log(name.giveLydiaPizza());`,
    options: [
      { letter: 'A', text: '`"Just give Lydia pizza already!"`' },
      { letter: 'B', text: '`TypeError: not a function`' },
      { letter: 'C', text: '`SyntaxError`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'A',
    explanation: "You can add custom methods to the prototypes of built-in constructors like `String`. Primitive strings are automatically wrapped into String objects, so they have access to these methods."
  },
  {
    id: 29,
    question: "What's the output?",
    code: `const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);`,
    options: [
      { letter: 'A', text: '`123`' },
      { letter: 'B', text: '`456`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: "When an object is used as a key, it's converted to a string `[object Object]`. Both `a[b]` and `a[c]` are setting the value for the same key, so the last assignment (`456`) is the final value."
  },
  {
    id: 30,
    question: "What's the output?",
    code: `const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();`,
    options: [
      { letter: 'A', text: '`First` `Second` `Third`' },
      { letter: 'B', text: '`First` `Third` `Second`' },
      { letter: 'C', text: '`Second` `First` `Third`' },
      { letter: 'D', text: '`Second` `Third` `First`' },
    ],
    answer: 'B',
    explanation: "`setTimeout` is asynchronous. It places its callback in the event queue to be run after the current call stack is empty. So, `foo()` and `baz()` run first, then the `setTimeout` callback runs."
  },
  {
    id: 31,
    question: "What is the event.target when clicking the button?",
    code: `<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>`,
    options: [
      { letter: 'A', text: 'Outer `div`' },
      { letter: 'B', text: 'Inner `div`' },
      { letter: 'C', text: '`button`' },
      { letter: 'D', text: 'An array of all nested elements.' },
    ],
    answer: 'C',
    explanation: '`event.target` is always the element that triggered the event, which is the `<button>` in this case.'
  },
  {
    id: 32,
    question: "When you click the paragraph, what's the logged output?",
    code: `<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>`,
    options: [
      { letter: 'A', text: '`p` `div`' },
      { letter: 'B', text: '`div` `p`' },
      { letter: 'C', text: '`p`' },
      { letter: 'D', text: '`div`' },
    ],
    answer: 'A',
    explanation: "By default, events bubble up from the target element to its ancestors. So, the `p`'s handler runs first, then the `div`'s handler."
  },
  {
    id: 33,
    question: "What's the output?",
    code: `const person = { name: 'Lydia' };

function sayHi(age) {
  return \`\${this.name} is \${age}\`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));`,
    options: [
      { letter: 'A', text: '`undefined is 21` `Lydia is 21`' },
      { letter: 'B', text: '`function` `function`' },
      { letter: 'C', text: '`Lydia is 21` `Lydia is 21`' },
      { letter: 'D', text: '`Lydia is 21` `function`' },
    ],
    answer: 'D',
    explanation: "`.call()` executes the function immediately with the specified `this` context. `.bind()` creates a new function with the `this` context bound, but does not execute it."
  },
  {
    id: 34,
    question: "What's the output?",
    code: `function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());`,
    options: [
      { letter: 'A', text: '`"object"`' },
      { letter: 'B', text: '`"number"`' },
      { letter: 'C', text: '`"function"`' },
      { letter: 'D', text: '`"undefined"`' },
    ],
    answer: 'B',
    explanation: '`sayHi()` calls an Immediately Invoked Function Expression (IIFE) that returns `0`. The `typeof` of the number `0` is `"number"`.'
  },
  {
    id: 35,
    question: "Which of these values are falsy?",
    code: `0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;`,
    options: [
        { letter: 'A', text: '`0`, `\'\'`, `undefined`' },
        { letter: 'B', text: '`0`, `new Number(0)`, `\'\'`, `new Boolean(false)`, `undefined`' },
        { letter: 'C', text: '`0`, `\'\'`, `new Boolean(false)`, `undefined`' },
        { letter: 'D', text: 'All of them are falsy' },
    ],
    answer: 'A',
    explanation: "The main falsy values in JavaScript are `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, and `NaN`. Objects created with constructors like `new Number(0)` are always truthy."
  },
  {
    id: 36,
    question: "What's the output?",
    code: `console.log(typeof typeof 1);`,
    options: [
      { letter: 'A', text: '`"number"`' },
      { letter: 'B', text: '`"string"`' },
      { letter: 'C', text: '`"object"`' },
      { letter: 'D', text: '`"undefined"`' },
    ],
    answer: 'B',
    explanation: '`typeof 1` returns the string `"number"`. Then, `typeof "number"` returns the string `"string"`.'
  },
  {
    id: 37,
    question: "What's the output?",
    code: `const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);`,
    options: [
        { letter: 'A', text: '`[1, 2, 3, null x 7, 11]`' },
        { letter: 'B', text: '`[1, 2, 3, 11]`' },
        { letter: 'C', text: '`[1, 2, 3, empty x 7, 11]`' },
        { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'C',
    explanation: "Assigning a value to an index beyond the array's length creates 'empty slots', which behave like `undefined` but are often displayed differently by consoles."
  },
  {
    id: 38,
    question: "What's the output?",
    code: `(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();`,
    options: [
      { letter: 'A', text: '`1` `undefined` `2`' },
      { letter: 'B', text: '`undefined` `undefined` `undefined`' },
      { letter: 'C', text: '`1` `1` `2`' },
      { letter: 'D', text: '`1` `undefined` `undefined`' },
    ],
    answer: 'A',
    explanation: 'The `x` in the `catch` block is block-scoped to the catch block. It shadows the outer `x`. The outer `x` remains `undefined`, while `y` is modified and is accessible outside the catch block.'
  },
  {
    id: 39,
    question: "Everything in JavaScript is either a...",
    options: [
      { letter: 'A', text: 'primitive or object' },
      { letter: 'B', text: 'function or object' },
      { letter: 'C', text: 'trick question! only objects' },
      { letter: 'D', text: 'number or object' },
    ],
    answer: 'A',
    explanation: 'JavaScript has two main data type categories: primitive types (string, number, boolean, null, undefined, symbol, bigint) and objects.'
  },
  {
    id: 40,
    question: "What's the output?",
    code: `[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);`,
    options: [
      { letter: 'A', text: '`[0, 1, 2, 3, 1, 2]`' },
      { letter: 'B', text: '`[6, 1, 2]`' },
      { letter: 'C', text: '`[1, 2, 0, 1, 2, 3]`' },
      { letter: 'D', text: '`[1, 2, 6]`' },
    ],
    answer: 'C',
    explanation: 'The initial value for the accumulator (`acc`) is `[1, 2]`. The first iteration concatenates `[0, 1]` to it, resulting in `[1, 2, 0, 1]`. The second iteration concatenates `[2, 3]` to that, resulting in the final array.'
  },
  {
    id: 41,
    question: "What's the output?",
    code: `!!null;
!!'';
!!1;`,
    options: [
      { letter: 'A', text: '`false` `true` `false`' },
      { letter: 'B', text: '`false` `false` `true`' },
      { letter: 'C', text: '`false` `true` `true`' },
      { letter: 'D', text: '`true` `true` `false`' },
    ],
    answer: 'B',
    explanation: 'The double NOT `!!` operator coerces a value to its boolean equivalent. `null` and `""` are falsy, while `1` is truthy.'
  },
  {
    id: 42,
    question: "What does the `setInterval` method return in the browser?",
    code: `setInterval(() => console.log('Hi'), 1000);`,
    options: [
      { letter: 'A', text: 'a unique id' },
      { letter: 'B', text: 'the amount of milliseconds specified' },
      { letter: 'C', text: 'the passed function' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'A',
    explanation: '`setInterval` returns a numeric ID that can be used to cancel the interval later with `clearInterval()`.'
  },
  {
    id: 43,
    question: "What does this return?",
    code: `[...'Lydia'];`,
    options: [
      { letter: 'A', text: '`["L", "y", "d", "i", "a"]`' },
      { letter: 'B', text: '`["Lydia"]`' },
      { letter: 'C', text: '`[[], "Lydia"]`' },
      { letter: 'D', text: '`[["L", "y", "d", "i", "a"]]`' },
    ],
    answer: 'A',
    explanation: 'The spread syntax `...` on a string (which is an iterable) spreads it into an array of its individual characters.'
  },
  {
    id: 44,
    question: "What's the output?",
    code: `function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);`,
    options: [
      { letter: 'A', text: '`[0, 10], [10, 20]`' },
      { letter: 'B', text: '`20, 20`' },
      { letter: 'C', text: '`10, 20`' },
      { letter: 'D', text: '`0, 10 and 10, 20`' },
    ],
    answer: 'C',
    explanation: 'The first `gen.next()` call executes the generator until the first `yield`, returning `10`. The second `gen.next()` resumes execution until the next `yield`, returning `10 * 2`, which is `20`.'
  },
  {
    id: 45,
    question: "What does this return?",
    code: `const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));`,
    options: [
      { letter: 'A', text: '`"one"`' },
      { letter: 'B', text: '`"two"`' },
      { letter: 'C', text: '`"two" "one"`' },
      { letter: 'D', text: '`"one" "two"`' },
    ],
    answer: 'B',
    explanation: '`Promise.race` resolves or rejects as soon as the first promise in the iterable resolves or rejects. `secondPromise` resolves in 100ms, which is faster than `firstPromise` (500ms).'
  },
  {
    id: 46,
    question: "What's the output?",
    code: `const person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);`,
    options: [
      { letter: 'A', text: '`null`' },
      { letter: 'B', text: '`[null]`' },
      { letter: 'C', text: '`[{}]`' },
      { letter: 'D', text: '`[{ name: "Lydia" }]`' },
    ],
    answer: 'D',
    explanation: 'The `members` array contains a reference to the original `person` object. Reassigning the `person` variable to `null` does not change the object that `members[0]` is pointing to.'
  },
  {
    id: 47,
    question: "What's the output?",
    code: `const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}`,
    options: [
      { letter: 'A', text: '`{ name: "Lydia" }, { age: 21 }`' },
      { letter: 'B', text: '`"name", "age"`' },
      { letter: 'C', text: '`"Lydia", 21`' },
      { letter: 'D', text: '`["name", "Lydia"], ["age", 21]`' },
    ],
    answer: 'B',
    explanation: 'The `for...in` loop iterates over the enumerable property keys (names) of an object.'
  },
  {
    id: 48,
    question: "What's the output?",
    code: `console.log(3 + 4 + '5');`,
    options: [
      { letter: 'A', text: '`"345"`' },
      { letter: 'B', text: '`"75"`' },
      { letter: 'C', text: '`12`' },
      { letter: 'D', text: '`"12"`' },
    ],
    answer: 'B',
    explanation: "Operator associativity for `+` is left-to-right. `3 + 4` is calculated first, resulting in `7`. Then, `7 + '5'` is performed, which results in string concatenation: `'75'`."
  },
  {
    id: 49,
    question: "What's the value of `num`?",
    code: `const num = parseInt('7*6', 10);`,
    options: [
      { letter: 'A', text: '`42`' },
      { letter: 'B', text: '`"42"`' },
      { letter: 'C', text: '`7`' },
      { letter: 'D', text: '`NaN`' },
    ],
    answer: 'C',
    explanation: '`parseInt` parses a string until it hits a character it doesn\'t recognize for the given radix. It parses "7" and stops at "*", returning `7`.'
  },
  {
    id: 50,
    question: "What's the output?",
    code: `[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});`,
    options: [
      { letter: 'A', text: '`[]`' },
      { letter: 'B', text: '`[null, null, null]`' },
      { letter: 'C', text: '`[undefined, undefined, undefined]`' },
      { letter: 'D', text: '`[ 3 x empty ]`' },
    ],
    answer: 'C',
    explanation: 'The `if` condition is always true for the given array, and the `return;` statement returns `undefined`. `map` creates a new array with the return value of the callback for each element, so it returns an array of `undefined`.'
  },
  {
    id: 51,
    question: "What's the output?",
    code: `function getInfo(member, year) {
  member.name = 'Lydia';
  year = '1998';
}

const person = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person, birthYear);

console.log(person, birthYear);`,
    options: [
      { letter: 'A', text: '`{ name: "Lydia" }, "1997"`' },
      { letter: 'B', text: '`{ name: "Sarah" }, "1998"`' },
      { letter: 'C', text: '`{ name: "Lydia" }, "1998"`' },
      { letter: 'D', text: '`{ name: "Sarah" }, "1997"`' },
    ],
    answer: 'A',
    explanation: 'Objects are passed by reference, so modifying `member.name` inside the function also modifies the original `person` object. Primitive types like strings are passed by value, so reassigning `year` inside the function does not affect the original `birthYear` variable.'
  },
  {
    id: 52,
    question: "What's the output?",
    code: `function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

sayHi();`,
    options: [
      { letter: 'A', text: '`It worked! Hello world!`' },
      { letter: 'B', text: '`Oh no an error: undefined`' },
      { letter: 'C', text: '`SyntaxError: can only throw Error objects`' },
      { letter: 'D', text: '`Oh no an error: Hello world!`' },
    ],
    answer: 'D',
    explanation: "You can throw any value in JavaScript, not just `Error` objects. The `catch` block will receive the thrown value, in this case the string 'Hello world!', and execute."
  },
  {
    id: 53,
    question: "What's the output?",
    code: `function Car() {
  this.make = 'Lamborghini';
  return { make: 'Maserati' };
}

const myCar = new Car();
console.log(myCar.make);`,
    options: [
      { letter: 'A', text: '`"Lamborghini"`' },
      { letter: 'B', text: '`"Maserati"`' },
      { letter: 'C', text: '`ReferenceError`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'B',
    explanation: 'If a constructor function explicitly returns an object, that object is returned as the result of the `new` operation, instead of the object created by the constructor.'
  },
  {
    id: 54,
    question: "What's the output?",
    code: `(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);`,
    options: [
      { letter: 'A', text: '`"undefined", "number"`' },
      { letter: 'B', text: '`"number", "number"`' },
      { letter: 'C', text: '`"object", "number"`' },
      { letter: 'D', text: '`"number", "undefined"`' },
    ],
    answer: 'A',
    explanation: 'The statement `y = 10` creates a global variable `y`. `let x = y` creates a block-scoped variable `x`. `x` is not accessible outside the IIFE, so `typeof x` is `"undefined"`. `y` is a global, so `typeof y` is `"number"`.'
  },
  {
    id: 55,
    question: "What's the output?",
    code: `class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(\`Woof I am \${this.name}\`);
};

const pet = new Dog('Mara');

pet.bark();

delete Dog.prototype.bark;

pet.bark();`,
    options: [
      { letter: 'A', text: '`"Woof I am Mara"`, `TypeError`' },
      { letter: 'B', text: '`"Woof I am Mara"`, `"Woof I am Mara"`' },
      { letter: 'C', text: '`"Woof I am Mara"`, `undefined`' },
      { letter: 'D', text: '`TypeError`, `TypeError`' },
    ],
    answer: 'A',
    explanation: "The `delete` operator removes a property from an object. After `delete Dog.prototype.bark`, the `bark` method no longer exists in the prototype chain, so calling `pet.bark()` results in a `TypeError`."
  },
  {
    id: 56,
    question: "What's the output?",
    code: `const set = new Set([1, 1, 2, 3, 4]);

console.log(set);`,
    options: [
      { letter: 'A', text: '`[1, 1, 2, 3, 4]`' },
      { letter: 'B', text: '`[1, 2, 3, 4]`' },
      { letter: 'C', text: '`{1, 1, 2, 3, 4}`' },
      { letter: 'D', text: '`{1, 2, 3, 4}`' },
    ],
    answer: 'D',
    explanation: 'A `Set` object only stores unique values. Duplicate values from the input array are ignored.'
  },
  {
    id: 57,
    question: "What's the output?",
    code: `// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from './counter';
myCounter += 1;
console.log(myCounter);`,
    options: [
      { letter: 'A', text: '`10`' },
      { letter: 'B', text: '`11`' },
      { letter: 'C', text: '`Error`' },
      { letter: 'D', text: '`NaN`' },
    ],
    answer: 'C',
    explanation: 'Imported modules are live but read-only bindings. You cannot reassign the value of an imported variable from the importing module.'
  },
  {
    id: 58,
    question: "What's the output?",
    code: `const name = 'Lydia';
age = 21;

console.log(delete name);
console.log(delete age);`,
    options: [
      { letter: 'A', text: '`false`, `true`' },
      { letter: 'B', text: '`"Lydia"`, `21`' },
      { letter: 'C', text: '`true`, `true`' },
      { letter: 'D', text: '`undefined`, `undefined`' },
    ],
    answer: 'A',
    explanation: 'The `delete` operator cannot delete variables declared with `var`, `let`, or `const`. It returns `false`. However, `age` becomes a property of the global object, and properties on objects can be deleted, so it returns `true`.'
  },
  {
    id: 59,
    question: "What's the output?",
    code: `const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);`,
    options: [
      { letter: 'A', text: '`[[1, 2, 3, 4, 5]]`' },
      { letter: 'B', text: '`[1, 2, 3, 4, 5]`' },
      { letter: 'C', text: '`1`' },
      { letter: 'D', text: '`[1]`' },
    ],
    answer: 'C',
    explanation: 'This is array destructuring. The variable `y` is assigned the value of the first element in the `numbers` array.'
  },
  {
    id: 60,
    question: "What's the output?",
    code: `const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);`,
    options: [
      { letter: 'A', text: '`{ admin: true, user: { name: "Lydia", age: 21 } }`' },
      { letter: 'B', text: '`{ admin: true, name: "Lydia", age: 21 }`' },
      { letter: 'C', text: '`{ admin: true, user: ["Lydia", 21] }`' },
      { letter: 'D', text: '`{ admin: true }`' },
    ],
    answer: 'B',
    explanation: 'The spread syntax `...` copies the properties from the `user` object into the new `admin` object at the top level.'
  },
  {
    id: 61,
    question: "What's the output?",
    code: `const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));`,
    options: [
      { letter: 'A', text: '`{ name: "Lydia", age: 21 }`, `["name", "age"]`' },
      { letter: 'B', text: '`{ name: "Lydia", age: 21 }`, `["name"]`' },
      { letter: 'C', text: '`{ name: "Lydia"}`, `["name", "age"]`' },
      { letter: 'D', text: '`{ name: "Lydia"}`, `["age"]`' },
    ],
    answer: 'B',
    explanation: "Properties added with `Object.defineProperty` are not enumerable by default. `Object.keys` only returns enumerable properties, so 'age' is not included."
  },
  {
    id: 62,
    question: "What's the output?",
    code: `const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);`,
    options: [
      { letter: 'A', text: '`"{"level":19, "health":90}"`' },
      { letter: 'B', text: '`"{"username": "lydiahallie"}"`' },
      { letter: 'C', text: '`"["level", "health"]"`' },
      { letter: 'D', text: '`"{"username": "lydiahallie", "level":19, "health":90}"`' },
    ],
    answer: 'A',
    explanation: 'The second argument to `JSON.stringify` is a replacer. If it\'s an array of strings, it acts as a whitelist for which properties to include in the resulting JSON string.'
  },
  {
    id: 63,
    question: "What's the output?",
    code: `let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);`,
    options: [
      { letter: 'A', text: '`10`, `10`' },
      { letter: 'B', text: '`10`, `11`' },
      { letter: 'C', text: '`11`, `11`' },
      { letter: 'D', text: '`11`, `12`' },
    ],
    answer: 'A',
    explanation: "The postfix increment operator (`++`) returns the value of the variable *before* it increments. `increaseNumber` returns `10` (and sets `num` to 11). Then `increasePassedNumber` is called with `10`, and it also returns `10`."
  },
  {
    id: 64,
    question: "What's the output?",
    code: `const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);`,
    options: [
      { letter: 'A', text: '`20`, `40`, `80`, `160`' },
      { letter: 'B', text: '`20`, `40`, `20`, `40`' },
      { letter: 'C', text: '`20`, `20`, `20`, `40`' },
      { letter: 'D', text: '`NaN`, `NaN`, `20`, `40`' },
    ],
    answer: 'C',
    explanation: 'Default parameters are evaluated at call time. The first two calls create a new object each time. The last two calls pass the same `value` object, so the second call modifies the object that was already modified by the first.'
  },
  {
    id: 65,
    question: "What's the output?",
    code: `[1, 2, 3, 4].reduce((x, y) => console.log(x, y));`,
    options: [
      { letter: 'A', text: '`1` `2` and `3` `3` and `6` `4`' },
      { letter: 'B', text: '`1` `2` and `2` `3` and `3` `4`' },
      { letter: 'C', text: '`1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`' },
      { letter: 'D', text: '`1` `2` and `undefined` `3` and `undefined` `4`' },
    ],
    answer: 'D',
    explanation: '`reduce` without an initial value uses the first element as the initial accumulator. The callback logs the accumulator and current value but returns `undefined`. In subsequent iterations, the accumulator (`x`) is `undefined`.'
  },


  {
    id: 66,
    question: "With which constructor can we successfully extend the `Dog` class?",
    code: `class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};`,
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '2' },
      { letter: 'C', text: '3' },
      { letter: 'D', text: '4' },
    ],
    answer: 'B',
    explanation: "In a child class constructor, you must call `super()` before using the `this` keyword. `super()` calls the parent's constructor, and you need to pass the required arguments (in this case, `name`)."
  },
  {
    id: 67,
    question: "What's the output?",
    code: `// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;`,
    options: [
      { letter: 'A', text: '`running index.js`, `running sum.js`, `3`' },
      { letter: 'B', text: '`running sum.js`, `running index.js`, `3`' },
      { letter: 'C', text: '`running sum.js`, `3`, `running index.js`' },
      { letter: 'D', text: '`running index.js`, `undefined`, `running sum.js`' },
    ],
    answer: 'B',
    explanation: 'ES modules are pre-parsed. This means that imported modules are executed first, and then the code in the file that imports the module is executed.'
  },
  {
    id: 68,
    question: "What's the output?",
    code: `console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));`,
    options: [
      { letter: 'A', text: '`true`, `true`, `false`' },
      { letter: 'B', text: '`false`, `true`, `false`' },
      { letter: 'C', text: '`true`, `false`, `true`' },
      { letter: 'D', text: '`true`, `true`, `true`' },
    ],
    answer: 'A',
    explanation: "Every `Symbol` is unique. Calling `Symbol('foo')` creates a new, unique symbol, so comparing two of them will always be `false`."
  },
  {
    id: 69,
    question: "What's the output?",
    code: `const name = 'Lydia Hallie';
console.log(name.padStart(13));
console.log(name.padStart(2));`,
    options: [
      { letter: 'A', text: '`"Lydia Hallie"`, `"Lydia Hallie"`' },
      { letter: 'B', text: '`" Lydia Hallie"`, `"  Lydia Hallie"`' },
      { letter: 'C', text: '`" Lydia Hallie"`, `"Lydia Hallie"`' },
      { letter: 'D', text: '`"Lydia Hallie"`, `"Lyd"`' },
    ],
    answer: 'C',
    explanation: '`padStart` adds padding to the start of a string to reach a target length. `name.padStart(13)` adds one space. If the target length is less than the string length, no padding is added.'
  },
  {
    id: 70,
    question: "What's the output?",
    code: `console.log('🥑' + '💻');`,
    options: [
      { letter: 'A', text: '`"🥑💻"`' },
      { letter: 'B', text: '`257548`' },
      { letter: 'C', text: 'A string containing their code points' },
      { letter: 'D', text: 'Error' },
    ],
    answer: 'A',
    explanation: 'The `+` operator concatenates strings. The two emoji strings are joined together.'
  },
  {
    id: 71,
    question: "What's the output?",
    code: `function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're done here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(game.next().value);
console.log(game.next('Yes').value);`,
    options: [
      { letter: 'A', text: '`Do you love JavaScript?` and `Oh wow... Guess we\'re done here`' },
      { letter: 'B', text: '`Do you love JavaScript?` and `JavaScript loves you back ❤️`' },
      { letter: 'C', text: '`Do you love JavaScript?` and `undefined`' },
      { letter: 'D', text: '`undefined` and `JavaScript loves you back ❤️`' },
    ],
    answer: 'B',
    explanation: 'The value passed to `next()` is the result of the previous `yield` expression. `game.next("Yes")` makes `answer` equal to "Yes", so the `if` condition is false and the final return statement is executed.'
  },
  {
    id: 72,
    question: "What's the output?",
    code: "console.log(String.raw`Hello\\nworld`);",
    options: [
      { letter: 'A', text: '`Hello world!`' },
      { letter: 'B', text: '`Hello\\nworld`' },
      { letter: 'C', text: '`Hello\nworld`' },
      { letter: 'D', text: '`Hello\n world`' },
    ],
    answer: 'B',
    explanation: '`String.raw` is a tag function that gets the raw string form of template literals, meaning escape sequences like `\\n` are not processed and are treated as literal characters.'
  },
  {
    id: 73,
    question: "What's the output?",
    code: `async function getData() {
  return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);`,
    options: [
      { letter: 'A', text: '`"I made it!"`' },
      { letter: 'B', text: '`Promise {<resolved>: "I made it!"}`' },
      { letter: 'C', text: '`Promise {<pending>}`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'C',
    explanation: '`async` functions always return a promise. When you call `getData()`, it returns a pending promise that will resolve with the value "I made it!". To access the value, you need to use `.then()` or `await`.'
  },
  {
    id: 74,
    question: "What's the output?",
    code: `function addToList(item, list) {
  return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result);`,
    options: [
      { letter: 'A', text: '`[\'apple\', \'banana\']`' },
      { letter: 'B', text: '`2`' },
      { letter: 'C', text: '`true`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'B',
    explanation: 'The `Array.prototype.push()` method returns the new length of the array after the element has been added.'
  },
  {
    id: 75,
    question: "What's the output?",
    code: `const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);`,
    options: [
      { letter: 'A', text: '`{ x: 100, y: 20 }`' },
      { letter: 'B', text: '`{ x: 10, y: 20 }`' },
      { letter: 'C', text: '`{ x: 100 }`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: '`Object.freeze()` makes an object immutable. You cannot change its properties. The assignment `shape.x = 100` fails silently in non-strict mode.'
  },
  {
    id: 76,
    question: "What's the output?",
    code: `const { firstName: myName } = { firstName: 'Lydia' };

console.log(firstName);`,
    options: [
      { letter: 'A', text: '`"Lydia"`' },
      { letter: 'B', text: '`"myName"`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'D',
    explanation: 'This is destructuring with renaming. A new variable `myName` is created with the value of `firstName`. The variable `firstName` itself is not created.'
  },
  {
    id: 77,
    question: 'Is this a pure function?',
    code: `function sum(a, b) {
  return a + b;
}`,
    options: [
        { letter: 'A', text: 'Yes' },
        { letter: 'B', text: 'No' },
    ],
    answer: 'A',
    explanation: 'A pure function is a function which for the same input, will always return the same output and has no side-effects. `sum` fits this definition perfectly.'
  },
  {
    id: 78,
    question: "What's the output?",
    code: `const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return \`From cache! \${cache[num]}\`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return \`Calculated! \${result}\`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));`,
    options: [
        { letter: 'A', text: '`Calculated! 20` `Calculated! 20` `Calculated! 20`' },
        { letter: 'B', text: '`Calculated! 20` `From cache! 20` `Calculated! 20`' },
        { letter: 'C', text: '`Calculated! 20` `From cache! 20` `From cache! 20`' },
        { letter: 'D', text: '`Calculated! 20` `From cache! 20` `Error`' },
    ],
    answer: 'C',
    explanation: 'This is an example of memoization using a closure. The first call with `10` calculates and caches the result. Subsequent calls with `10` (including `5 * 2`) retrieve the result from the cache.'
  },
  {
    id: 79,
    question: "What's the output?",
    code: `const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}`,
    options: [
        { letter: 'A', text: '`0` `1` `2` `3` and `"☕"` `"💻"` `"🍷"` `"🍫"`' },
        { letter: 'B', text: '`"☕"` `"💻"` `"🍷"` `"🍫"` and `"☕"` `"💻"` `"🍷"` `"🍫"`' },
        { letter: 'C', text: '`"☕"` `"💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`' },
        { letter: 'D', text: '`0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`' },
    ],
    answer: 'A',
    explanation: 'A `for...in` loop iterates over the keys (indices) of an array. A `for...of` loop iterates over the values of an iterable, like an array.'
  },
  {
    id: 80,
    question: "What's the output?",
    code: `const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);`,
    options: [
        { letter: 'A', text: '`["1 + 2", "1 * 2", "1 / 2"]`' },
        { letter: 'B', text: '`["12", 2, 0.5]`' },
        { letter: 'C', text: '`[3, 2, 0.5]`' },
        { letter: 'D', text: '`[1, 1, 1]`' },
    ],
    answer: 'C',
    explanation: 'The expressions inside the array literal are evaluated before the array is created. The array will contain the results of those calculations.'
  },
  {
    id: 81,
    question: "What's the output?",
    code: `function sayHi(name) {
  return \`Hi there, \${name}\`;
}

console.log(sayHi());`,
    options: [
      { letter: 'A', text: '`Hi there,`' },
      { letter: 'B', text: '`Hi there, undefined`' },
      { letter: 'C', text: '`Hi there, null`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: 'If you call a function without providing an argument for a parameter, that parameter\'s value is `undefined` by default.'
  },
  {
    id: 82,
    question: "What's the output?",
    code: `var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);`,
    options: [
      { letter: 'A', text: '`"🥑"` and `"😍"`' },
      { letter: 'B', text: '`"🥑"` and `"😎"`' },
      { letter: 'C', text: '`"😍"` and `"😎"`' },
      { letter: 'D', text: '`"😎"` and `"😎"`' },
    ],
    answer: 'B',
    explanation: 'In the first call, `this` refers to the `data` object. In the second call, `call(this)` sets `this` to the `this` of the `setTimeout` callback, which is the global object (window) where `status` is "😎".'
  },
  {
    id: 83,
    question: "What's the output?",
    code: `const person = {
  name: 'Lydia',
  age: 21,
};

let city = person.city;
city = 'Amsterdam';

console.log(person);`,
    options: [
      { letter: 'A', text: '`{ name: "Lydia", age: 21 }`' },
      { letter: 'B', text: '`{ name: "Lydia", age: 21, city: "Amsterdam" }`' },
      { letter: 'C', text: '`{ name: "Lydia", age: 21, city: undefined }`' },
      { letter: 'D', text: '`"Amsterdam"`' },
    ],
    answer: 'A',
    explanation: '`person.city` is `undefined`. Assigning this to `city` creates a new variable `city` with the value `undefined`. Reassigning `city` to "Amsterdam" does not affect the `person` object.'
  },
  {
    id: 84,
    question: "What's the output?",
    code: `function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));`,
    options: [
      { letter: 'A', text: '`"Sorry, you\'re too young."`' },
      { letter: 'B', text: '`"Yay! You\'re old enough!"`' },
      { letter: 'C', text: '`ReferenceError`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'C',
    explanation: '`const` and `let` are block-scoped. The `message` variable is only accessible within the `if` and `else` blocks, not in the outer function scope where `return message` is.'
  },
  {
    id: 85,
    question: "What kind of information would get logged?",
    code: `fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));`,
    options: [
      { letter: 'A', text: 'The result of the `fetch` method.' },
      { letter: 'B', text: 'The result of the second invocation of the `fetch` method.' },
      { letter: 'C', text: 'The result of the callback in the previous `.then()`.' },
      { letter: 'D', text: 'It would always be undefined.' },
    ],
    answer: 'C',
    explanation: 'Each `.then()` in a promise chain receives the return value of the previous `.then()` callback. The second `.then()` receives the result of `res.json()`.'
  },
  {
    id: 86,
    question: "Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?",
    code: `function getName(name) {
  const hasName = //
}`,
    options: [
      { letter: 'A', text: '`!!name`' },
      { letter: 'B', text: '`name`' },
      { letter: 'C', text: '`new Boolean(name)`' },
      { letter: 'D', text: '`name.length`' },
    ],
    answer: 'A',
    explanation: 'The double NOT `!!` operator is a common way to explicitly convert a value to its boolean equivalent (`true` for truthy values, `false` for falsy values).'
  },
  {
    id: 87,
    question: "What's the output?",
    code: `console.log('I want pizza'[0]);`,
    options: [
      { letter: 'A', text: '`""`' },
      { letter: 'B', text: '`"I"`' },
      { letter: 'C', text: '`SyntaxError`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'B',
    explanation: 'You can access characters in a string by their index using bracket notation, similar to an array. The first character is at index 0.'
  },
  {
    id: 88,
    question: "What's the output?",
    code: `function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);`,
    options: [
      { letter: 'A', text: '`NaN`' },
      { letter: 'B', text: '`20`' },
      { letter: 'C', text: '`ReferenceError`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'B',
    explanation: 'Default parameters can refer to earlier parameters. Since `num2` is not provided, it defaults to the value of `num1`, which is `10`. So, `10 + 10` is calculated.'
  },
  {
    id: 89,
    question: "What's the output?",
    code: `// module.js
export default () => 'Hello world';
export const name = 'Lydia';

// index.js
import * as data from './module';

console.log(data);`,
    options: [
      { letter: 'A', text: '`{ default: function default(), name: "Lydia" }`' },
      { letter: 'B', text: '`{ default: function default() }`' },
      { letter: 'C', text: '`{ default: "Hello world", name: "Lydia" }`' },
      { letter: 'D', text: 'Global object of `module.js`' },
    ],
    answer: 'A',
    explanation: '`import * as` creates a namespace object. The default export is available on the `default` property, and named exports are properties with their respective names.'
  },
  {
    id: 90,
    question: "What's the output?",
    code: `class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);`,
    options: [
      { letter: 'A', text: '`"class"`' },
      { letter: 'B', text: '`"function"`' },
      { letter: 'C', text: '`"object"`' },
      { letter: 'D', text: '`"string"`' },
    ],
    answer: 'C',
    explanation: 'Classes in JavaScript are "syntactical sugar" over constructor functions. An instance of a class, created with `new`, is an object.'
  },
  {
    id: 91,
    question: "What's the output?",
    code: `let newList = [1, 2, 3].push(4);

console.log(newList.push(5));`,
    options: [
      { letter: 'A', text: '`[1, 2, 3, 4, 5]`' },
      { letter: 'B', text: '`[1, 2, 3, 5]`' },
      { letter: 'C', text: '`[1, 2, 3, 4]`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'D',
    explanation: 'The `.push()` method returns the new length of the array, not the array itself. `newList` becomes `4`. You cannot call `.push()` on a number, so it throws a `TypeError`.'
  },
  {
    id: 92,
    question: "What's the output?",
    code: `function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);`,
    options: [
      { letter: 'A', text: '`{ constructor: ...}` `{ constructor: ...}`' },
      { letter: 'B', text: '`{}` `{ constructor: ...}`' },
      { letter: 'C', text: '`{ constructor: ...}` `{}`' },
      { letter: 'D', text: '`{ constructor: ...}` `undefined`' },
    ],
    answer: 'D',
    explanation: 'Regular functions have a `prototype` property. Arrow functions do not have a `prototype` property.'
  },
  {
    id: 93,
    question: "What's the output?",
    code: `const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}`,
    options: [
      { letter: 'A', text: '`name` `Lydia` and `age` `21`' },
      { letter: 'B', text: '`["name", "Lydia"]` and `["age", 21]`' },
      { letter: 'C', text: '`["name", "age"]` and `undefined`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'A',
    explanation: '`Object.entries()` returns an array of `[key, value]` pairs. The `for...of` loop with destructuring `[x, y]` correctly assigns the key to `x` and the value to `y` in each iteration.'
  },
  {
    id: 94,
    question: "What's the output?",
    code: `function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")`,
    options: [
      { letter: 'A', text: '`["banana", "apple", "pear", "orange"]`' },
      { letter: 'B', text: '`[["banana", "apple"], "pear", "orange"]`' },
      { letter: 'C', text: '`["banana", "apple", ["pear"], "orange"]`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'D',
    explanation: 'The rest parameter (`...args`) must be the last parameter in a function definition.'
  },
  {
    id: 95,
    question: "What's the output?",
    code: `function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));`,
    options: [
      { letter: 'A', text: '`a is bigger`, `6` and `b is bigger`, `3`' },
      { letter: 'B', text: '`a is bigger`, `undefined` and `b is bigger`, `undefined`' },
      { letter: 'C', text: '`undefined` and `undefined`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'B',
    explanation: 'Due to Automatic Semicolon Insertion (ASI), a semicolon is inserted after `return`. The function returns `undefined`, and the line `a + b` is never reached.'
  },
  {
    id: 96,
    question: "What's the output?",
    code: `class Person {
  constructor() {
    this.name = 'Lydia';
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = 'Sarah';
  }
};

const member = new Person();
console.log(member.name);`,
    options: [
      { letter: 'A', text: '`"Lydia"`' },
      { letter: 'B', text: '`"Sarah"`' },
      { letter: 'C', text: '`Error: cannot redeclare Person`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'B',
    explanation: 'Although classes declared with `class` are not hoisted, you can reassign the variable that holds the class. `Person` is reassigned to `AnotherPerson`, so `new Person()` creates an instance of `AnotherPerson`.'
  },
  {
    id: 97,
    question: "What's the output?",
    code: `const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));`,
    options: [
      { letter: 'A', text: '`{Symbol(\'a\'): \'b\'}` and `["{Symbol(\'a\')"]`' },
      { letter: 'B', text: '`{}` and `[]`' },
      { letter: 'C', text: '`{ a: "b" }` and `["a"]`' },
      { letter: 'D', text: '`{Symbol(\'a\'): \'b\'}` and `[]`' },
    ],
    answer: 'D',
    explanation: 'Symbol properties are not enumerable and are not returned by `Object.keys()`. They are hidden from normal property iteration.'
  },
  {
    id: 98,
    question: "What's the output?",
    code: `const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))`,
    options: [
      { letter: 'A', text: '`[1, [2, 3, 4]]` and `undefined`' },
      { letter: 'B', text: '`[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`' },
      { letter: 'C', text: '`[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`' },
      { letter: 'D', text: '`[1, [2, 3, 4]]` and `SyntaxError`' },
    ],
    answer: 'A',
    explanation: '`getList` correctly destructures the array. In `getUser`, the curly braces `{}` are interpreted as a function body, not an object literal. The lines inside are labels, and the function implicitly returns `undefined`. To return an object, you must wrap it in parentheses: `({ ... })`.'
  },
  {
    id: 99,
    question: "What's the output?",
    code: `const name = 'Lydia';

console.log(name());`,
    options: [
      { letter: 'A', text: '`SyntaxError`' },
      { letter: 'B', text: '`ReferenceError`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'C',
    explanation: 'A `TypeError` is thrown when a value is not of the expected type. Here, we are trying to invoke a string as if it were a function.'
  },
  {
    id: 100,
    question: "What's the value of output?",
    code: "const output = `${[] && 'Im'}possible!\\nYou should${'' && `n't`} see a therapist after so much JavaScript lol`;",
    options: [
      { letter: 'A', text: "`possible! You should see a therapist after so much JavaScript lol`" },
      { letter: 'B', text: "`Impossible! You should see a therapist after so much JavaScript lol`" },
      { letter: 'C', text: "`possible! You shouldn't see a therapist after so much JavaScript lol`" },
      { letter: 'D', text: "`Impossible! You shouldn't see a therapist after so much JavaScript lol`" },
    ],
    answer: 'B',
    explanation: "The `&&` operator returns the right-hand side if the left is truthy. `[]` is truthy, so 'Im' is returned. `''` is falsy, so it is returned and the right-hand side is ignored."
  },
  {
    id: 101,
    question: "What's the output?",
    code: `const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);`,
    options: [
      { letter: 'A', text: '`false` `null` `[]`' },
      { letter: 'B', text: '`null` `""` `true`' },
      { letter: 'C', text: '`{}` `""` `[]`' },
      { letter: 'D', text: '`null` `null` `true`' },
    ],
    answer: 'C',
    explanation: 'The `||` operator returns the first truthy value it encounters. `{}` and `[]` are both truthy. If all values are falsy, it returns the last falsy value.'
  },
  {
    id: 102,
    question: "What's the output?",
    code: `const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();`,
    options: [
      { letter: 'A', text: '`I have resolved!`, `second` and `I have resolved!`, `second`' },
      { letter: 'B', text: '`second`, `I have resolved!` and `second`, `I have resolved!`' },
      { letter: 'C', text: '`I have resolved!`, `second` and `second`, `I have resolved!`' },
      { letter: 'D', text: '`second`, `I have resolved!` and `I have resolved!`, `second`' },
    ],
    answer: 'D',
    explanation: 'In `firstFunction`, the `.then()` callback is asynchronous and runs after the synchronous code (`console.log("second")`). In `secondFunction`, `await` pauses the function execution until the promise resolves, so the logs appear in order.'
  },
  {
    id: 103,
    question: "What's the output?",
    code: `const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}`,
    options: [
      { letter: 'A', text: '`3`, `NaN`, `NaN`' },
      { letter: 'B', text: '`3`, `7`, `NaN`' },
      { letter: 'C', text: '`3`, `Lydia2`, `[object Object]2`' },
      { letter: 'D', text: '`"12"`, `Lydia2`, `[object Object]2`' },
    ],
    answer: 'C',
    explanation: 'The `+` operator performs numeric addition if both operands are numbers. Otherwise, it performs string concatenation, coercing the non-string operand to a string.'
  },
  {
    id: 104,
    question: "What's the value of `Promise.resolve(5)`?",
    options: [
      { letter: 'A', text: '`5`' },
      { letter: 'B', text: '`Promise {<pending>: 5}`' },
      { letter: 'C', text: '`Promise {<fulfilled>: 5}`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'C',
    explanation: '`Promise.resolve(value)` returns a `Promise` object that is resolved with the given value.'
  },
  {
    id: 105,
    question: "What's the output?",
    code: `function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };

compareMembers(person);`,
    options: [
      { letter: 'A', text: '`Not the same!`' },
      { letter: 'B', text: '`They are the same!`' },
      { letter: 'C', text: '`ReferenceError`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'B',
    explanation: 'The default value for `person2` is the global `person` object. We call the function with `person` as the first argument. Since objects are compared by reference, `person1` and `person2` point to the same object and are strictly equal.'
  },
  {
    id: 106,
    question: "What's the output?",
    code: `const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);`,
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'D',
    explanation: 'With dot notation, JavaScript looks for a property named `colors`, which does not exist on `colorConfig`, so it returns `undefined`. Trying to access an index (`[1]`) of `undefined` throws a `TypeError`.'
  },
  {
    id: 107,
    question: "What's the output?",
    code: `console.log('❤️' === '❤️');`,
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
    ],
    answer: 'A',
    explanation: 'Emojis are strings with specific unicode values. Since the unicode for the heart emoji is the same in both cases, the strings are strictly equal.'
  },
  {
    id: 108,
    question: 'Which of these methods modifies the original array?',
    code: `const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');`,
    options: [
      { letter: 'A', text: 'All of them' },
      { letter: 'B', text: '`map`, `reduce`, `slice`, `splice`' },
      { letter: 'C', text: '`map`, `slice`, `splice`' },
      { letter: 'D', text: '`splice`' },
    ],
    answer: 'D',
    explanation: 'Of the methods listed, only `splice` mutates (modifies) the original array in place. `map`, `filter`, and `slice` return new arrays.'
  },
  {
    id: 109,
    question: "What's the output?",
    code: `const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);`,
    options: [
      { letter: 'A', text: '`[\'🍕\', \'🍫\', \'🥑\', \'🍔\']`' },
      { letter: 'B', text: '`[\'🍝\', \'🍫\', \'🥑\', \'🍔\']`' },
      { letter: 'C', text: '`[\'🍝\', \'🍕\', \'🍫\', \'🥑\', \'🍔\']`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'A',
    explanation: 'Strings are primitive types and are passed by value. `info.favoriteFood` gets a copy of the string from `food[0]`. Changing `info.favoriteFood` does not affect the original `food` array.'
  },
  {
    id: 110,
    question: "What does this method do?",
    code: `JSON.parse();`,
    options: [
      { letter: 'A', text: 'Parses JSON to a JavaScript value' },
      { letter: 'B', text: 'Parses a JavaScript object to JSON' },
      { letter: 'C', text: 'Parses any JavaScript value to JSON' },
      { letter: 'D', 'text': 'Parses JSON to a JavaScript object only' },
    ],
    answer: 'A',
    explanation: '`JSON.parse()` takes a JSON string and transforms it into the JavaScript object, array, number, string, boolean, or null value that it represents.'
  },
  {
    id: 111,
    question: "What's the output?",
    code: `let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName();`,
    options: [
      { letter: 'A', text: 'Lydia' },
      { letter: 'B', text: 'Sarah' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'D',
    explanation: "Variables declared with `let` are block-scoped and are not accessible before their declaration. This is called the 'temporal dead zone'. The `console.log` tries to access `name` before it's initialized in the function's scope."
  },
  {
    id: 112,
    question: "What's the output?",
    code: `function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);`,
    options: [
      { letter: 'A', text: '`a` and `a`' },
      { letter: 'B', text: '`a` and `undefined`' },
      { letter: 'C', text: '`[\'a\', \'b\', \'c\']` and `a`' },
      { letter: 'D', text: '`a` and `[\'a\', \'b\', \'c\']`' },
    ],
    answer: 'C',
    explanation: '`yield` pauses and returns the entire value as-is. `yield*` delegates to another iterable (like an array) and yields each of its items one by one.'
  },
  {
    id: 113,
    question: "What's the output?",
    code: "console.log(`${(x => x)('I love')} to program`);",
    options: [
      { letter: 'A', text: '`I love to program`' },
      { letter: 'B', text: '`undefined to program`' },
      { letter: 'C', text: '`${(x => x)(\'I love\') to program`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'A',
    explanation: 'Expressions inside template literals `${...}` are evaluated first. The IIFE `(x => x)(\'I love\')` returns `"I love"`, which is then embedded in the string.'
  },
  {
    id: 114,
    question: "What will happen?",
    code: `let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;`,
    options: [
      { letter: 'A', text: 'The `setInterval` callback won\'t be invoked' },
      { letter: 'B', text: 'The `setInterval` callback gets invoked once' },
      { letter: 'C', text: 'The `setInterval` callback will still be called every second' },
      { letter: 'D', text: 'We never invoked `config.alert()`, config is `null`' },
    ],
    answer: 'C',
    explanation: '`setInterval` is part of the browser API. Once started, it will continue to run until it is explicitly cleared with `clearInterval()`. Setting the object that held its ID to `null` does not stop the interval.'
  },
  {
    id: 115,
    question: 'Which method(s) will return the value `\'Hello world!\'`?',
    code: `const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello world!');

//1
myMap.get('greeting');
//2
myMap.get(myFunc);
//3
myMap.get(() => 'greeting');`,
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '2' },
      { letter: 'C', text: '2 and 3' },
      { letter: 'D', text: 'All of them' },
    ],
    answer: 'B',
    explanation: 'Map keys are based on reference for objects. `myFunc` is the exact same function object used as the key. Option 3 creates a new, different function object.'
  },
  {
    id: 116,
    question: "What's the output?",
    code: `const person = {
  name: 'Lydia',
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person);
changeAgeAndName();

console.log(person);`,
    options: [
      { letter: 'A', text: '`{name: "Sarah", age: 22}`' },
      { letter: 'B', text: '`{name: "Sarah", age: 23}`' },
      { letter: 'C', text: '`{name: "Lydia", age: 22}`' },
      { letter: 'D', text: '`{name: "Lydia", age: 23}`' },
    ],
    answer: 'C',
    explanation: '`changeAge(person)` modifies the original `person` object. `changeAgeAndName()` is called without arguments, so it operates on a new object created from its default parameter, leaving the original `person` object untouched.'
  },
  {
    id: 117,
    question: "Which of the following options will return `6`?",
    code: `function sumValues(x, y, z) {
  return x + y + z;
}`,
    options: [
      { letter: 'A', text: '`sumValues([...1, 2, 3])`' },
      { letter: 'B', text: '`sumValues([...[1, 2, 3]])`' },
      { letter: 'C', text: '`sumValues(...[1, 2, 3])`' },
      { letter: 'D', text: '`sumValues([1, 2, 3])`' },
    ],
    answer: 'C',
    explanation: 'The spread syntax `...` used in a function call "spreads" the elements of an array into individual arguments for the function.'
  },
  {
    id: 118,
    question: "What's the output?",
    code: `let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);`,
    options: [
      { letter: 'A', text: '`🤠`' },
      { letter: 'B', text: '`🥰`' },
      { letter: 'C', text: '`SyntaxError`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: 'The expression `(num += 1)` is evaluated first. It increments `num` to `2` and returns the new value. So, `list[2]` is accessed, which is the "🥰" emoji.'
  },
  {
    id: 119,
    question: "What's the output?",
    code: `const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());`,
    options: [
      { letter: 'A', text: '`undefined` `undefined` `undefined` `undefined`' },
      { letter: 'B', text: '`Mara` `undefined` `Lydia Hallie` `ReferenceError`' },
      { letter: 'C', text: '`Mara` `null` `Lydia Hallie` `null`' },
      { letter: 'D', text: '`null` `ReferenceError` `null` `ReferenceError`' },
    ],
    answer: 'B',
    explanation: 'Optional chaining `?.` short-circuits and returns `undefined` if the value on the left is `null` or `undefined`. The variable `member` is not defined, which throws a `ReferenceError`.'
  },
  {
    id: 120,
    question: "What's the output?",
    code: `const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(\`We don't have to buy bananas!\`);
}`,
    options: [
      { letter: 'A', text: 'We have to buy bananas!' },
      { letter: 'B', text: 'We don\'t have to buy bananas!' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`1`' },
    ],
    answer: 'B',
    explanation: '`groceries.indexOf("banana")` returns `0`. The number `0` is a falsy value, so the `else` block is executed.'
  },
  {
    id: 121,
    question: "What's the output?",
    code: `const config = {
  languages: [],
  set language(lang) {
    this.languages.push(lang);
  },
};

console.log(config.language);`,
    options: [
      { letter: 'A', text: '`function language(lang) { this.languages.push(lang }`' },
      { letter: 'B', text: '`0`' },
      { letter: 'C', text: '`[]`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'D',
    explanation: "You can't get the value of a setter property directly. Attempting to access it results in `undefined`. Setters are only for assigning values."
  },
  {
    id: 122,
    question: "What's the output?",
    code: `const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');`,
    options: [
      { letter: 'A', text: '`false` `true`' },
      { letter: 'B', text: '`true` `false`' },
      { letter: 'C', text: '`false` `false`' },
      { letter: 'D', text: '`true` `true`' },
    ],
    answer: 'C',
    explanation: '`typeof name` is `"string"`. The logical NOT `!` operator has higher precedence than `===`. So, `! "string"` evaluates to `false`. Then `false === "object"` and `false === "string"` are both `false`.'
  },
  {
    id: 123,
    question: "What's the output?",
    code: `const add = x => y => z => {
  console.log(x, y, z);
  return x + y + z;
};

add(4)(5)(6);`,
    options: [
      { letter: 'A', text: '`4` `5` `6`' },
      { letter: 'B', text: '`6` `5` `4`' },
      { letter: 'C', text: '`4` `function` `function`' },
      { letter: 'D', text: '`undefined` `undefined` `6`' },
    ],
    answer: 'A',
    explanation: 'This is a curried function. Each call returns a new function that has access to the arguments of the outer functions via a closure.'
  },
  {
    id: 124,
    question: "What's the output?",
    code: `async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();`,
    options: [
      { letter: 'A', text: '`Promise {1}` `Promise {2}` `Promise {3}`' },
      { letter: 'B', text: '`Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`' },
      { letter: 'C', text: '`1` `2` `3`' },
      { letter: 'D', text: '`undefined` `undefined` `undefined`' },
    ],
    answer: 'C',
    explanation: 'The `for await...of` loop is used for async iterators. It automatically awaits each promise yielded by the async generator, so `item` becomes the resolved value of the promise.'
  },
  {
    id: 125,
    question: "What's the output?",
    code: `const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};

myFunc(1, 2, 3);`,
    options: [
      { letter: 'A', text: '`1` `2` `3`' },
      { letter: 'B', text: '`{1: 1}` `{2: 2}` `{3: 3}`' },
      { letter: 'C', text: '`{ 1: undefined }` `undefined` `undefined`' },
      { letter: 'D', text: '`undefined` `undefined` `undefined`' },
    ],
    answer: 'D',
    explanation: 'The function expects a single object as an argument to be destructured. Since it receives `1` (and `undefined`, `undefined`), it tries to destructure `undefined`, resulting in `x`, `y`, and `z` all being `undefined`.'
  },
  {
    id: 126,
    question: "What's the output?",
    code: `function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'mile-per-hour'
  }).format(speed);

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);

  return \`The driver drove \${formattedSpeed} and has to pay \${formattedAmount}\`;
}

console.log(getFine(130, 300))`,
    options: [
      { letter: 'A', text: 'The driver drove 130 and has to pay 300' },
      { letter: 'B', text: 'The driver drove 130 mph and has to pay $300.00' },
      { letter: 'C', text: 'The driver drove undefined and has to pay undefined' },
      { letter: 'D', text: 'The driver drove 130.00 and has to pay 300.00' },
    ],
    answer: 'B',
    explanation: 'The `Intl.NumberFormat` object enables language-sensitive number formatting, correctly formatting the numbers as a unit (mph) and a currency (USD).'
  },
  {
    id: 127,
    question: "What's the output?",
    code: `const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);`,
    options: [
      { letter: 'A', text: '`["👻", "🎃", "🕸"]`' },
      { letter: 'B', text: '`["👻", "🎃", "🕸", "💀"]`' },
      { letter: 'C', text: '`["👻", "🎃", "🕸", { item: "💀" }]`' },
      { letter: 'D', text: '`["👻", "🎃", "🕸", "[object Object]"]`' },
    ],
    answer: 'B',
    explanation: 'This is a destructuring assignment. The value of the `item` property from the right-hand object (`"💀"`) is assigned to the target on the left, `spookyItems[3]`. This adds a new element to the array.'
  },
  {
    id: 128,
    question: "What's the output?",
    code: `const name = 'Lydia Hallie';
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));`,
    options: [
      { letter: 'A', text: '`true` `false` `true` `false`' },
      { letter: 'B', text: '`true` `false` `false` `false`' },
      { letter: 'C', text: '`false` `false` `true` `false`' },
      { letter: 'D', text: '`false` `true` `false` `true`' },
    ],
    answer: 'C',
    explanation: '`Number.isNaN` only returns `true` if the value is of type Number and is `NaN`. The global `isNaN` first coerces the value to a number. `"Lydia Hallie"` coerces to `NaN`, so `isNaN` returns `true`.'
  },
  {
    id: 129,
    question: "What's the output?",
    code: `const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  const randomValue = 'Lydia Hallie';
}

getInfo();`,
    options: [
      { letter: 'A', text: '`"number"`' },
      { letter: 'B', text: '`"string"`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'D',
    explanation: 'The `randomValue` inside `getInfo` is in the temporal dead zone at the `console.log` line. The declaration is hoisted but not initialized, so it cannot be accessed.'
  },
  {
    id: 130,
    question: "What's the output?",
    code: `const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(\`Oops didn't work\`);
  } finally {
    console.log('Oh finally!');
  }
})();`,
    options: [
      { letter: 'A', text: '`Woah some cool data`' },
      { letter: 'B', text: '`Oh finally!`' },
      { letter: 'C', text: '`Woah some cool data` `Oh finally!`' },
      { letter: 'D', text: '`Oops didn\'t work` `Oh finally!`' },
    ],
    answer: 'C',
    explanation: 'The promise resolves successfully, so the `try` block logs the resolved value. The `catch` block is skipped. The `finally` block always executes, regardless of whether there was an error.'
  },
  {
    id: 131,
    question: "What's the output?",
    code: `const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));`,
    options: [
      { letter: 'A', text: '`[\'🥑\', [\'✨\', \'✨\', [\'🍕\', \'🍕\']]]`' },
      { letter: 'B', text: '`[\'🥑\', \'✨\', \'✨\', [\'🍕\', \'🍕\']]`' },
      { letter: 'C', text: '`[\'🥑\', [\'✨\', \'✨\', \'🍕\', \'🍕\']]`' },
      { letter: 'D', text: '`[\'🥑\', \'✨\', \'✨\', \'🍕\', \'🍕\']`' },
    ],
    answer: 'B',
    explanation: 'The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. With a depth of `1`, it only flattens the first level of arrays.'
  },
  {
    id: 132,
    question: "What's the output?",
    code: `class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);`,
    options: [
      { letter: 'A', text: '`0`' },
      { letter: 'B', text: '`1`' },
      { letter: 'C', text: '`2`' },
      { letter: 'D', text: '`3`' },
    ],
    answer: 'D',
    explanation: '`counterTwo` is assigned a reference to the same object as `counterOne`. Both variables point to the same instance, so changes made through one variable are reflected in the other. The count is incremented three times in total.'
  },
  {
    id: 133,
    question: "What's the output?",
    code: `const myPromise = Promise.resolve(Promise.resolve('Promise'));

function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0);
  myPromise.then(res => res).then(res => console.log(\`\${res} 1!\`));
  console.log('Last line 1!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(\`\${res} 2!\`)
  setTimeout(() => console.log('Timeout 2!'), 0);
  console.log('Last line 2!');
}

funcOne();
funcTwo();`,
    options: [
      { letter: 'A', text: '`Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!`' },
      { letter: 'B', text: '`Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! `' },
      { letter: 'C', text: '`Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!`' },
      { letter: 'D', text: '`Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!`' },
    ],
    answer: 'C',
    explanation: 'Synchronous code runs first (`Last line 1!`). Then `funcTwo` awaits, logging `Promise 2!` and `Last line 2!`. Microtasks (promises) run next (`Promise 1!`). Macrotasks (`setTimeout`) run last (`Timeout 1!`, `Timeout 2!`).'
  },
  {
    id: 134,
    question: 'How can we invoke `sum` in `sum.js` from `index.js`?',
    code: `// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from './sum';`,
    options: [
      { letter: 'A', text: '`sum(4)`' },
      { letter: 'B', text: '`sum.sum(4)`' },
      { letter: 'C', text: '`sum.default(4)`' },
      { letter: 'D', text: 'Default exports aren\'t imported with `*`' },
    ],
    answer: 'C',
    explanation: 'When using `import * as name`, the default export is placed on the `default` property of the created namespace object.'
  },
  {
    id: 135,
    question: "What's the output?",
    code: `const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
};

const person = new Proxy({}, handler);

person.name = 'Lydia';
person.name;`,
    options: [
      { letter: 'A', text: '`Added a new property!`' },
      { letter: 'B', text: '`Accessed a property!`' },
      { letter: 'C', text: '`Added a new property!` `Accessed a property!`' },
      { letter: 'D', text: 'Nothing gets logged' },
    ],
    answer: 'C',
    explanation: 'A `Proxy` allows you to intercept operations. The `set` trap is called when a property is set, and the `get` trap is called when a property is accessed.'
  },
  {
    id: 136,
    question: 'Which of the following will modify the `person` object?',
    code: `const person = { name: 'Lydia Hallie' };

Object.seal(person);`,
    options: [
      { letter: 'A', text: '`person.name = "Evan Bacon"`' },
      { letter: 'B', text: '`person.age = 21`' },
      { letter: 'C', text: '`delete person.name`' },
      { letter: 'D', text: '`Object.assign(person, { age: 21 })`' },
    ],
    answer: 'A',
    explanation: '`Object.seal()` prevents adding new properties and deleting existing ones, but it still allows the values of existing properties to be changed.'
  },
  {
    id: 137,
    question: 'Which of the following will modify the `person` object?',
    code: `const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);`,
    options: [
      { letter: 'A', text: '`person.name = "Evan Bacon"`' },
      { letter: 'B', text: '`delete person.address`' },
      { letter: 'C', text: '`person.address.street = "101 Main St"`' },
      { letter: 'D', text: '`person.pet = { name: "Mara" }`' },
    ],
    answer: 'C',
    explanation: '`Object.freeze()` performs a shallow freeze. It makes the `person` object immutable, but not the nested `address` object. You can still modify properties of the nested object.'
  },
  {
    id: 138,
    question: "What's the output?",
    code: `const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);`,
    options: [
      { letter: 'A', text: '`2` `4` and `3` `6`' },
      { letter: 'B', text: '`2` `NaN` and `3` `NaN`' },
      { letter: 'C', text: '`2` `Error` and `3` `6`' },
      { letter: 'D', text: '`2` `4` and `3` `Error`' },
    ],
    answer: 'A',
    explanation: 'Default parameters are evaluated when the function is called. In the first call, `num` is 2, so `value` is `add(2)`. In the second call, `num` is 3, so `value` is `add(3)`.'
  },
  {
    id: 139,
    question: "What's the output?",
    code: `class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)`,
    options: [
      { letter: 'A', text: '`10`' },
      { letter: 'B', text: '`11`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'D',
    explanation: 'Private class fields (using `#`) are only accessible from within the class. Attempting to access them from outside the class results in a `SyntaxError`.'
  },
  {
    id: 140,
    question: "What's missing to make the generator yield all members?",
    code: `const teams = [
  { name: 'Team 1', members: ['Paul', 'Lisa'] },
  { name: 'Team 2', members: ['Laura', 'Tim'] },
];

function* getMembers(members) {
  for (let i = 0; i < members.length; i++) {
    yield members[i];
  }
}

function* getTeams(teams) {
  for (let i = 0; i < teams.length; i++) {
    // ✨ SOMETHING IS MISSING HERE ✨
    yield* getMembers(teams[i].members);
  }
}

const obj = getTeams(teams);
console.log(obj.next().value); // "Paul"
console.log(obj.next().value); // "Lisa"`,
    options: [
      { letter: 'A', text: '`yield getMembers(teams[i].members)`' },
      { letter: 'B', text: '`yield* getMembers(teams[i].members)`' },
      { letter: 'C', text: '`return getMembers(teams[i].members)`' },
      { letter: 'D', text: '`return yield getMembers(teams[i].members)`' },
    ],
    answer: 'B',
    explanation: 'The `yield*` expression is used to delegate to another generator or iterable object. It iterates over the operand and yields each value returned by it.'
  },
  {
    id: 141,
    question: "What's the output?",
    code: `const person = {
  name: 'Lydia Hallie',
  hobbies: ['coding'],
};

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby('running', []);
addHobby('dancing');
addHobby('baking', person.hobbies);

console.log(person.hobbies);`,
    options: [
      { letter: 'A', text: '`["coding"]`' },
      { letter: 'B', text: '`["coding", "dancing"]`' },
      { letter: 'C', text: '`["coding", "dancing", "baking"]`' },
      { letter: 'D', text: '`["coding", "running", "dancing", "baking"]`' },
    ],
    answer: 'C',
    explanation: 'The call with an empty array does not affect `person.hobbies`. The other two calls use the default parameter, which is a reference to `person.hobbies`, and therefore modify it.'
  },
  {
    id: 142,
    question: "What's the output?",
    code: `class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();`,
    options: [
      { letter: 'A', text: '`I\'m pink. 🌸`' },
      { letter: 'B', text: '`I\'m pink. 🌸` `I\'m a bird. 🦢`' },
      { letter: 'C', text: '`I\'m a bird. 🦢` `I\'m pink. 🌸`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: 'The child constructor runs first, logging "I\'m pink. 🌸". Then `super()` is called, which executes the parent constructor, logging "I\'m a bird. 🦢". Note that `super()` must be called before `this` can be used.'
  },
  {
    id: 143,
    question: "Which of the options result(s) in an error?",
    code: `const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;`,
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '1 and 2' },
      { letter: 'C', text: '3 and 4' },
      { letter: 'D', text: '3' },
    ],
    answer: 'D',
    explanation: '`const` prevents reassignment of the variable. Options 1, 2, and 4 mutate the array, but do not reassign the `emojis` variable itself. Option 3 attempts to assign a new array to `emojis`, which will throw a `TypeError`.'
  },
  {
    id: 144,
    question: "What do we need to add to the `person` object to make it iterable?",
    code: `const person = {
  name: "Lydia Hallie",
  age: 21,
  *[Symbol.iterator]() { yield* Object.values(this) }
}

console.log([...person]); // ["Lydia Hallie", 21]`,
    options: [
      { letter: 'A', text: 'Nothing, objects are iterable by default' },
      { letter: 'B', text: '`*[Symbol.iterator]() { for (let x in this) yield* this[x] }`' },
      { letter: 'C', text: '`*[Symbol.iterator]() { yield* Object.values(this) }`' },
      { letter: 'D', text: '`*[Symbol.iterator]() { for (let x in this) yield this }`' },
    ],
    answer: 'C',
    explanation: 'To make an object iterable, you must implement the iterator protocol using the `[Symbol.iterator]` key. This generator function yields the values of the object, making it spreadable.'
  },
  {
    id: 145,
    question: "What's the output?",
    code: `let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count)`,
    options: [
      { letter: 'A', text: '1' },
      { letter: 'B', text: '2' },
      { letter: 'C', text: '3' },
      { letter: 'D', text: '4' },
    ],
    answer: 'C',
    explanation: 'The `if (num)` condition checks if `num` is truthy. The number `0` is falsy, so the count is only incremented for the numbers 1, 2, and 3.'
  },
  {
    id: 146,
    question: "What's the output?",
    code: `function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']])
getFruit()
getFruit([['🍍'], ['🍊', '🍌']])`,
    options: [
      { letter: 'A', text: '`null`, `undefined`, 🍌' },
      { letter: 'B', text: '`[]`, `null`, 🍌' },
      { letter: 'C', text: '`[]`, `[]`, 🍌' },
      { letter: 'D', text: '`undefined`, `undefined`, 🍌' },
    ],
    answer: 'D',
    explanation: 'Optional chaining `?.` prevents errors when accessing properties of `null` or `undefined` values, returning `undefined` instead. The first and second calls result in `undefined`, while the third successfully accesses the element.'
  },
  {
    id: 147,
    question: "What's the output?",
    code: `class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)`,
    options: [
      { letter: 'A', text: '`0`' },
      { letter: 'B', text: '`1`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'A',
    explanation: '`new Calc().increase()` creates a second, separate instance of `Calc`, increments its count, and then the instance is discarded. This does not affect the `calc` instance, whose count remains `0`.'
  },
  {
    id: 148,
    question: "What's the output?",
    code: `const user = {
	email: "e@mail.com",
	password: "123"
}

const { password: P } = user;
const { password: p } = user;

console.log(P, p);`,
    options: [
      { letter: 'A', text: '`"123" "123"`' },
      { letter: 'B', text: '`undefined undefined`' },
      { letter: 'C', text: '`{ password: "123" } { password: "123" }`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'A',
    explanation: 'Variable names are case-sensitive. This code destructures the `password` property from `user` into two different new variables, `P` and `p`, both of which get the value `"123"`.'
  },
  {
    id: 149,
    question: "What's the output?",
    code: `const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)`,
    options: [
      { letter: 'A', text: '`[\'🍌\', \'🍊\', \'🍎\']`' },
      { letter: 'B', text: '`[\'🍊\', \'🍎\']`' },
      { letter: 'C', text: '`[\'🍇\', \'🍊\', \'🍎\']`' },
      { letter: 'D', text: '`[\'🍇\', \'🍌\', \'🍊\', \'🍎\']`' },
    ],
    answer: 'C',
    explanation: '`slice` returns a new array and does not modify the original. `splice` modifies the original array by removing the banana. `unshift` modifies the array by adding a grape to the beginning.'
  },
  {
    id: 150,
    question: "What's the output?",
    code: `const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])`,
    options: [
      { letter: 'A', text: '`{ emoji: "🐶", name: "Mara" }`' },
      { letter: 'B', text: '`{ emoji: "🐈", name: "Sara" }`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: 'Object keys are converted to strings. Since `dog` and `cat` are objects, they both convert to the same key `"[object Object]"`. The second assignment overwrites the first.'
  },
  {
    id: 151,
    question: "What's the output?",
    code: `const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)`,
    options: [
      { letter: 'A', text: '`my@email.com`' },
      { letter: 'B', text: '`new@email.com`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'A',
    explanation: 'Arrow functions do not have their own `this` binding. `this` refers to the scope where the function was defined, which is the global object in this case. It does not update the `email` property on the `user` object.'
  },
  {
    id: 152,
    question: "What's the output?",
    code: `const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))`,
    options: [
      { letter: 'A', text: '`[[\'First\', \'Second\'], [\'Fourth\']]`' },
      { letter: 'B', text: '`[[\'First\', \'Second\'], [\'Third\', \'Fourth\']]`' },
      { letter: 'C', text: '`[[\'First\', \'Second\']]`' },
      { letter: 'D', text: '`\'Third\'`' },
    ],
    answer: 'D',
    explanation: '`Promise.all` rejects as soon as one of the promises in the iterable rejects. `promise3` rejects, causing the second `Promise.all` to reject, which in turn causes the entire `async` function to reject. The error is caught by the `.catch` block.'
  },
  {
    id: 153,
    question: 'What should the value of `method` be?',
    code: `const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = "fromEntries"
Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }`,
    options: [
      { letter: 'A', text: '`entries`' },
      { letter: 'B', text: '`values`' },
      { letter: 'C', text: '`fromEntries`' },
      { letter: 'D', text: '`forEach`' },
    ],
    answer: 'C',
    explanation: '`Object.fromEntries()` transforms a list of key-value pairs into an object. The `.map()` call creates exactly this list, e.g., `[["name", "Lydia"], ["age", 22]]`.'
  },
  {
    id: 154,
    question: "What's the output?",
    code: `const settings = {
  volume: 0,
  duration: 0,
};

const volume = settings.volume || 10;
const duration = settings.duration ?? 10;

console.log(volume, duration);`,
    options: [
      { letter: 'A', text: '`0 0`' },
      { letter: 'B', text: '`0 10`' },
      { letter: 'C', text: '`10 0`' },
      { letter: 'D', text: '`10 10`' },
    ],
    answer: 'C',
    explanation: "The `||` operator treats `0` as falsy, so `volume` becomes the fallback `10`. The `??` operator only falls back for `null` or `undefined`; since `duration` is `0`, it stays `0`."
  },
  {
    id: 155,
    question: "What's the output?",
    code: `async function foo() {
  try {
    return await Promise.reject('Error');
  } catch (e) {
    return 'Caught';
  }
}

foo().then(console.log);`,
    options: [
      { letter: 'A', text: '`Error`' },
      { letter: 'B', text: '`"Error"`' },
      { letter: 'C', text: '`"Caught"`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'C',
    explanation: "The rejected promise inside `await` throws within the `try` block and is caught by the `catch` clause. The function then returns `'Caught'`, so the resolved value logged by `.then` is `'Caught'`."
  },
  {
    id: 156,
    question: "What's the output?",
    code: `console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');`,
    options: [
      { letter: 'A', text: '`A` `B` `C` `D`' },
      { letter: 'B', text: '`A` `D` `B` `C`' },
      { letter: 'C', text: '`A` `D` `C` `B`' },
      { letter: 'D', text: '`A` `C` `D` `B`' },
    ],
    answer: 'C',
    explanation: 'This demonstrates the event loop. Synchronous code (`A`, `D`) runs first. Then, microtasks (Promise `.then` callbacks) run (`C`). Finally, macrotasks (`setTimeout` callbacks), even with a 0ms delay, run last (`B`).'
  },
  {
    id: 157,
    question: "What's the output?",
    code: `const user = { name: '' };

user.name ||= 'Sarah';
user.age ??= 21;

console.log(user.name, user.age);`,
    options: [
      { letter: 'A', text: '`""` `21`' },
      { letter: 'B', text: '`"Sarah"` `21`' },
      { letter: 'C', text: '`"Sarah"` `undefined`' },
      { letter: 'D', text: '`""` `undefined`' },
    ],
    answer: 'B',
    explanation: 'The logical OR assignment (`||=`) assigns the right-hand value only if the left-hand value is falsy. `""` is falsy, so `user.name` becomes "Sarah". The nullish coalescing assignment (`??=`) assigns only if the left-hand value is `null` or `undefined`. `user.age` is `undefined`, so it becomes `21`.'
  },
  {
    id: 158,
    question: "What's the output?",
    code: `console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);`,
    options: [
      { letter: 'A', text: '`true` `true`' },
      { letter: 'B', text: '`false` `false`' },
      { letter: 'C', text: '`true` `false`' },
      { letter: 'D', text: '`false` `true`' },
    ],
    answer: 'C',
    explanation: '`Object.is()` is similar to the strict equality operator `===`, but it has a special case for `NaN`. It is the only method in JavaScript that treats `NaN` as equal to itself. `NaN === NaN` is always `false`.'
  },
  {
    id: 159,
    question: "What's the output?",
    code: `let name = 'Lydia';
name[0] = 'W';
console.log(name);`,
    options: [
      { letter: 'A', text: '`"Wydia"`' },
      { letter: 'B', text: '`"Lydia"`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: '`"W"`' },
    ],
    answer: 'B',
    explanation: 'Strings are immutable in JavaScript. You cannot change a character within a string by index. The assignment `name[0] = "W"` fails silently in non-strict mode.'
  },
  {
    id: 160,
    question: "What's the output?",
    code: `const arr = ['a', 'b', 'c', 'd'];
console.log(arr.at(-1));`,
    options: [
      { letter: 'A', text: '`a`' },
      { letter: 'B', text: '`d`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'The `at()` method (ES2022) allows you to access array elements using relative indexing. A negative index like `-1` accesses elements from the end of the array.'
  },
  {
    id: 161,
    question: "What's the output?",
    code: `Promise.resolve('Success')
  .finally(() => {
    console.log('Finally!');
    return 'Ignored Value';
  })
  .then(res => {
    console.log(res);
  });`,
    options: [
      { letter: 'A', text: '`Finally!` then `Ignored Value`' },
      { letter: 'B', text: '`Ignored Value` then `Finally!`' },
      { letter: 'C', text: '`Finally!` then `Success`' },
      { letter: 'D', text: '`Success` then `Finally!`' },
    ],
    answer: 'C',
    explanation: 'The `.finally()` callback is always executed when the promise settles. However, its return value is ignored, and the original resolved value (`"Success"`) is passed through to the next `.then()` block.'
  },
  {
    id: 162,
    question: "What's the output?",
    code: `const arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr);`,
    options: [
      { letter: 'A', text: '`[1, 2, 3]`' },
      { letter: 'B', text: '`[3, 4, 5]`' },
      { letter: 'C', text: '`[1, 2]`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'C',
    explanation: 'Setting the `length` property of an array to a value smaller than its current length will truncate the array, permanently removing elements from the end.'
  },
  {
    id: 163,
    question: "What happens when this code is executed?",
    code: `try {
  const map = new WeakMap();
  map.set('key', 'value');
} catch (err) {
  console.log(err.name);
}`,
    options: [
      { letter: 'A', text: '`SyntaxError`' },
      { letter: 'B', text: '`ReferenceError`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: 'No error is thrown' },
    ],
    answer: 'C',
    explanation: '`WeakMap` keys must be objects. Attempting to use a primitive value (like the string `"key"`) as a key will result in a `TypeError`.'
  },
  {
    id: 164,
    question: "What's the output?",
    code: `const a = function() {};
const b = () => {};
function c() {};

console.log(a.name, b.name, c.name);`,
    options: [
      { letter: 'A', text: '`"" "" "c"`' },
      { letter: 'B', text: '`"a" "b" "c"`' },
      { letter: 'C', text: '`"a" "" "c"`' },
      { letter: 'D', text: '`undefined undefined "c"`' },
    ],
    answer: 'B',
    explanation: 'All functions have a `name` property. For function expressions and arrow functions, the name is inferred from the variable they are assigned to. For function declarations, it is the name of the function.'
  },
  {
    id: 165,
    question: "What is `globalThis`?",
    options: [
      { letter: 'A', text: 'A variable that is only available in Node.js.' },
      { letter: 'B', text: 'An alias for the `this` keyword in the current scope.' },
      { letter: 'C', text: 'A standard property to access the global object across all JavaScript environments.' },
      { letter: 'D', text: 'A new way to declare global variables that cannot be overwritten.' },
    ],
    answer: 'C',
    explanation: '`globalThis` provides a standard way of accessing the global `this` object across different environments, such as `window` in browsers, `global` in Node.js, and `self` in web workers.'
  },
  {
    id: 166,
    question: "What's the output?",
    code: `console.log([] == ![]);`,
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'A',
    explanation: 'This is a classic coercion "gotcha". First, `![]` is evaluated. An array is a truthy value, so `![]` becomes `false`. The expression is now `[] == false`. When comparing an object to a boolean with `==`, both are converted to numbers. `Number([])` is `0`, and `Number(false)` is `0`. The comparison becomes `0 == 0`, which is `true`.'
  },
  {
    id: 167,
    question: "What's the output?",
    code: `const user = Object.create(null);
user.name = 'Lydia';
console.log(user.hasOwnProperty('name'));`,
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'C',
    explanation: '`Object.create(null)` creates an object that does not inherit from `Object.prototype`. Therefore, it does not have any built-in methods like `hasOwnProperty`, `toString`, etc. Calling a non-existent method results in a `TypeError`.'
  },
  {
    id: 168,
    question: "What's the output of this `Promise.allSettled` call?",
    code: `const p1 = Promise.resolve('A');
const p2 = Promise.reject('B');
const p3 = Promise.resolve('C');

Promise.allSettled([p1, p2, p3])
  .then(res => console.log(res));`,
    options: [
      { letter: 'A', text: 'It will trigger the `.catch` block with the reason `"B"`' },
      { letter: 'B', text: '`["A", "C"]`' },
      { letter: 'C', text: '`[{status: "fulfilled", value: "A"}, {status: "rejected", reason: "B"}, {status: "fulfilled", value: "C"}]`' },
      { letter: 'D', text: '`[{value: "A"}, {reason: "B"}, {value: "C"}]`' },
    ],
    answer: 'C',
    explanation: '`Promise.allSettled` waits for all promises to settle (either fulfilled or rejected) and returns an array of objects describing the outcome of each promise. It does not short-circuit on rejection like `Promise.all`.'
  },
  {
    id: 169,
    question: "What does this function's `length` property return?",
    code: `function calculate(a, b, c = 10, ...d) {
  // ...
}
console.log(calculate.length);`,
    options: [
      { letter: 'A', text: '`4`' },
      { letter: 'B', text: '`3`' },
      { letter: 'C', text: '`2`' },
      { letter: 'D', text: '`5`' },
    ],
    answer: 'C',
    explanation: 'The `length` property of a function indicates the number of required parameters. It only counts parameters before the first one with a default value and does not include rest parameters. Here, only `a` and `b` are counted.'
  },
  {
    id: 170,
    question: "What's the output?",
    code: `const original = { data: { user: { name: 'Lydia' } } };
const clone = structuredClone(original);

clone.data.user.name = 'Sarah';

console.log(original.data.user.name);`,
    options: [
      { letter: 'A', text: '`"Lydia"`' },
      { letter: 'B', text: '`"Sarah"`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'A',
    explanation: '`structuredClone()` is a built-in function for creating a deep clone of an object. Modifying the deeply nested `name` property on the `clone` does not affect the `original` object because they are completely separate.'
  },
  {
    id: 171,
    question: "What's the output?",
    code: `console.log(10n === 10);
console.log(10n == 10);`,
    options: [
      { letter: 'A', text: '`true` `true`' },
      { letter: 'B', text: '`false` `false`' },
      { letter: 'C', text: '`true` `false`' },
      { letter: 'D', text: '`false` `true`' },
    ],
    answer: 'D',
    explanation: '`BigInt` and `Number` are two different types. The strict equality operator (`===`) returns `false` because the types are different. The loose equality operator (`==`) returns `true` because it considers them to have the same numeric value.'
  },
  {
    id: 172,
    question: "What's the output?",
    code: `let options = { delay: 0, retries: 0 };
let config = { retries: 5, mode: 'prod' };

options = { ...options, ...config };
console.log(options);`,
    options: [
      { letter: 'A', text: '`{ delay: 0, retries: 0, mode: "prod" }`' },
      { letter: 'B', text: '`{ delay: 0, retries: 5, mode: "prod" }`' },
      { letter: 'C', text: '`{ retries: 5, mode: "prod" }`' },
      { letter: 'D', text: '`{ delay: 0, retries: 0, config: { ... } }`' },
    ],
    answer: 'B',
    explanation: 'When using the spread syntax to merge objects, properties from later objects in the sequence overwrite properties from earlier ones. Here, `config.retries` (which is 5) overwrites `options.retries` (which was 0).'
  },
  {
    id: 173,
    question: "Which of these is a valid way to create a private method in a JavaScript class?",
    options: [
      { letter: 'A', text: '`_myMethod() { ... }`' },
      { letter: 'B', text: '`#myMethod() { ... }`' },
      { letter: 'C', text: '`private myMethod() { ... }`' },
      { letter: 'D', text: '`__myMethod() { ... }`' },
    ],
    answer: 'B',
    explanation: 'The `#` prefix is the official syntax for creating private class fields and methods in JavaScript. The underscore (`_`) is a convention to signal "private" but does not enforce it.'
  },
  {
    id: 174,
    question: "What's the output?",
    code: `const data = ['Lydia', 21, true];
const [name, ...other] = data;

console.log(other);`,
    options: [
      { letter: 'A', text: '`"Lydia"`' },
      { letter: 'B', text: '`[21, true]`' },
      { letter: 'C', text: '`[21]`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'This is array destructuring with the rest pattern. `name` is assigned the first element. The rest parameter `...other` collects all remaining elements into a new array.'
  },
  {
    id: 175,
    question: "What is the primary advantage of using dynamic `import()`?",
    options: [
      { letter: 'A', text: 'It enforces stricter type checking than static imports.' },
      { letter: 'B', text: 'It allows you to load JavaScript modules on-demand, improving performance.' },
      { letter: 'C', text: 'It is the only way to import CommonJS modules into an ES module.' },
      { letter: 'D', text: 'It automatically runs the imported module in a Web Worker.' },
    ],
    answer: 'B',
    explanation: 'Dynamic `import()` returns a promise and allows you to load modules asynchronously, as needed. This is the basis for code-splitting, which can significantly improve the initial load time of web applications.'
  },
  {
    id: 176,
    question: "What's the output?",
    code: `function check() {
  return this === undefined;
}
console.log(check());`,
    options: [
      { letter: 'A', text: '`true` (if in "use strict" mode)' },
      { letter: 'B', text: '`false` (always)' },
      { letter: 'C', text: '`true` (always)' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'A',
    explanation: 'In non-strict mode, a regular function call sets `this` to the global object (e.g., `window`), so the check would be `false`. However, in strict mode (which is default in ES modules), `this` is `undefined` for a simple function call.'
  },
  {
    id: 177,
    question: "What's the output?",
    code: `const numbers = new Set([1, 2, 2, 3]);
const mapped = [...numbers].map(x => x * 2);

console.log(mapped);`,
    options: [
      { letter: 'A', text: '`[2, 4, 4, 6]`' },
      { letter: 'B', text: '`[2, 4, 6]`' },
      { letter: 'C', text: '`{2, 4, 6}`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'First, a `Set` is created, which only stores unique values, resulting in `{1, 2, 3}`. The spread syntax `[...numbers]` converts the Set into an array `[1, 2, 3]`. The `map` function then operates on this array, returning `[2, 4, 6]`.'
  },
  {
    id: 178,
    question: "What does `??` the nullish coalescing operator do?",
    options: [
      { letter: 'A', text: 'It returns the right-hand side operand if the left-hand side is any falsy value.' },
      { letter: 'B', text: 'It returns the right-hand side operand only if the left-hand side is `null` or `undefined`.' },
      { letter: 'C', text: 'It is a shorthand for `Object.is(a, b)`.' },
      { letter: 'D', text: 'It throws an error if the left-hand side is not a number.' },
    ],
    answer: 'B',
    explanation: 'Unlike the logical OR (`||`) operator, the nullish coalescing operator (`??`) only provides the default value when the left-hand side is `null` or `undefined`. It treats other falsy values like `0`, `""`, and `false` as valid.'
  },
  {
    id: 179,
    question: "What's the output?",
    code: `const nums = [10, 20, 30];
const [a, b, c, d] = nums;
console.log(d);`,
    options: [
      { letter: 'A', text: '`30`' },
      { letter: 'B', text: '`null`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'C',
    explanation: 'This is array destructuring. If you try to destructure more elements than are available in the array, the variables for the non-existent elements are assigned the value `undefined`.'
  },
  {
    id: 180,
    question: "What will be logged to the console?",
    code: `const obj1 = { a: 1 };
const obj2 = { a: 1 };
const set = new Set([obj1, obj2]);

console.log(set.size);`,
    options: [
      { letter: 'A', text: '`1`' },
      { letter: 'B', text: '`2`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`0`' },
    ],
    answer: 'B',
    explanation: '`Set` checks for equality by reference for objects. `obj1` and `obj2` are two different objects in memory, even though they have the same content. Therefore, the Set stores both of them, and its size is 2.'
  },
  {
    id: 181,
    question: "What's the output?",
    code: `const result = '25' - 5 + '5';
console.log(result);`,
    options: [
      { letter: 'A', text: '`205`' },
      { letter: 'B', text: '`"205"`' },
      { letter: 'C', text: '`25`' },
      { letter: 'D', text: '`"25"`' },
    ],
    answer: 'B',
    explanation: 'JavaScript evaluates from left to right. The `-` operator triggers numeric conversion, so `"25" - 5` becomes `20`. Then, the `+` operator sees a number (`20`) and a string (`"5"`), triggering string concatenation. The result is `"205"`.'
  },
  {
    id: 182,
    question: "What's the output?",
    code: `const user = {
  name: 'Alex',
  getName() {
    return this.name;
  }
};
const unbound = user.getName;
console.log(unbound());`,
    options: [
      { letter: 'A', text: '`"Alex"`' },
      { letter: 'B', text: '`undefined`' },
      { letter: 'C', text: '`null`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'B',
    explanation: 'When you assign a method to a variable (`unbound = user.getName`), you lose the `this` context. Calling `unbound()` is like a simple function call, where `this` will be the global object (or `undefined` in strict mode), which does not have a `name` property.'
  },
  {
    id: 183,
    question: "What will `Promise.any()` resolve with?",
    code: `const p1 = new Promise((res, rej) => setTimeout(rej, 100, 'Fail 1'));
const p2 = new Promise((res) => setTimeout(res, 200, 'Success'));
const p3 = new Promise((res, rej) => setTimeout(rej, 300, 'Fail 2'));

Promise.any([p1, p2, p3])
  .then(val => console.log(val))
  .catch(err => console.log(err));`,
    options: [
      { letter: 'A', text: '`"Fail 1"`' },
      { letter: 'B', text: '`"Success"`' },
      { letter: 'C', text: 'It will trigger the `.catch` block immediately.' },
      { letter: 'D', text: 'It will trigger the `.catch` block with an `AggregateError`.' },
    ],
    answer: 'B',
    explanation: '`Promise.any()` resolves with the value of the *first* promise in the iterable to be fulfilled. It ignores all rejections unless all of the promises reject.'
  },
  {
    id: 184,
    question: "What's the output?",
    code: `const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

console.log([a, b, c].flat());`,
    options: [
      { letter: 'A', text: '`[[1, 2], [3, 4], [5, 6]]`' },
      { letter: 'B', text: '`[1, 2, 3, 4, 5, 6]`' },
      { letter: 'C', text: '`[1, 2, [3, 4], [5, 6]]`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'First, `[a, b, c]` creates a nested array: `[[1, 2], [3, 4], [5, 6]]`. The `.flat()` method, with a default depth of 1, flattens this nested array by one level, resulting in a single, non-nested array.'
  },
  {
    id: 185,
    question: "What's the output?",
    code: `for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}`,
    options: [
      { letter: 'A', text: '`0` `1` `2`' },
      { letter: 'B', text: '`3` `3` `3`' },
      { letter: 'C', text: '`2` `2` `2`' },
      { letter: 'D', text: '`undefined` `undefined` `undefined`' },
    ],
    answer: 'B',
    explanation: 'The `var` keyword creates a function-scoped variable. By the time the `setTimeout` callbacks execute, the loop has already completed, and the final value of `i` is `3`. All three callbacks reference this same final value.'
  },
  {
    id: 186,
    question: "What's the difference between the `in` operator and `hasOwnProperty`?",
    options: [
      { letter: 'A', text: 'There is no difference; they are interchangeable.' },
      { letter: 'B', text: '`in` checks the prototype chain, while `hasOwnProperty` only checks the object\'s own properties.' },
      { letter: 'C', text: '`hasOwnProperty` checks the prototype chain, while `in` only checks the object\'s own properties.' },
      { letter: 'D', text: '`in` is for arrays, and `hasOwnProperty` is for plain objects.' },
    ],
    answer: 'B',
    explanation: 'The `in` operator returns `true` if a property exists anywhere on the object or its prototype chain. `Object.prototype.hasOwnProperty()` returns `true` only if the property is defined directly on the object itself.'
  },
  {
    id: 187,
    question: "What's the output?",
    code: `const nums = [1, 2, 3];
delete nums[1];
console.log(nums.length, nums);`,
    options: [
      { letter: 'A', text: '`2` `[1, 3]`' },
      { letter: 'B', text: '`3` `[1, undefined, 3]`' },
      { letter: 'C', text: '`3` `[1, empty, 3]`' },
      { letter: 'D', text: '`2` `[1, 2]`' },
    ],
    answer: 'C',
    explanation: 'The `delete` operator removes a property from an object (arrays are objects). It removes the element at index 1 but leaves an "empty slot" in its place. It does not change the array\'s length or re-index the other elements.'
  },
  {
    id: 188,
    question: "What's the output?",
    code: `console.log(typeof null);
console.log(typeof undefined);`,
    options: [
      { letter: 'A', text: '`"null"` `"undefined"`' },
      { letter: 'B', text: '`"object"` `"object"`' },
      { letter: 'C', text: '`"object"` `"undefined"`' },
      { letter: 'D', text: '`"null"` `"object"`' },
    ],
    answer: 'C',
    explanation: '`typeof undefined` correctly returns `"undefined"`. Due to a long-standing bug in the original JavaScript implementation that is now unfixable for backward compatibility reasons, `typeof null` returns `"object"`.'
  },
  {
    id: 189,
    question: "What's the output of the tagged template literal?",
    code: `function highlight(strings, ...values) {
  return strings[0] + values[0].toUpperCase() + strings[1];
}

const name = "Lydia";
const output = highlight\`My name is \${name}.\`;
console.log(output);`,
    options: [
      { letter: 'A', text: '`My name is LYDIA.`' },
      { letter: 'B', text: '`My name is Lydia.`' },
      { letter: 'C', text: '`My name is ${name}.`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'A',
    explanation: 'In a tagged template, the first argument is an array of the static string parts (`["My name is ", "."]`), and subsequent arguments are the interpolated values (`"Lydia"`). The function reconstructs the string, applying `.toUpperCase()` to the value.'
  },
  {
    id: 190,
    question: "What is the result of `0.1 + 0.2 === 0.3`?",
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
      { letter: 'C', text: '`true` only in modern browsers' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'B',
    explanation: 'This is a common issue with floating-point math in most programming languages. Due to how numbers are stored in binary, `0.1 + 0.2` results in a number extremely close to, but not exactly, `0.3` (it\'s `0.30000000000000004`), so the strict equality check fails.'
  },

  
  {
    id: 191,
    question: "What is the value of `num`?",
    code: `const num = 1_000_000;
console.log(num);`,
    options: [
      { letter: 'A', text: '`1000000`' },
      { letter: 'B', text: '`"1_000_000"`' },
      { letter: 'C', text: '`NaN`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'A',
    explanation: 'Numeric separators (`_`) are a language feature that allows developers to make large numbers more readable. The JavaScript engine ignores these separators when evaluating the number.'
  },
  {
    id: 192,
    question: "What's the output?",
    code: `const arr = Array.from({ length: 3 }, (_, i) => i * 2);
console.log(arr);`,
    options: [
      { letter: 'A', text: '`[undefined, undefined, undefined]`' },
      { letter: 'B', text: '`[0, 2, 4]`' },
      { letter: 'C', text: '`[0, 1, 2]`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: '`Array.from` can take a mapping function as its second argument. It iterates over the array-like object (`{ length: 3 }`), passing the value (which is `undefined` here, represented by `_`) and the index (`i`) to the map function. The return value of the map function is used to populate the new array.'
  },
  {
    id: 193,
    question: "What's the output?",
    code: `const handler = {
  deleteProperty: function(target, prop) {
    console.log(\`Deleted \${prop}\`);
    return delete target[prop];
  }
};

const user = new Proxy({ name: 'Lydia' }, handler);
delete user.name;`,
    options: [
      { letter: 'A', text: '`Deleted name`' },
      { letter: 'B', text: '`true`' },
      { letter: 'C', text: 'Nothing is logged' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'A',
    explanation: 'The `deleteProperty` trap on a `Proxy` object intercepts the `delete` operator. When `delete user.name` is called, the proxy\'s trap function is executed, which logs the message to the console before performing the actual deletion.'
  },
  {
    id: 194,
    question: "What are the results of these comparisons?",
    code: `console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);`,
    options: [
      { letter: 'A', text: '`false` `false` `false`' },
      { letter: 'B', text: '`false` `true` `true`' },
      { letter: 'C', text: '`false` `false` `true`' },
      { letter: 'D', text: '`true` `true` `true`' },
    ],
    answer: 'C',
    explanation: 'This is a famous coercion quirk. For relational comparisons (`>`, `<`, `>=`, `<=`), `null` is coerced to `0`. So `null >= 0` becomes `0 >= 0`, which is `true`. However, for equality checks (`==`, `!=`), `null` is only equal to `undefined` and itself, not `0`.'
  },
  {
    id: 195,
    question: "What's the output?",
    code: `const user = { getAdmin: true };
try {
  user.getAdmin?.();
} catch (e) {
  console.log(e.name);
}`,
    options: [
      { letter: 'A', text: '`undefined`' },
      { letter: 'B', text: '`ReferenceError`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: 'No output' },
    ],
    answer: 'C',
    explanation: 'Optional chaining (`?.`) only guards against the property access itself being `null` or `undefined`. It does not prevent errors if the property exists but is not of the correct type. Here, `user.getAdmin` exists and is `true` (a boolean), but you cannot invoke a boolean as a function, which throws a `TypeError`.'
  },
  {
    id: 196,
    question: "What happens after a generator function `return`s?",
    code: `function* gen() {
  yield 1;
  return 2;
  yield 3;
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());`,
    options: [
      { letter: 'A', text: '`{value: 1, done: false}` `{value: 2, done: true}` `{value: 3, done: false}`' },
      { letter: 'B', text: '`{value: 1, done: false}` `{value: 2, done: false}` `{value: 3, done: false}`' },
      { letter: 'C', text: '`{value: 1, done: false}` `{value: 2, done: true}` `{value: undefined, done: true}`' },
      { letter: 'D', text: '`{value: 1, done: false}` `{value: 2, done: true}` `Error`' },
    ],
    answer: 'C',
    explanation: 'When a `return` statement is encountered in a generator, it finishes the generator. The next call to `.next()` will return an object with the returned value and `done: true`. Any subsequent calls will return `{ value: undefined, done: true }` because the generator is already finished.'
  },
  {
    id: 197,
    question: "What's the output?",
    code: `class User {
  static [Symbol.hasInstance](instance) {
    return instance.hasOwnProperty('isUser');
  }
}

const person = { isUser: true };
console.log(person instanceof User);`,
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'A',
    explanation: 'The `instanceof` operator\'s behavior can be customized by defining the `Symbol.hasInstance` static method on a class. Here, the custom logic checks if the `instance` object has its own property named `isUser`, which it does.'
  },
  {
    id: 198,
    question: "What's the purpose of the `outer:` label?",
    code: `let count = 0;
outer:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outer;
    }
    count++;
  }
}
console.log(count);`,
    options: [
      { letter: 'A', text: 'It creates a comment.' },
      { letter: 'B', text: 'It allows the `break` statement to exit only the inner loop.' },
      { letter: 'C', text: 'It allows the `break` statement to exit the specific labeled outer loop.' },
      { letter: 'D', text: 'It is invalid syntax.' },
    ],
    answer: 'C',
    explanation: 'Labels provide an identifier that can be referred to by `break` or `continue` statements. `break outer;` allows you to break out of a nested loop structure entirely, not just the current inner loop. The loops stop when `i` is 1 and `j` is 1, so `count` will be 4 (0,0; 0,1; 0,2; 1,0).'
  },
  {
    id: 199,
    question: "What is the order of logs in the event loop?",
    code: `setTimeout(() => console.log('A: Macro'), 0);
Promise.resolve().then(() => console.log('B: Micro'));
queueMicrotask(() => console.log('C: Micro'));
console.log('D: Sync');`,
    options: [
      { letter: 'A', text: '`D` `A` `B` `C`' },
      { letter: 'B', text: '`D` `C` `B` `A`' },
      { letter: 'C', text: '`D` `A` `C` `B`' },
      { letter: 'D', text: '`A` `B` `C` `D`' },
    ],
    answer: 'B',
    explanation: 'The event loop prioritizes tasks. 1. Synchronous code runs first (`D`). 2. All available microtasks run to completion (`C` from `queueMicrotask` and `B` from the Promise). 3. One macrotask from the macrotask queue runs (`A` from `setTimeout`).'
  },
  {
    id: 200,
    question: "What does the `with` statement do?",
    code: `const user = { name: 'Lydia', age: 21 };
with (user) {
  console.log(name, age);
}`,
    options: [
      { letter: 'A', text: 'It creates a copy of the object with the specified properties.' },
      { letter: 'B', text: 'It is a modern way to handle promises.' },
      { letter: 'C', text: 'It extends the scope chain for a statement block, but is forbidden in strict mode.' },
      { letter: 'D', text: 'It safely checks for the existence of properties before accessing them.' },
    ],
    answer: 'C',
    explanation: 'The `with` statement adds the given object to the head of the scope chain for the code within its block. This allows you to access properties of the object without prefixing them. It is heavily discouraged and forbidden in strict mode and modules due to its performance and security implications.'
  },
  {
    id: 201,
    question: "What's the output?",
    code: `const obj = {
  get name() {
    console.log('getting name');
    return 'Lydia';
  }
};
const { name } = obj;`,
    options: [
      { letter: 'A', text: 'Nothing is logged.' },
      { letter: 'B', text: '`getting name` is logged.' },
      { letter: 'C', text: '`Lydia` is logged.' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'Destructuring an object property (`{ name } = obj`) is a form of property access. Because `name` is a getter property, the getter function is executed during the destructuring assignment, which logs the message to the console.'
  },
  {
    id: 202,
    question: "What's the output?",
    code: `console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);`,
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
      { letter: 'C', text: '`Error`' },
    ],
    answer: 'A',
    explanation: '`Number.MAX_SAFE_INTEGER` is the largest integer that can be safely and accurately represented. Any integer arithmetic beyond this point may lose precision. Both `Number.MAX_SAFE_INTEGER + 1` and `Number.MAX_SAFE_INTEGER + 2` evaluate to the same imprecise floating-point number (`9007199254740992`), so the comparison returns `true`.'
  },
  {
    id: 203,
    question: "What's the output?",
    code: `const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1);`,
    options: [
      { letter: 'A', text: '`[1, 2, 3]`' },
      { letter: 'B', text: '`[1, 2, 3, 4]`' },
      { letter: 'C', text: '`[4]`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'Arrays are objects, and objects are assigned by reference. `arr2` does not become a copy of `arr1`; instead, it becomes another reference to the *same* array in memory. Modifying the array through `arr2` is visible when accessing it through `arr1`.'
  },
  {
    id: 204,
    question: "How can you prevent an object from being modified in any way?",
    options: [
      { letter: 'A', text: '`Object.const(obj)`' },
      { letter: 'B', text: '`Object.seal(obj)`' },
      { letter: 'C', text: '`Object.freeze(obj)`' },
      { letter: 'D', text: '`Object.preventExtensions(obj)`' },
    ],
    answer: 'C',
    explanation: '`Object.freeze()` is the most restrictive. It prevents adding new properties, deleting existing properties, and changing the values of existing properties. `seal()` allows changing values, and `preventExtensions()` only prevents adding new properties.'
  },
  {
    id: 205,
    question: "What's the output?",
    code: `const x = 1;
function logX() {
  const x = 2;
  console.log(x);
}
logX();`,
    options: [
      { letter: 'A', text: '`1`' },
      { letter: 'B', text: '`2`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: 'This demonstrates lexical scoping and shadowing. The `x` declared inside `logX` is a new, separate variable that "shadows" the outer `x`. The `console.log(x)` inside the function refers to the inner `x`, which has a value of 2.'
  },
  {
    id: 206,
    question: "What's the output?",
    code: `const person = { name: 'Lydia' };
function sayHi() {
  return \`Hi, I am \${this.name}\`;
}
console.log(sayHi.apply(person));`,
    options: [
      { letter: 'A', text: '`Hi, I am Lydia`' },
      { letter: 'B', text: '`Hi, I am undefined`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: '`function`' },
    ],
    answer: 'A',
    explanation: 'The `apply()` method is similar to `call()`. It invokes a function with a specified `this` context. We are telling the `sayHi` function to use the `person` object as its `this` context, so `this.name` resolves to `"Lydia"`.'
  },
  {
    id: 207,
    question: "What will `JSON.stringify` do with a `BigInt`?",
    code: `const big = 12345678901234567890n;
try {
  JSON.stringify(big);
} catch (err) {
  console.log(err.name);
}`,
    options: [
      { letter: 'A', text: 'It returns a string like `"12345678901234567890n"`' },
      { letter: 'B', text: 'It returns a string without the "n": `"12345678901234567890"`' },
      { letter: 'C', text: 'It logs `TypeError`' },
      { letter: 'D', text: 'It returns `null`' },
    ],
    answer: 'C',
    explanation: 'By default, `BigInt` values cannot be serialized to JSON because there is no standard JSON representation for them. Attempting to do so throws a `TypeError`. You can provide a custom `toJSON` method or a replacer function to handle them.'
  },
  {
    id: 208,
    question: "What's the output?",
    code: `const numbers = [10, 20, 30, 40];
const [first, , third] = numbers;
console.log(first, third);`,
    options: [
      { letter: 'A', text: '`10 20`' },
      { letter: 'B', text: '`10 undefined`' },
      { letter: 'C', text: '`10 30`' },
      { letter: 'D', text: '`SyntaxError`' },
    ],
    answer: 'C',
    explanation: 'Array destructuring allows you to skip elements. The empty comma in `[first, , third]` effectively ignores the element at index 1 (`20`), assigning the element at index 0 to `first` and the element at index 2 to `third`.'
  },
  {
    id: 209,
    question: "What's the output?",
    code: `const a = { x: 1 };
const b = { x: 1 };

const map = new Map();
map.set(a, 'A');
map.set(b, 'B');

console.log(map.get(a));`,
    options: [
      { letter: 'A', text: '`"A"`' },
      { letter: 'B', text: '`"B"`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`{ x: 1 }`' },
    ],
    answer: 'A',
    explanation: '`Map` keys for objects are based on reference, not structure. `a` and `b` are two separate objects in memory. The map stores `a` with the value `"A"`. When we retrieve the value using the exact same object reference `a`, it correctly returns `"A"`.'
  },
  {
    id: 210,
    question: "What's the output?",
    code: `function Car() {}
const myCar = new Car();
console.log(myCar.constructor === Car);`,
    options: [
      { letter: 'A', text: '`true`' },
      { letter: 'B', text: '`false`' },
      { letter: 'C', text: '`undefined`' },
    ],
    answer: 'A',
    explanation: 'When an object is created with a constructor function, its `constructor` property points back to that constructor function by default. This property is inherited from the constructor\'s prototype.'
  },
  {
    id: 211,
    question: "What's the output?",
    code: `const greet = 'Hello';
(function (name) {
  const greet = 'Hi';
  console.log(\`\${greet}, \${name}\`);
})('Lydia');`,
    options: [
      { letter: 'A', text: '`Hello, Lydia`' },
      { letter: 'B', text: '`Hi, Lydia`' },
      { letter: 'C', text: '`Hi, undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'B',
    explanation: 'This is an Immediately Invoked Function Expression (IIFE). The `greet` variable inside the IIFE shadows the global `greet` variable. The code inside the IIFE\'s scope will use its own `greet` variable, which has the value "Hi".'
  },
  {
    id: 212,
    question: "What does `Reflect.has` do?",
    code: `const person = { name: 'Lydia' };
console.log(Reflect.has(person, 'name'));`,
    options: [
      { letter: 'A', text: 'It is a more modern, function-based equivalent of the `in` operator.' },
      { letter: 'B', text: 'It is a more modern, function-based equivalent of `Object.prototype.hasOwnProperty`.' },
      { letter: 'C', text: 'It checks if a property is configurable.' },
      { letter: 'D', text: 'It returns the value of the property, not a boolean.' },
    ],
    answer: 'A',
    explanation: 'The `Reflect` object provides methods for interceptable JavaScript operations. `Reflect.has(target, propertyKey)` performs the same check as the `in` operator, returning a boolean indicating if the property exists on the object or its prototype chain.'
  },
  {
    id: 213,
    question: "What's the output?",
    code: `const fn = new Proxy(function (x) {
  return x * 2;
}, {
  apply(target, thisArg, args) {
    return Reflect.apply(target, thisArg, args) + 1;
  },
});

console.log(fn(5));`,
    options: [
      { letter: 'A', text: '`5`' },
      { letter: 'B', text: '`10`' },
      { letter: 'C', text: '`11`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'C',
    explanation: "The proxy's `apply` trap intercepts function calls. It calls the original function (doubling the argument to `10`) and then adds `1`, so the final result logged is `11`."
  },
  {
    id: 214,
    question: "What's the output?",
    code: `try {
  console.log(10n + 5);
} catch (err) {
  console.log(err.name);
}`,
    options: [
      { letter: 'A', text: '`15n`' },
      { letter: 'B', text: '`15`' },
      { letter: 'C', text: '`"TypeError"`' },
      { letter: 'D', text: '`"RangeError"`' },
    ],
    answer: 'C',
    explanation: "You cannot mix `BigInt` and `Number` values in arithmetic operations. `10n + 5` throws a `TypeError`, which is caught and whose `name` property (`'TypeError'`) is logged."
  },
  {
    id: 215,
    question: "What's the output?",
    code: `const person = {};
Object.defineProperty(person, 'name', {
  value: 'Lydia',
  writable: false,
  configurable: true,
});

person.name = 'Sarah';
delete person.name;

console.log(person.name);`,
    options: [
      { letter: 'A', text: '`"Lydia"`' },
      { letter: 'B', text: '`"Sarah"`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'C',
    explanation: "A non-writable property cannot have its value changed, so `person.name = 'Sarah'` is ignored in non-strict mode. However, because the property is `configurable: true`, it can be deleted. After `delete person.name`, the property is gone and accessing it yields `undefined`."
  },
  {
    id: 216,
    question: "What is the purpose of an `AbortController`?",
    code: `const controller = new AbortController();
const signal = controller.signal;

fetch('/data', { signal })
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted!');
    }
  });

// Sometime later...
controller.abort();`,
    options: [
      { letter: 'A', text: 'To stop the execution of a function immediately.' },
      { letter: 'B', text: 'To provide a signal that can be used to cancel asynchronous operations like `fetch`.' },
      { letter: 'C', text: 'To handle errors in `async/await` functions without a `try...catch` block.' },
      { letter: 'D', text: 'To control the flow of generator functions.' },
    ],
    answer: 'B',
    explanation: 'An `AbortController` creates a signal that can be passed to asynchronous APIs (most notably `fetch`). Calling the `abort()` method on the controller signals to the API that the operation should be aborted, causing its promise to reject with an "AbortError".'
  },
  {
    id: 217,
    question: "What's the output?",
    code: `const message = "I like cats. My favorite cat is a cool cat.";
console.log(message.replaceAll('cat', 'dog'));`,
    options: [
      { letter: 'A', text: '`I like dogs. My favorite cat is a cool cat.`' },
      { letter: 'B', text: '`I like dogs. My favorite dog is a cool dog.`' },
      { letter: 'C', text: '`I like dog. My favorite dog is a cool dog.`' },
      { letter: 'D', text: '`TypeError: replaceAll is not a function` (in older environments)' },
    ],
    answer: 'B',
    explanation: 'The `String.prototype.replaceAll()` method returns a new string with all occurrences of a pattern replaced by a replacement. Unlike `.replace()`, it replaces all instances by default without needing a global regular expression.'
  },
  {
    id: 218,
    question: "What happens when `throw` is called on a generator?",
    code: `function* myGenerator() {
  try {
    yield 'First';
  } catch (e) {
    console.log(e);
  }
  yield 'Second';
}
const gen = myGenerator();
gen.next();
gen.throw('An error occurred!');`,
    options: [
      { letter: 'A', text: 'The program crashes immediately.' },
      { letter: 'B', text: 'The error is logged and the generator continues, yielding "Second".' },
      { letter: 'C', text: 'The error is logged, but the generator is terminated.' },
      { letter: 'D', text: 'Nothing happens because the error is caught.' },
    ],
    answer: 'B',
    explanation: 'The `.throw()` method on a generator instance resumes its execution as if a `throw` statement occurred at the last `yield` point. If there is a `try...catch` block inside the generator at that point, the error can be caught, and the generator can continue execution.'
  },
  {
    id: 219,
    question: "What's the output?",
    code: `const handler = {
  get: function(target, prop, receiver) {
    return Reflect.get(...arguments) + '!';
  }
};

const user = new Proxy({ name: 'Lydia' }, handler);
console.log(user.name);`,
    options: [
      { letter: 'A', text: '`Lydia`' },
      { letter: 'B', text: '`Lydia!`' },
      { letter: 'C', text: '`undefined!`' },
      { letter: 'D', text: '`TypeError`' },
    ],
    answer: 'B',
    explanation: 'The `get` trap of the proxy intercepts the property access. `Reflect.get` is used to perform the default property access, which returns "Lydia". The trap then appends an exclamation mark "!" to this result before returning it.'
  },
  {
    id: 220,
    question: "What does the (Stage 3) `Object.groupBy` method do?",
    code: `const inventory = [
  { name: 'apples', type: 'fruits' },
  { name: 'carrots', type: 'vegetables' },
  { name: 'bananas', type: 'fruits' },
];
const result = Object.groupBy(inventory, ({ type }) => type);`,
    options: [
      { letter: 'A', text: 'It returns an array of the group names: `["fruits", "vegetables"]`.' },
      { letter: 'B', text: 'It returns `true` if all objects can be grouped.' },
      { letter: 'C', text: 'It creates a single object where keys are the group names and values are arrays of the grouped objects.' },
      { letter: 'D', text: 'It modifies the original array by adding a `group` property to each object.' },
    ],
    answer: 'C',
    explanation: '`Object.groupBy` is a new static method that groups the elements of an iterable according to the string values returned by a provided callback function. It returns a null-prototype object with a key for each group.'
  },
  {
    id: 221,
    question: "What's the output?",
    code: `const user = {
  name: 'Alex',
  logName: function() {
    console.log(this.name);
  }
};
setTimeout(user.logName, 10);`,
    options: [
      { letter: 'A', text: '`Alex`' },
      { letter: 'B', text: '`undefined` or the global name property' },
      { letter: 'C', text: '`null`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'When you pass `user.logName` as a callback to `setTimeout`, you are passing the function itself, detached from its original context. `setTimeout` invokes it as a regular function, where `this` refers to the global object (`window` or `global`), not the `user` object. To fix this, you would use `user.logName.bind(user)` or `() => user.logName()`.'
  },
  {
    id: 222,
    question: "What's the output?",
    code: `console.log(parseInt(null, 24));`,
    options: [
      { letter: 'A', text: '`0`' },
      { letter: 'B', text: '`23`' },
      { letter: 'C', text: '`NaN`' },
      { letter: 'D', text: '`null`' },
    ],
    answer: 'B',
    explanation: '`parseInt` first coerces its first argument to a string. `String(null)` is `"null"`. Then it tries to parse `"null"` with a radix (base) of 24. In base 24, "n" is a valid digit representing the value 23. It stops parsing at "u", so it returns `23`.'
  },
  {
    id: 223,
    question: "How does the new `Array.prototype.with()` method work?",
    code: `const original = [1, 2, 3, 4];
const updated = original.with(2, 99);
console.log(updated);
console.log(original);`,
    options: [
      { letter: 'A', text: 'It modifies `original` to be `[1, 2, 99, 4]` and returns it.' },
      { letter: 'B', text: 'It returns a new array `[1, 2, 99, 4]` and leaves `original` unchanged.' },
      { letter: 'C', text: 'It returns `99` and leaves `original` unchanged.' },
      { letter: 'D', text: 'It is not a valid array method and throws an error.' },
    ],
    answer: 'B',
    explanation: '`Array.prototype.with(index, value)` is a new immutable method. It returns a new array where the element at the specified `index` is replaced with the new `value`, without modifying the original array.'
  },
  {
    id: 224,
    question: "What is a key characteristic of `WeakSet`?",
    options: [
      { letter: 'A', text: 'It can only store strings.' },
      { letter: 'B', text: 'Its elements may be garbage-collected if they are the only reference to the object.' },
      { letter: 'C', text: 'It is an ordered collection, unlike a regular `Set`.' },
      { letter: 'D', text: 'It has a `size` property to see how many items it contains.' },
    ],
    answer: 'B',
    explanation: '`WeakSet` holds its objects "weakly". This means that if no other part of your program holds a reference to an object stored in the `WeakSet`, the garbage collector is free to remove it. This makes them useful for metadata without preventing memory cleanup. For this reason, they are not iterable and do not have a `size` property.'
  },
  {
    id: 225,
    question: "What's the output in a browser environment?",
    code: `const myFunc = () => {
  console.log(typeof arguments);
};
myFunc(1, 2, 3);`,
    options: [
      { letter: 'A', text: '`"object"`' },
      { letter: 'B', text: '`"array"`' },
      { letter: 'C', text: '`ReferenceError`' },
      { letter: 'D', text: '`"undefined"`' },
    ],
    answer: 'C',
    explanation: 'Arrow functions do not have their own `arguments` object. The `arguments` keyword will be looked for in the parent scope. If this code were run in the global scope, it would throw a `ReferenceError` because `arguments` is not defined there.'
  },
  {
    id: 226,
    question: "What is `new.target`?",
    code: `function Car() {
  if (!new.target) {
    console.log('Called as a function');
  } else {
    console.log('Called with new');
  }
}
new Car();
Car();`,
    options: [
      { letter: 'A', text: 'A reference to the `this` keyword.' },
      { letter: 'B', text: 'A meta-property that tells you if a function was called with the `new` keyword.' },
      { letter: 'C', text: 'A property that only exists in class constructors.' },
      { letter: 'D', text: 'An alias for `Function.prototype`.' },
    ],
    answer: 'B',
    explanation: '`new.target` is a meta-property available in functions. If the function is called using the `new` operator, `new.target` will be a reference to the constructor. If it\'s called as a regular function, `new.target` will be `undefined`.'
  },
  {
    id: 227,
    question: "What's the output?",
    code: `console.log(0 || 1 && 2 || 3);`,
    options: [
      { letter: 'A', text: '`0`' },
      { letter: 'B', text: '`1`' },
      { letter: 'C', text: '`2`' },
      { letter: 'D', text: '`3`' },
    ],
    answer: 'C',
    explanation: 'Operator precedence matters. The logical AND (`&&`) operator has higher precedence than logical OR (`||`). First, `1 && 2` is evaluated. Since `1` is truthy, the expression results in `2`. The expression becomes `0 || 2 || 3`. The `||` operator returns the first truthy value, which is `2`.'
  },
  {
    id: 228,
    question: "What happens when you await a non-promise value?",
    code: `async function test() {
  const value = await 42;
  console.log(value);
}
test();`,
    options: [
      { letter: 'A', text: 'It throws a `TypeError`.' },
      { letter: 'B', text: 'It treats the value as a resolved promise and returns the value itself.' },
      { letter: 'C', text: 'It returns `undefined`.' },
      { letter: 'D', text: 'It returns a pending promise.' },
    ],
    answer: 'B',
    explanation: 'The `await` keyword can be used on any value. If the value is not a promise, `await` converts it into a resolved promise and immediately returns the value. The code will log `42`.'
  },
  {
    id: 229,
    question: "What's the output?",
    code: `console.log(+[1] + [2]);`,
    options: [
      { letter: 'A', text: '`3`' },
      { letter: 'B', text: '`"3"`' },
      { letter: 'C', text: '`"12"`' },
      { letter: 'D', text: '`NaN`' },
    ],
    answer: 'C',
    explanation: 'The unary plus `+` operator has higher precedence. `+[1]` triggers numeric coercion. `[1]` becomes `"1"`, and then `Number("1")` is `1`. The expression becomes `1 + [2]`. Now the addition `+` operator sees a number and an object (the array). It triggers string concatenation. `[2]` becomes `"2"`, so the expression is `1 + "2"`, which results in the string `"12"`.'
  },
  {
    id: 230,
    question: "What is `Atomics.wait()` used for?",
    options: [
      { letter: 'A', text: 'To pause the main thread for a specified number of milliseconds, similar to `sleep`.' },
      { letter: 'B', text: 'To wait for a Promise to resolve in a synchronous-looking way.' },
      { letter: 'C', text: 'To efficiently suspend a worker thread until it is notified, used for building synchronization primitives.' },
      { letter: 'D', text: 'To wait for an atomic CSS transition to complete.' },
    ],
    answer: 'C',
    explanation: '`Atomics.wait()` is part of the JavaScript shared memory and atomics API. It is used in multi-threaded contexts (like Web Workers) to suspend execution of the agent (thread) until it is woken up by `Atomics.notify()`. It cannot be used on the main thread.'
  },
  {
    id: 231,
    question: "What's the output?",
    code: `const arr = null;
console.log(arr?.[0]);`,
    options: [
      { letter: 'A', text: '`null`' },
      { letter: 'B', text: '`ReferenceError`' },
      { letter: 'C', text: '`TypeError`' },
      { letter: 'D', text: '`undefined`' },
    ],
    answer: 'D',
    explanation: 'Optional chaining (`?.`) works for bracket notation as well. Since `arr` is `null`, the expression short-circuits and evaluates to `undefined` without attempting to access the index `[0]`, thus preventing a `TypeError`.'
  },
  {
    id: 232,
    question: "What is this `switch(true)` pattern useful for?",
    code: `const value = 75;
let result;
switch (true) {
  case value < 50:
    result = 'Fail';
    break;
  case value < 90:
    result = 'Pass';
    break;
  default:
    result = 'Excellent';
}`,
    options: [
      { letter: 'A', text: 'It is a syntax error.' },
      { letter: 'B', text: 'It checks if `value` is strictly equal to `true`.' },
      { letter: 'C', text: 'It acts as a more readable alternative to a complex `if...else if...else` chain.' },
      { letter: 'D', text: 'It will always execute the `default` case.' },
    ],
    answer: 'C',
    explanation: 'The `switch` statement evaluates its expression (`true`) and then looks for the first `case` clause whose expression evaluates to the same value. In this case, `value < 90` is the first expression to be `true`, so it executes that block. This pattern allows for range-based comparisons, unlike a typical `switch`.'
  },
  {
    id: 233,
    question: "What's the output?",
    code: `const params = new URLSearchParams('q=JavaScript&page=1');
params.append('lang', 'en');
console.log(params.toString());`,
    options: [
      { letter: 'A', text: '`{ q: "JavaScript", page: "1", lang: "en" }`' },
      { letter: 'B', text: '`"q=JavaScript&page=1&lang=en"`' },
      { letter: 'C', text: '`"JavaScript,1,en"`' },
      { letter: 'D', text: '`["q=JavaScript", "page=1", "lang=en"]`' },
    ],
    answer: 'B',
    explanation: 'The `URLSearchParams` interface provides utility methods to work with the query string of a URL. The `.toString()` method serializes the parameters back into a URL-encoded string format.'
  },
  {
    id: 234,
    question: "What happens if a `finally` block throws an error?",
    code: `function test() {
  try {
    throw new Error('try error');
  } finally {
    throw new Error('finally error');
  }
}
try {
  test();
} catch (e) {
  console.log(e.message);
}`,
    options: [
      { letter: 'A', text: '`try error`' },
      { letter: 'B', text: '`finally error`' },
      { letter: 'C', text: 'Both errors are logged.' },
      { letter: 'D', 'text': 'No error is caught.' },
    ],
    answer: 'B',
    explanation: 'If an error is thrown in a `finally` block, it "overwrites" any error that might have been thrown in the `try` or `catch` blocks. The original "try error" is discarded, and the "finally error" is the one that propagates up and is caught by the outer `catch` block.'
  },
  {
    id: 235,
    question: "What's the output?",
    code: `const regex = /\\d/g;
console.log(regex.test('abc1'));
console.log(regex.test('abc2'));
console.log(regex.test('abc3'));`,
    options: [
      { letter: 'A', text: '`true` `true` `true`' },
      { letter: 'B', text: '`true` `false` `true`' },
      { letter: 'C', text: '`true` `false` `false`' },
      { letter: 'D', text: '`false` `false` `false`' },
    ],
    answer: 'B',
    explanation: 'When a regular expression has the global (`/g`) flag, the `test()` method is stateful. It maintains a `lastIndex` property to track where to start the next search. After finding "1", `lastIndex` is updated. The next call starts searching from there, finds no digit in "bc2", and fails. The search then resets, and the third call finds "3" and succeeds.'
  },
  {
    id: 236,
    question: "What's the output?",
    code: `let x = 1;
x = (x++, x + 2, x * 3);
console.log(x);`,
    options: [
      { letter: 'A', text: '`2`' },
      { letter: 'B', text: '`4`' },
      { letter: 'C', text: '`6`' },
      { letter: 'D', text: '`9`' },
    ],
    answer: 'C',
    explanation: 'The comma operator evaluates each of its operands from left to right and returns the value of the last operand. First, `x++` runs (evaluates to 1, but `x` becomes 2). Then, `x + 2` runs (evaluates to 4, but `x` is still 2). Finally, `x * 3` runs (evaluates to `2 * 3 = 6`). The final value, `6`, is assigned to `x`.'
  },
  {
    id: 237,
    question: "What's the output?",
    code: `console.log(Object.is(-0, 0));
console.log(-0 === 0);`,
    options: [
      { letter: 'A', text: '`true` `true`' },
      { letter: 'B', text: '`false` `true`' },
      { letter: 'C', text: '`true` `false`' },
      { letter: 'D', text: '`false` `false`' },
    ],
    answer: 'B',
    explanation: '`Object.is()` is similar to `===` but handles two edge cases differently: `NaN` and signed zeros. `Object.is()` correctly distinguishes between `+0` and `-0`, returning `false`. The strict equality operator `===` treats them as the same value, returning `true`.'
  },
  {
    id: 238,
    question: "What's the output?",
    code: `let x = 'global';
if (true) {
  console.log(x);
  let x = 'block';
}`,
    options: [
      { letter: 'A', text: '`global`' },
      { letter: 'B', text: '`block`' },
      { letter: 'C', text: '`undefined`' },
      { letter: 'D', text: '`ReferenceError`' },
    ],
    answer: 'D',
    explanation: 'The `let x` declaration inside the `if` block creates a new block-scoped variable `x` that shadows the global one. This declaration is hoisted to the top of the block, but it is not initialized. The area before the `let x = "block"` line is the "temporal dead zone" for the block-scoped `x`. Accessing it throws a `ReferenceError`.'
  },
  {
    id: 239,
    question: "What does `import.meta` provide?",
    options: [
      { letter: 'A', text: 'An object containing metadata about the current JavaScript module.' },
      { letter: 'B', text: 'A function to dynamically import other modules.' },
      { letter: 'C', text: 'A list of all variables exported by the current module.' },
      { letter: 'D', text: 'A way to access the `<meta>` tags in the HTML document.' },
    ],
    answer: 'A',
    explanation: '`import.meta` is a meta-property that exposes context-specific metadata to a JavaScript module. A common property is `import.meta.url`, which gives the full URL of the module, useful for resolving assets relative to the module file.'
  },
  {
    id: 240,
    question: "What's the output?",
    code: `const obj = { a: 1, b: 2 };
const { a, ...rest } = obj;
console.log(rest);`,
    options: [
      { letter: 'A', text: '`{ a: 1 }`' },
      { letter: 'B', text: '`{ b: 2 }`' },
      { letter: 'C', text: '`[2]`' },
      { letter: 'D', text: '`Error`' },
    ],
    answer: 'B',
    explanation: 'This is object destructuring with the rest properties syntax. It assigns the `a` property to the variable `a`. The `...rest` pattern collects all *remaining* own enumerable property keys and their values into a new object.'
  }

  
];

  
