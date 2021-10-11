/*Домашка на понедельник 11.10.21
  Задание 
1) На странице сделать поле ввода текста (textarea), а также кнопку Go. В поле вводим любой произвольный текст, разделенный пробелами. При нажатии на кнопку Go должно появится необходимое количество полей ввода, при этом каждое поле ввода будет заполнено одним словом из текста.*/

const btn = document.querySelector('.btn');
const main = document.querySelector('.main');

const cloneFields = () => {   
  const text = document.querySelector('.field');
  const wordArr = text.value.split(' '); 
    //console.log(wordArr); - print (3) ['one', 'two', 'three']  
    //console.log(wordArr[0]); - print 'one'
    //need take the words from input here! I don't know how to yet...
  let tempVar = '';
  for(let i = 0; i < wordArr.length; i++){
    tempVar = `${tempVar} <input class="box" ${wordArr[i]}>`;//<-don't work here 
  }  
  main.innerHTML = tempVar;
}
btn.addEventListener('click', cloneFields);

//2) Найти самое длинное слово, вывести его в консоль.

const findWord = () => {
  const text = document.querySelector('.field');
  const wordArr = text.value.split(' ');
  for(let i = 0; i < wordArr.length; i++){
    return (wordArr[i].length > wordArr[i].length)? wordArr[i].length : wordArr[i].length;
  };
  console.log(wordArr[i]);
}
findWord();

//3) С помощью имеющихся слов создать предложение ровно в 30 символов.

