function fizzBuz() {

    for (let i = 1; i <= 100; i++) {

        console.log(
            !(i % 3) && !(i % 5) && 'FizzBuzz' ||
            !(i % 3) && 'Fizz' ||
            !(i % 5) && 'Buzz' || 
            i
        );

    };

}

fizzBuz();