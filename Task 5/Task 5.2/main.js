console.log('-----------Первый вариант--------')

function GetCounter1(number) {
  this.counter = number;
  this.log =() => console.log(this.counter);
  this.count = (a) =>(this.counter += a);
  this.reset =() => this.counter = 0;
}

let counter1 = new GetCounter1(5)

counter1.log() // 5
counter1.count(4)
counter1.log() // 9
counter1.count(3)
counter1.log() // 12
counter1.reset()
counter1.log() // 0
counter1.count(8)
counter1.log(); // 8



console.log('-----------Второй вариант--------')




function getCounter2(number) {
  return {
    counter: number,
    log: function() {console.log(this.counter)},
    count: function(a) {this.counter += a},
    reset: function(){this.counter = 0},
  };
}

let counter2 = getCounter2(5)

counter2.log() // 5
counter2.count(4)
counter2.log() // 9
counter2.count(3)
counter2.log() // 12
counter2.reset()
counter2.log() // 0
counter2.count(8)
counter2.log(); 



console.log('-----------Третий вариант--------')




function GetCounter3 (number) {
  this.counter = number;
}

GetCounter3.prototype.log = function(){console.log(this.counter)};
GetCounter3.prototype.count = function(a){this.counter += a};
GetCounter3.prototype.reset = function(){this.counter = 0};

let counter3 = new GetCounter3(5)

counter3.log() // 5
counter3.count(4)
counter3.log() // 9
counter3.count(3)
counter3.log() // 12
counter3.reset()
counter3.log() // 0
counter3.count(8)
counter3.log(); 


console.log('-----------Четвертый вариант--------')

class GetCounter4 {
  constructor(number) {
    this.counter = number;
  }

  log() {console.log(this.counter)};
  count(a) {this.counter += a};
  reset() {this.counter = 0};
}

let counter4 = new GetCounter4(5)

counter4.log() // 5
counter4.count(4)
counter4.log() // 9
counter4.count(3)
counter4.log() // 12
counter4.reset()
counter4.log() // 0
counter4.count(8)
counter4.log(); 

