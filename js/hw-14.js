// //Завдання 1
// const user = {
//     name: 'John',
//     age: 30,
//     hobby: 'reading',
//     premium: true,
//   };
//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium = false;
//   const keys = Object.keys(user);
//   for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
//   }



  //Завдання 2
//   const countProps = function(obj) {
//     return Object.keys(obj).length;
//   }
  
//   const men = {
//     name: 'John',
//     age: 30,
//     hobby: 'reading'
//   };
  

//   const propsCount = countProps(men);
// console.log(propsCount);



 //Завдання 3

// const findBestEmployee = function(employees) {
//   let maxTasks = 0;
//   let bestEmployee = '';

//   for (const [name, tasks] of Object.entries(employees)) {
//     if (tasks > maxTasks) {
//       maxTasks = tasks;
//       bestEmployee = name;
//     }
//   }
//   return bestEmployee;
// }

// const employees = {
//   John: 10,
//   Bob: 8,
//   Sarah: 12,
//   Alice: 9
// };

// console.log(findBestEmployee(employees)); 



 //Завдання 4
//  const countTotalSalary = function(employees) {
//     let totalSalary = 0;
  
//     for (const salary of Object.values(employees)) {
//       totalSalary += salary;
//     }
  
//     return totalSalary;
//   }

//   const salaries = {
//    Mari: 1000,
//    Emma: 1500,
//    Maria: 1200,
//    Sasha: 2000
//   };
  
//   console.log(countTotalSalary(salaries)); 




 //Завдання 5


// const getAllPropValues = function (arr, prop) {
//   const propValues = [];

//   for (const obj of arr) {
//     if (prop in obj) {
//       propValues.push(obj[prop]);
//     }
//   }

//   return propValues;
// }

// const products = [
//   { name: 'iPhone', price: 1000 },
//   { name: 'Samsung', price: 800 },
//   { name: 'Xiaomi', price: 500 }
// ];

// console.log(getAllPropValues(products, 'name')); 
// console.log(getAllPropValues(products, 'price')); 


  

//Завдання 6

const calculateTotalPrice = function (allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
  
    return totalPrice;
  }
 
  const products = [
    { name: 'us-1', price: 2000, quantity: 2 },
    { name: 'us-2', price: 1800, quantity: 1 },
    { name: 'us-3', price: 300, quantity: 3 }
  ];
  
  console.log(calculateTotalPrice(products, 'us-2')); 
  console.log(calculateTotalPrice(products, 'us-1')); 