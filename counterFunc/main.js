function counter() {
    let count = 1;

    return function() {
            console.log(count++);
        };
    
};

const func = counter()

func()
func()
func()
