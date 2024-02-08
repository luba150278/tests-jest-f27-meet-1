export default function sum(a, b) {
  if (!a || !b) {
    return false;
  }
  return a + b;
}

export class NumbersClass {
  a;
  b;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  minusMethod() {
    if (!this.a || !this.b) {
      return false;
    }
    if (typeof this.a !== 'number' || typeof this.b !== 'number') {
      return false;
    }

    return this.a - this.b;
  }
}

// const instance = new NumbersClass(1, 2);

// console.log(instance.minusMethod());
