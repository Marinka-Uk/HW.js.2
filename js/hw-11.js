//№1
//*

const logItems = function(array){
    for(let i = 0; i < array.length; i += 1){
            // console.log(i);
            // console.log(array[i]);
            console.log(
                `${i + 1} - ${array[i]}`
            );
        }
}

logItems(['Mango', 'Poly', 'Ajax'])


//№2
//*


const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(' ');
    
    const wordCount = words.length;
    const totalPrice = wordCount + pricePerWord;
    return totalPrice;
}

const message = "Hello world";
const pricePerWord = 10;
const engravingPrice = calculateEngravingPrice(message, pricePerWord);
console.log(engravingPrice);



//№3
//*


const findLongestWord = function(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (let word of words) {

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}

const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
const longestWord = findLongestWord(string);
console.log(longestWord);



//№4
//*


const formatString = function(string){
if(string.length <= 40 ){
    return string
}
const letters = string.split('');
const totalToDelete = string.length - 40
return letters.splice(40, totalToDelete, '...')
.join('') + '...';
}
console.log(formatString('bdjadbcisdbfshaofhoashfhsofbsdfjbsdfhoshfiahfhhoe')); 


//№5
//*

const checkForSpam = function(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true; 
    } else {
        return false; 
    }
}
//Наприклад
console.log(checkForSpam("Buy this amazing product!"));
console.log(checkForSpam("Hurry up, don't miss this sale!"));
console.log(checkForSpam("Get rid of spam emails!")); 



//№6
//*

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число:");

    if (input === null) {
        break;
    }

    const number = Number(input);
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Було введено не число, попробуйте ще раз.");
    }
}

if (numbers.length > 0) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній.");
}

