class SortedList  {
  constructor(items = [],length = items.length) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    let position = this.items[pos];
    if (pos > this.length)
    return position;
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

