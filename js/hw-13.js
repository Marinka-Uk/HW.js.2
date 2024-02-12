//1


const bankAccount = {
    ownerName: "Marik",
    accountNumber: "1234567890",
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}$. Current balance: ${this.balance}$`);
    },
    withdraw: function(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}$. Current balance: ${this.balance}$`);
        }
    }
};

// Приклад 
bankAccount.deposit(500); // Внесення 500$
bankAccount.withdraw(200); // Зняття 200$




//2


const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    isBelowZero: function() {
        return this.temperature < 0;
    }
};

function checkTemperature(temperature) {
    weather.temperature = temperature;

    if (weather.isBelowZero()) {
        console.log("Температура нижче 0 градусів Цельсія");
    } else {
        console.log("Температура 0 градусів Цельсія або вище");
    }
}

checkTemperature(-1);


//3

const user = {
    name: "",
    email: "",
    password: "",
    login: function(emailInput, passwordInput) {
        if (emailInput === this.email && passwordInput === this.password) {
            console.log("Вхід успішний!");
        } else {
            console.log("Неправильна адреса електронної пошти або пароль. Будь ласка спробуйте ще раз.");
        }
    }
};

const emailInput = "example@example.com";
const passwordInput = "password123";
user.email = "example@examle.com";
user.password = "password123";
user.login(emailInput, passwordInput);



//4
const movie = {
    title: 'Tralalal',
    director: 'Drako Malfoy',
    year: 2019,
    rating: 9,
    checkRating: function() {
        return this.rating > 8;
    }
};

if (movie.checkRating()) {
    console.log(`Title: ${movie.title}`); 
    console.log(`Director: ${movie.director}`); 
    console.log(`Year: ${movie.year}`); 
    console.log(`Rating: ${movie.rating}`); 
} else {
    console.log(`Title: ${movie.title}`); 
    console.log(`Director: ${movie.director}`); 
    console.log(`Year: ${movie.year}`); 
    console.log(`Rating: ${movie.rating}`); 
}