/* eslint-disable
  arrow-body-style,
  block-scoped-var,
  class-methods-use-this,
  eqeqeq,
  max-classes-per-file,
  new-cap,
  no-bitwise,
  no-console,
  no-inner-declarations ,
  no-lone-blocks,
  no-var,
  prefer-const,
  vars-on-top,
  @typescript-eslint/dot-notation,
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/no-inferrable-types,
  @typescript-eslint/no-throw-literal,
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unused-expressions,
  @typescript-eslint/no-unused-vars,
  import/first,
*/

/**
 *  _______                _____           _       _
 * |__   __|              / ____|         (_)     | |
 *    | |_   _ _ __   ___| (___   ___ _ __ _ _ __ | |_
 *    | | | | | '_ \ / _ \\___ \ / __| '__| | '_ \| __|
 *    | | |_| | |_) |  __/____) | (__| |  | | |_) | |_
 *    |_|\__, | .__/ \___|_____/ \___|_|  |_| .__/ \__|
 *        __/ | |                           | |
 *       |___/|_|                           |_|
 *
 * ? What is TypeScript
 *
 * - TypeScript is a language built on top of JavaScript.
 * - TypeScript is a superset of JavaScript.
 * - Enforces static typing at compile time.
 * - Transforms future ECMAScript features into JavaScript that can run on any browser.
 *
 * ? Why use TypeScript
 *
 * - Enforces static typing.
 * - Easier to scale larger codebases.
 * - Large community of developers and companies using TypeScript in production.
 * - Support for future ECMAScript features like private variables and async / await.
 * - Tooling for static typed languages are often better.
 * - Backed by Microsoft.
 *
 * ? How does TypeScript work
 *
 * - TypeScript has a compiler that transpiles the code into JavaScript.
 * - Types are removed at compile time. This is known as type erasure.
 * - Future ECMAscript features are compiled to ES6.
 *
 * * 01. Variables
 * * 02. Operators
 * * 03. Conditionals
 * * 04. Loops
 * * 05. Functions
 * * 06. Data Structures
 * * 08. Classes
 * * 08. Closures
 * * 09. Errors
 * * 10. Promises
 * * 11. ES Modules
 * * 12. Type System
 */

/**
 * __      __        _       _     _
 * \ \    / /       (_)     | |   | |
 *  \ \  / /_ _ _ __ _  __ _| |__ | | ___  ___
 *   \ \/ / _` | '__| |/ _` | '_ \| |/ _ \/ __|
 *    \  / (_| | |  | | (_| | |_) | |  __/\__ \
 *     \/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
 */

/**
 * ? How do we declare variables
 *
 * - You can declare variables in 3 ways: var, let, and const.
 * - var and let allow you to re-assign the variable.
 * - const is immutable, so you can't re-assign the variable.
 */
{
  /**
   * ! It's recommended to not use var because of issues with scoping
   *
   * * Use let only if you *need* to reassign the variable
   *
   * * Prefer const otherwise
   */

  const x = 1;
  let y = 2;
  var z = 3;
}

/**
 * ? What are the primitive types?
 *
 * There are 7 primitive types.
 */

{
  // Most commonly used
  const bool: boolean = false;
  const num: number = 10;
  const str: string = 'hello world';
  const nil: null = null;
  const undef: undefined = undefined;

  // Other useful primitives
  const bigInt: bigint = 10n;
  const sym: symbol = Symbol('10');
}

/**
 * ? What can I assign a variable to?
 *
 * Pretty much anything.
 */
{
  // Literals
  const x = 10;

  // Other variables
  let y: any = x;

  // Arrays
  y = [1, 2, 3];

  // Objects
  y = {
    a: 1,
    b: 2,
    c: 3,
  };

  // Functions
  y = () => 'hello, world!';
  console.log(y());

  y = function holaWorld() {
    return '¡hola, world!';
  };
  console.log(y());

  // Classes
  y = class {
    sayHello() {
      return 'hello from class';
    }
  };
  y = new y();
  console.log(y.sayHello());
}

/**
 * ? How does variable scoping work
 *
 * - Four types of scopes: Global, Function, Block, Module
 * - let and const variables are scoped to its parent context
 * ! var doesn't have block scope, so prefer let or const
 */

{
  // Global scope: accessible from anywhere
  const x = 1;
  console.log(x);

  // Local scope: only accessible within function
  function foo() {
    const y = 1;
    var zz = 3;
  }

  // console.log(y);
  // console.log(zz);

  {
    // Variable not accessible outside of block
    const a = 3;

    // Variable accessible outside of block because of var
    var b = 3;
  }

  console.log(b);
  // Throws error because a is not defined in this scope
  // console.log(a);
}

/**
 *   ____                       _
 *  / __ \                     | |
 * | |  | |_ __   ___ _ __ __ _| |_ ___  _ __ ___
 * | |  | | '_ \ / _ \ '__/ _` | __/ _ \| '__/ __|
 * | |__| | |_) |  __/ | | (_| | || (_) | |  \__ \
 *  \____/| .__/ \___|_|  \__,_|\__\___/|_|  |___/
 *        | |
 *        |_|
 */

/**
 * ? What operators does TypeScript have
 *
 * TypeScript supports the usual operators you'd expect a programming language
 * to have.
 */

// Arithmetic
{
  const x = 10;
  let y = x + 20;
  console.log(y);

  y -= 50;
  console.log(y);

  y = 2 ** 4;
  console.log(y);

  y /= 2;
  console.log(y);

  y %= 3;
  console.log(y);

  y = -y;
  console.log(y);
}

// Logical
{
  const x = true;
  let y = x && false;
  console.log(y);

  y = x || false;
  console.log(y);

  y = !y;
  console.log(y);
}

// Bitwise
{
  const x = 3;
  let y = x & 6;
  console.log(y);

  y = x ^ 2;
  console.log(y);

  y <<= 2;
  console.log(y);
}

// String concatenation
{
  // eslint-disable-next-line no-useless-concat
  const string = 'hello ' + 'world ' + 'yo';
  console.log(string);
}

// Ternaries
{
  const x = true;
  const y = x ? 1 : 2;
  console.log(y);

  // Python ternaries
  /* python */ `
  x = True
  y = 1 if x else 2
  `;
}

// typeof
{
  const x = 10;
  const y = typeof x;
  console.log(y);
}

/**
 * There are two ways of checking equality:
 * - Loose equality with ==
 * - Strict equality with ===
 */
{
  const x: number = 10;

  /**
   * You can use == for equality, but it's not type safe because it
   * automatically converts the operands to the same type.
   * ! Don't use loose equality whenever possible
   */
  console.log(x == 10);
  console.log(x == '10');
  console.log(x != '10');

  /**
   * * Prefer strict equality whenever possible
   */
  console.log(x === 10);
  console.log(x === '10');
  console.log(x !== '10');
}

/**
 *   _____                _ _ _   _                   _
 *  / ____|              | (_) | (_)                 | |
 * | |     ___  _ __   __| |_| |_ _  ___  _ __   __ _| |___
 * | |    / _ \| '_ \ / _` | | __| |/ _ \| '_ \ / _` | / __|
 * | |___| (_) | | | | (_| | | |_| | (_) | | | | (_| | \__ \
 *  \_____\___/|_| |_|\__,_|_|\__|_|\___/|_| |_|\__,_|_|___/
 */

/**
 * ? What are the ways we can evaluate conditional statements
 *
 * Like other programming languages, TypeScript has C-like conditional
 * structures for if, if-else, if-else-if, and switch statements.
 */

{
  const x = true;

  // If statement
  if (x) {
    console.log('this should print');
  }

  // If-else statement
  if (!x) {
    console.log('this should not print');
  } else {
    console.log('this else should print!');
  }

  // If-else-if statement
  if (!x) {
    console.log('this should not print');
  } else if (x) {
    console.log('this else should print!');
  }

  /**
   * Switch statement
   * * Switch statements support numbers and strings
   */
  const y: string = 'foobar';
  switch (y) {
    case 'foo':
      console.log('foo should not print');
      break;

    case 'foobar':
      console.log('foobar should print');
      break;

    default:
      console.log('default should not print');
      break;
  }
}

/**
 * ? What makes a value "truthy?"
 *
 * - Truthy values are any values that result to `true` when converted to a boolean
 * - Any value is truthy provided it's not falsy
 *   - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

{
  console.log(!0);
  console.log(!'');
  console.log(!false);
  console.log(!null);
  console.log(!undefined);
  console.log(!NaN);

  // You can use `!!` to convert to a boolean
  console.log(!!2);
  console.log(!!'hello');

  // Or can also use `Boolean()` to cast to boolean
  console.log(Boolean(1));

  // `Boolean()` is useful for filtering truthy values
  console.log([0, 1, 0, 2, 3, 0].filter(Boolean));
}

/**
 * ? What are some alternatives to switch
 *
 * Using a dictionary, we can provide an alternative to switch using the keys
 * as the case statements. If the key doesn't exist in the dictionary, we can
 * return some default value.
 *
 * * https://www.valentinog.com/blog/switch/
 */
{
  const mapping: Record<string, number | undefined> = {
    foo: 1,
    bar: 2,
    foobar: 3,
  };

  function getValue(key: string): number {
    return mapping[key] ?? 4;
  }

  // eslint-disable-next-line
  console.log(getValue('foo'));
  console.log(getValue('bar'));
  console.log(getValue('non-existing'));

  // This is inspired by Python's approach for switch:
  /* python */ `
  mapping = {
    'foo': 1,
    'bar': 2,
    'foobar': 3,
  }

  def get_value(key: str) -> int:
    return mapping.get(key, 4)

  print(get_value('foo')) # prints 1
  print(get_value('bar')) # prints 2
  print(get_value('non-existing')) # prints 4
  `;
}

/**
 *  _
 * | |
 * | |     ___   ___  _ __  ___
 * | |    / _ \ / _ \| '_ \/ __|
 * | |___| (_) | (_) | |_) \__ \
 * |______\___/ \___/| .__/|___/
 *                   | |
 *                   |_|
 */

/**
 * ? How do we use loops in TypeScript?
 *
 * - Loops are C-like. TS supports for, for-of, while, and do-while
 * - Arrays also have built-in methods for iterating through a collectiong
 */
{
  // for loop
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // for-of loop
  const numbers = [1, 2, 3, 4, 5];
  for (const x of numbers) {
    console.log(x);
  }

  // while loop
  let i = 0;
  while (i++ < 5) {
    console.log(i);
  }

  // do-while loop
  i = 0;
  do {
    console.log(i);
  } while (i++ < 5);

  // Arrays have several functions for iteration. We'll go over the other
  // methods in the `Data Structures` section, but one example is `forEach`:
  let result = '';
  numbers.forEach((x) => {
    result += `${x} `;
  });
  console.log(result);
}

/**
 *  ______                _   _
 * |  ____|              | | (_)
 * | |__ _   _ _ __   ___| |_ _  ___  _ __  ___
 * |  __| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
 * | |  | |_| | | | | (__| |_| | (_) | | | \__ \
 * |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
 */

/**
 * ? How do we declare functions
 *
 * - There are three ways to declare functions:
 *   - Function declaration
 *   - Function expressions
 *   - Arrow function expressions
 */
{
  // Function declaration
  function foo() {
    return 'foo';
  }
  console.log(foo());

  // Function expressions
  const bar = function bar() {
    return 'bar';
  };
  console.log(bar());

  // Arrow function expressions
  let foobar = () => {
    return 'foobar';
  };
  console.log(foobar());

  // Return value of arrow function expression can be one line
  foobar = () => 'foobar';
  console.log(foobar());

  // You can also declare parameters and a return type for a function:
  function typedFoo(a: number, b: number): number {
    return a + b;
  }
}

/**
 * ? How are they different
 *
 * - Function declarations are hoisted to the top of the enclosing scope
 * - Arrow function expressions does not have its own `this` binding
 * - And a few more differences:
 *   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
{
  // Function `foobar()` is hoisted to top of the scope
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  console.log(foobar());

  function foobar() {
    return 'foobar';
  }

  // `this` does not bind for arrow function expressions, so we're unable to
  // access `this.value`
  const x = {
    value: 10,
    // This throws a type error
    // getValueES6: () => this.value,
    // This is a shorthand for `getValue: function() { ... }`
    getValue() {
      return this.value;
    },
  };
}

/**
 *  _____        _           _____ _                   _
 * |  __ \      | |         / ____| |                 | |
 * | |  | | __ _| |_ __ _  | (___ | |_ _ __ _   _  ___| |_ _   _ _ __ ___  ___
 * | |  | |/ _` | __/ _` |  \___ \| __| '__| | | |/ __| __| | | | '__/ _ \/ __|
 * | |__| | (_| | || (_| |  ____) | |_| |  | |_| | (__| |_| |_| | | |  __/\__ \
 * |_____/ \__,_|\__\__,_| |_____/ \__|_|   \__,_|\___|\__|\__,_|_|  \___||___/
 */

/**
 * ? What data structures are available in TypeScript
 *
 * - There are many data structures for different use cases.
 * - Objects and maps for key-value pairs.
 * - Arrays for storing a list of items.
 * - Sets for storing a unique list of items.
 * - Dates for working with time.
 * - Strings for working with strings :)
 */
{
  // Objects for storing key-value pairs
  const obj = {
    a: 1,
    b: 'hello world',
    c: {
      a: 2,
      b: 3,
    },
    d: [1, 2, 3, 4],
  };
  console.log(obj);

  // Maps can also be used for key-value pairs
  const map = new Map<string, number>();
  map.set('foo', 1);
  map.set('bar', 2);
  map.set('foobar', 3);
  console.log(map);

  // Arrays can be used for storing a list of items.
  const x = [1, 2, [1, 2, 3], { a: 1, b: 2, c: 3 }];
  console.log(x);

  // Sets are great for storing unique items.
  const set = new Set<number>();
  set.add(1);
  set.add(2);
  set.add(1);
  console.log(set);

  // Dates are used for manipulating and displaying dates and times.
  const date = new Date();
  console.log(date.toISOString());
  console.log(date.toUTCString());
  // 5 seconds into the future
  console.log(new Date(date.getTime() + 5000).toISOString());

  // Strings can be defined using single quote or double quotes
  const str = 'hello';
  console.log(str);

  // Strings can substitute variables using template strings
  const strTemplate = `${str} world`;
  console.log(strTemplate);
}

/**
 * ? When should we use a Map vs an Object
 *
 * - Use maps when you need to use a non-string value as a key.
 *   - For example: objects, functions, symbols
 * - Use maps when you need to maintain insertion order
 * - Use objects otherwise
 */

/**
 * ? What are different ways we can interact with objects and arrays
 *
 * - The Array classes defines several methods for iterating and modifying an array.
 * - The `Object` namespace defines several methods for working with objects
 */
{
  const nums = [1, 2, 3, 4];

  // Filtering arrays by evens
  console.log(nums.filter((x) => x % 2 === 0));

  // Map each number with its square
  console.log(nums.map((x) => x ** 2));

  // Reduce numbers to sum
  console.log(nums.reduce((result, val) => result + val, 0));

  // Check for existence of item
  console.log(nums.includes(1));
  console.log(nums.indexOf(1));

  const obj = { a: 1, b: 2, c: 3 };

  // Get keys for object
  console.log(Object.keys(obj));

  // Get values
  console.log(Object.values(obj));

  // Map entries to `${key}${value}`
  const entries = Object.entries(obj);
  const combine = ([key, value]: [string, number]) => `${key}${value}`;
  console.log(entries.map(combine));
}

/**
 * ? How do I serialize an object or array
 *
 * You can serialize and deserialize objects or arrays using methods from the
 * `JSON` namespace.
 */
{
  const obj = {
    a: 1,
    b: 'hello world',
    c: {
      a: 2,
      b: 3,
    },
    d: [1, 2, 3, 4],
  };
  const str = JSON.stringify(obj);

  console.log(str);
  console.log(JSON.parse(str));
}

/**
 * ? What is destructuring
 *
 * Destructuring is a way of assigning a variable using the inner values of an
 * array or object.
 */
{
  // Destructure array item
  const nums = [1, 2, 3];
  const [, x] = nums;
  console.log(x);

  // Destructure object item
  const obj = { a: 1, b: 2 };
  const { a } = obj;
  console.log(a);

  // Nested destructuring
  const [{ y }] = [{ y: 2 }];
  console.log(y);
}

/**
 * ? What is spreading
 *
 * Spreading is a way to pass multiple values to an array, object, or function
 */
{
  // Array spreading
  const nums: [number, number, number] = [1, 2, 3];
  const copy = [...nums];
  console.log(copy);

  // Object spreading
  const obj = { a: 1, b: 2, c: 3 };
  const objCopy = { ...obj };
  console.log(objCopy);

  // Paramter spreading
  function add(val1: number, val2: number, val3: number): number {
    return val1 + val2 + val3;
  }
  console.log(add(...nums));
}

/**
 *   _____ _
 *  / ____| |
 * | |    | | __ _ ___ ___  ___  ___
 * | |    | |/ _` / __/ __|/ _ \/ __|
 * | |____| | (_| \__ \__ \  __/\__ \
 *  \_____|_|\__,_|___/___/\___||___/
 */

/**
 * ? How are classes defined in TypeScript
 */
{
  class Person {
    name: string;

    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello(): void {
      console.log(this.hello);
    }

    get hello(): string {
      return `Hello I am ${this.name} and I am ${this.age} years old`;
    }
  }

  const person = new Person('some guy', 200);
  console.log(person.hello);
  // person.sayHello();
}

/**
 *   _____ _
 *  / ____| |
 * | |    | | ___  ___ _   _ _ __ ___  ___
 * | |    | |/ _ \/ __| | | | '__/ _ \/ __|
 * | |____| | (_) \__ \ |_| | | |  __/\__ \
 *  \_____|_|\___/|___/\__,_|_|  \___||___/
 */

/**
 * ? What are closures
 *
 * - Closures are functions that have access to its surrounding scope
 * - An inner function defined in an outer function will have access to the outer functions variables
 */
{
  function adder(x: number) {
    return (y: number) => x + y;
  }

  const addFive = adder(5);
  console.log(addFive(10));
}

/**
 *  ______
 * |  ____|
 * | |__   _ __ _ __ ___  _ __ ___
 * |  __| | '__| '__/ _ \| '__/ __|
 * | |____| |  | | | (_) | |  \__ \
 * |______|_|  |_|  \___/|_|  |___/
 */

/**
 * ? How does error handling work in TypeScript
 *
 * - Errors are thrown with the `throw` keyword
 * - Errors are handled using `try / catch`
 */
{
  /**
   * We can throw pretty much anything for an error, but prefer error objects.
   *
   * ! Try not to throw literals
   * * Throw error objects
   */
  function foo() {
    throw 'yo';
  }

  function foobar() {
    throw new Error('hello');
  }

  // Errors can be handled using try / catch
  try {
    foo();
  } catch (e) {
    console.log(e);
  }

  // We can use finally to run some extra code regardless if an error is caught.
  // This is useful for performing cleanup after accessing a resource.
  try {
    foobar();
  } catch (e) {
    console.log(e);
  } finally {
    console.log('cleaning up resource');
  }
}

/**
 *  _____                     _
 * |  __ \                   (_)
 * | |__) | __ ___  _ __ ___  _ ___  ___  ___
 * |  ___/ '__/ _ \| '_ ` _ \| / __|/ _ \/ __|
 * | |   | | | (_) | | | | | | \__ \  __/\__ \
 * |_|   |_|  \___/|_| |_| |_|_|___/\___||___/
 */

/**
 * ? What are promises
 *
 * - Promises are also known as Futures in other languages
 * - Promises represent an asynchronous task to run concurrently
 * - Doesn't block main UI thread
 * - Useful for fetching network resources or doing long-running background tasks
 */
/* typescript */ `
  // Promises can be created using the Promise constructor
  let promise: Promise<any> = new Promise((resolve) => resolve(2));
  // Use await to resolve a promise
  console.log(await promise) // 2

  // Fetching HTML with promises and await
  const response = await fetch('https://example.com');
  const text = await response.text();
  console.log(text) // <html>....</html>

  // Async functions return a promise by default
  async function foo() {
    return 1;
  }
  console.log(await foo()) // 1

  // They can also be defined using arrow function expressions
  const foobar = async () => 2;
  console.log(await foobar()) // 2
`;

/**
 * This is very similar to asyncio in Python
 */
/* python */ `
import asyncio

async def main():
  print('hello')
  await asyncio.sleep(1)
  print('world')

asyncio.run(main())
`;

/**
 *
 *  ______  _____   __  __           _       _
 * |  ____|/ ____| |  \/  |         | |     | |
 * | |__  | (___   | \  / | ___   __| |_   _| | ___  ___
 * |  __|  \___ \  | |\/| |/ _ \ / _` | | | | |/ _ \/ __|
 * | |____ ____) | | |  | | (_) | (_| | |_| | |  __/\__ \
 * |______|_____/  |_|  |_|\___/ \__,_|\__,_|_|\___||___/
 */

/**
 * ? What are ES Modules
 *
 * - ES modules are a way for JavaScript to modularize and share code.
 * - In the past, all code was included in one file since JavaScript didn't have modules.
 */

/* typescript */ `
// math/index.ts
export const PI = 3;

export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add, PI } from './math';

const x = add(PI, 2);
`;

/**
 * ? What are live bindings
 *
 * Mutable exports can be reassigned later at runtime. Whatever code accesses
 * that export will get the updated value.
 */
/* typescript */ `
// state.ts
export let value = 0;

export function increment(): void {
  value++;
}

// main.ts
import { increment, value } from './state';

console.log(value); // 0
increment();
console.log(value); // 1
`;

/**
 *  _______                  _____           _
 * |__   __|                / ____|         | |
 *    | |_   _ _ __   ___  | (___  _   _ ___| |_ ___ _ __ ___
 *    | | | | | '_ \ / _ \  \___ \| | | / __| __/ _ \ '_ ` _ \
 *    | | |_| | |_) |  __/  ____) | |_| \__ \ ||  __/ | | | | |
 *    |_|\__, | .__/ \___| |_____/ \__, |___/\__\___|_| |_| |_|
 *        __/ | |                   __/ |
 *       |___/|_|                  |___/
 */

/**
 * ? What are interfaces
 *
 * - Interfaces are types that represent a particular structure an object should take
 * - Types are structural and not nominal
 */
{
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: 'person',
    age: 200,
  };
  console.log(person);

  // Throws type error since `20` is not a string
  const numberName: Person = { name: 20 };

  // Throws type error because type is incomplete
  const noAge: Person = { name: 'person' };

  // You can add optional properties to an interface
  interface CoolPerson extends Person {
    cool?: boolean;
  }
  const coolPerson: CoolPerson = { name: 'cool', age: 10 };
  console.log(coolPerson.cool);
  coolPerson.cool = true;
  console.log(coolPerson.cool);

  // Interfaces can refer to other interfaces
  interface Contacts {
    owner: Person;
    contacts: Person[];
  }
  const contacts: Contacts = {
    owner: { name: 'owner', age: 1 },
    contacts: [person, { name: 'something', age: 20 }],
  };
  console.log(contacts);

  // Interfaces can also have functions
  interface SpeakingPerson extends Person {
    sayHello(a: number, b: number): string;
  }
  const speakingPerson: SpeakingPerson = {
    name: 'person',
    age: 200,
    sayHello: () => 'hello, world!',
  };
}

/**
 * ? What are type aliases
 *
 * Type aliases are like interfaces except they allow you to specify types of
 * anything.
 */
{
  // Structural types
  type Person = {
    name: string;
    age: number;
  };

  // Alias other types
  type Num = number;
  const x: Num = 10;

  // Alias long types
  type Dictionary = Record<string, number>;
  const dict: Dictionary = { a: 1, b: 2 };

  // You can combine structural types using intersection types
  type CoolPerson = Person & {
    cool: boolean;
  };
}

/**
 * ? What are union types
 *
 * Union types are types that can be one of multiple types.
 */
{
  type Value = number | string | boolean;

  let x: Value = 10;
  x = 'hello';
  x = false;
}

/**
 * ? What is type narrowing
 *
 * Type narrowing is narrowing a union type to a simpler type.
 */
{
  type Value = number | string;

  // typeof operator used to narrow types
  function doubleValue(value: number | string): string {
    if (typeof value === 'number') {
      return `number: ${value * 2}`;
    }

    return `string: ${value} ${value}`;
  }

  console.log(doubleValue(10));
  console.log(doubleValue('hello'));
}

/**
 *  __  __                  _____                _ _
 * |  \/  |                |  __ \              | (_)
 * | \  / | ___  _ __ ___  | |__) |___  __ _  __| |_ _ __   __ _
 * | |\/| |/ _ \| '__/ _ \ |  _  // _ \/ _` |/ _` | | '_ \ / _` |
 * | |  | | (_) | | |  __/ | | \ \  __/ (_| | (_| | | | | | (_| |
 * |_|  |_|\___/|_|  \___| |_|  \_\___|\__,_|\__,_|_|_| |_|\__, |
 *                                                          __/ |
 *                                                         |___/
 *
 * That was a lot of TypeScript, and it's still non-exhaustive! There's lots
 * more to learn about both JavaScript and TypeScript that I didn't cover, but
 * hopefully this gives you enough knowledge to work on a TypeScript codebase.
 *
 * - Microsoft Frontend Bootcamp: https://github.com/microsoft/frontend-bootcamp
 * - JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
 * - TypeScript Docs: https://www.typescriptlang.org/docs/
 * - Creating types from types: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
 * - Generators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 * - Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * - Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */
