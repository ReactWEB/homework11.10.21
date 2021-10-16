/*Домашка на понедельник 11.10.21
  Задание 
1) На странице сделать поле ввода текста (textarea), а также кнопку Go. В поле вводим любой произвольный текст, разделенный пробелами. При нажатии на кнопку Go должно появится необходимое количество полей ввода, при этом каждое поле ввода будет заполнено одним словом из текста.*/

const btn = document.querySelector('.btn');
const main = document.querySelector('.main');

const cloneFields = () => {
  const text = document.querySelector('.field');
  const wordArr = text.value.split(' ');
  let tempStr = '';
  for(let i = 0; i < wordArr.length; i++){
    tempStr = `${tempStr} <div class="box">${wordArr[i]}</div>`;
  }
  main.innerHTML = tempStr;
}
btn.addEventListener('click', cloneFields);

//2) Найти самое длинное слово, вывести его в консоль.

const findWord = () => {
  
  const text = document.querySelector('.field'); //получаем доступ к инпуту
  const wordArr = text.value.split(' '); //получаем слова из инпута
  
   let bigger = wordArr.sort((a, b) => b.length - a.length);//сортируем слова от большего к меньшему
   console.log(bigger[0]);//выводим в консоль наибольшее (первое) слово.
}
findWord(); // не работает!


//3) С помощью имеющихся слов создать предложение ровно в 30 символов.

const createOffer = () => {
  const text = document.querySelector('.field').value; //получаем доступ к инпуту
  const wordArr = text;
  console.log(wordArr);
}
createOffer();