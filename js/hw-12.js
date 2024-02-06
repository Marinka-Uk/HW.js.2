//№1


const helloButton = document.getElementById('helloButton');

helloButton.addEventListener('click', () => {
    alert('Hello World!');
});


//№2


const randomNumber = Math.floor(Math.random() * 100) + 1;

const checkGuess = function (userGuess) {
    if (isNaN(userGuess)) {
        console.log("Please enter a valid number between 1 and 100.");
        return;
    }

    if (userGuess < 1) {
        console.log("Please enter a number greater than or equal to 1.");
        return;
    }

    if (userGuess > 100) {
        console.log("Please enter a number less than or equal to 100.");
        return;
    }

    if (userGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number!");
    } else {
        console.log(`Sorry, the correct number was ${randomNumber}. Try again!`);
    }
}

checkGuess(50);

// Я зрозуміла це якось так, щоб ніби не застосовувати розмітку html, бо я не пам'ятаю чи Bи казали 
// виконувати точно по умові (якщо що то перепишу), відпишіть мені що до цього повідомлення
//Також я чула вроді, що 3№ завдання ви казали не робити







//№4


const applyCallbackToElements = (arr, callback) => {
    const resultArray = [];

    for (let i = 0; i < arr.length; i = i + 1) {
        resultArray.push(callback(arr[i]));
    }
    return resultArray;
}
const squareNumber = num => {
    return num * num;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = applyCallbackToElements(numbers, squareNumber);

console.log(squaredNumbers); 



//№5

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * (discount / 100));
    return callback(discountedPrice);
};

const displayDiscountedPrice = discountedPrice => {
    console.log(`Discounted price: $${discountedPrice.toFixed(2)}`);
};

const productPrice = 100; 
const discountPercentage = 20; 

calculateDiscountedPrice(productPrice, discountPercentage, displayDiscountedPrice);
