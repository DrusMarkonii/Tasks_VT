// function countVowelLetters(str) {

//     let counter = 0;
//     const vowels = ['а','у','о','и','э','ы'];
    
//     for (let char of str.toLowerCase()) {
//         vowels.includes(char) ? counter ++: counter;
//     };

//     console.log(`Количество гласных: ${counter}`)
// }

// [а] [у] [о] [и] [э] [ы]

function countVowelLetters(str) {

    let counter = 0;
    const vowels = ['а','у','о','и','э','ы'];
    let newArr = str.split('');
    
    newArr.forEach(char => vowels.includes(char) ? counter ++: counter);
    
    console.log(`Количество гласных: ${counter}`);
}
        
countVowelLetters('длинношеееыф')

