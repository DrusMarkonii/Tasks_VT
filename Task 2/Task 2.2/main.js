function zero() { return arguments.length === 0 ? 0 : arguments[0](0); }
        function one() { return arguments.length === 0 ? 1 : arguments[0](1); }
        function two() { return arguments.length === 0 ? 2 : arguments[0](2); }
        function three() { return arguments.length === 0 ? 3 : arguments[0](3); }
        function four() { return arguments.length === 0 ? 4 : arguments[0](4); }
        function five() {return arguments.length === 0 ? 5 : arguments[0](5); }
        function six() {return arguments.length === 0 ? 6 : arguments[0](6); }
        function seven() {return arguments.length === 0 ? 7 : arguments[0](7); }
        function eight() { return arguments.length === 0 ? 8 : arguments[0](8); }
        function nine() { return arguments.length === 0 ? 9 : arguments[0](9); }
 
        function plus() {
            const n = arguments[0];
            return x => x + n;
         }
        function minus() { 
            const n = arguments[0];
            return x => x - n;
        }
        function times() {
            const n = arguments[0];
            return x => x * n;
         }
        function dividedBy() {
            const n = arguments[0];
            return x => Math.floor(x / n);
         }
         console.log(arguments)
         console.log(seven(times(five())));