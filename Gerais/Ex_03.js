const originalWord = 'abcd';

const arrayWord = originalWord.split('');

const arrayMaped = arrayWord.map(function(charWord){
    return String.fromCharCode(charWord.charCodeAt()+1);
});

console.log(arrayMaped.join(''));