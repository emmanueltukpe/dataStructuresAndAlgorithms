class Stack {
  constructor() {
    this.datastore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.len = len;
    this.clear = clear;
  }
}

function push(e) {
  this.datastore[this.top++] = e;
}

function pop() {
  return this.datastore[--this.top];
}

function peek(e) {
  return this.datastore[this.top - 1];
}

function clear() {
  this.top = 0;
}

function len() {
  return this.top;
}

module.exports = Stack
