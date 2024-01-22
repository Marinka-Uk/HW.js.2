//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. 
//Нехай елементи массива в рядку будут розділені комою.
// Спочатку через for
//Потім через join()


const friends = [ 'Mango', 'Poly', 'Kiwi', 'Ajax'];
let resultStringFor = '';
for (let i = 0; i < friends.length;) {
    resultStringFor += friends[i];
    if (++i < friends.length) {
        resultStringFor += ', ';
    }
}
console.log(resultStringFor);

//*

const friends2 = [ 'Mango', 'Poly', 'Kiwi', 'Ajax'];
let resultStringJoin = friends2.join(', ');
console.log(resultStringJoin);


//2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)



const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  const cardToRemove = 'Карточка-3';
  const indexOfCardToRemove = cards.indexOf(cardToRemove);
  
  if (indexOfCardToRemove !== -1) {
    cards.splice(indexOfCardToRemove, 1);
  }
  
  console.log(cards);
  

const cardToInsert = 'Карточка-6';
const indexToInsert = 2; 

cards.splice(indexToInsert, 0, cardToInsert);

console.log(cards);

const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  const updatedCard = 'Оновлена карточка-4';
  cards.splice(indexToUpdate, 1, updatedCard);
}

console.log(cards);
