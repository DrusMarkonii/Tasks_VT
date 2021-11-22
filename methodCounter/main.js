class GetCounter {
  constructor(number) {
    this.counter = number;
  };

  log() {
      console.log(this.counter);
      return this;
    };

  count(a) {
        this.counter += a
        return this;
    };

  reset() {
    this.counter = 0
    return this;
    };
}

let counter = new GetCounter(5)

counter.log() // 5
    .count(4)
    .log() // 9
    .count(3)
    .log() // 12
    .reset()
    .log() // 0
    .count(8)
    .log();