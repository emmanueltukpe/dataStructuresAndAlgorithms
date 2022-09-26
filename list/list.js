class List {
  constructor() {
    this.listSize = 0;
    this.position = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.viewList = viewList;
    this.append = append;
    this.insert = insert;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.previous = previous;
    this.next = next;
    this.len = len;
    this.current = current;
    this.move = move;
    this.getElement = getElement;
    this.contains = contains;
  }
}

function append(e) {
  this.dataStore[this.listSize++] = e;
}

function find(e) {
  for (let index = 0; index < this.dataStore.length; index++) {
    if (this.dataStore[index] === e) {
      return index;
    }
  }
  return -1;
}

function contains(e) {
  for (let index = 0; index < this.dataStore.length; index++) {
    if (this.dataStore[index] === e) {
      return true;
    }
  }
  return false;
}

function remove(e) {
  var foundAt = this.find(e);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

class clear {
  constructor() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.position = 0;
  }
}

function len() {
  return this.listSize;
}

function viewList() {
  return this.dataStore;
}

function insert(e, after) {
  var insertPosition = this.find(after);
  if (insertPosition > -1) {
    this.dataStore.splice(insertPosition + 1, 0, e);
    ++this.listSize;
    return true;
  }
  return false;
}

function front() {
  this.position = 0;
}

function end() {
  this.position = this.listSize - 1;
}

function previous() {
  if (this.position > -1) {
    --this.position;
  }
}

function next() {
  if (this.position < this.listSize) {
    ++this.position;
  }
}

function current() {
  return this.position;
}

function move(position) {
  this.position = position
}

function getElement() {
  return this.dataStore[this.position];
}

module.exports = List
