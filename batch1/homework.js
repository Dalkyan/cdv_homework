
var exercise = parseInt(prompt("Które zadanie wyświetlić?"));

switch(exercise)
{
    case 1 : zad1(); break;
    case 2 : zad2(); break;
    case 3 : zad3(); break;
    case 4 : zad4(); break;
    case 5 : zad5(); break;
    case 6 : zad6(); break;
    case 7 : zad7(); break;
    case 8 : zad8(); break;
}

function zad1(){
  let myString = prompt("Podaj ciąg liczb oddzielonych przecinkiem ',' ");
  let probablyNumbers = myString.trim().split(',');
  let numbers=[];
  let sum=0;
probablyNumbers.map(val => !isNaN(val) ? numbers.push(parseInt(val)) : console.log("Not a number"));
numbers.map(e=>sum+=e);
alert(sum / numbers.length);

}
function zad2(){
  let givenYear = parseInt(prompt("Podaj rok, a sprawdzę czy jest przestępny"));
if ((!givenYear % 4 != 0  || givenYear % 100 ==0 ) && givenYear % 400 !=0 ){
  alert("To nie jest rok przestępny")}
  else  alert("To jest rok przestępny");
}
function zad3(){
  let temperature = prompt("Podaj temperaturę w celsiuszach, a podam ile to w stopniach Fahrenheita");
alert(temperature*1.8 + 32);
}
function zad4(){
let word1 = prompt("Sprawdź czy te dwa słowa są anagramami. \n Podaj pierwsze słowo:") 
let word2 = prompt("Podaj drugie słowo:") 

word1.replace(/[^\w]/g, '').toUpperCase;
word2.replace(/[^\w]/g, '').toUpperCase;

let wordArray1 = word1.split('').sort();
let wordArray2 = word2.split('').sort();
let i = -1;
let isAnagram = true;
if(wordArray1.length!=wordArray2.length){
  isAnagram = false;
} else{
while (++i < wordArray1.length && isAnagram !== false) {

  if (wordArray1[i]!=wordArray2[i]) {
    isAnagram = false;
  }
}
}
isAnagram ? alert("To jest anagram!") : alert("To nie jest anagram!");
}
function zad5(){
let word = prompt("Sprawdź czy to dwa słowo jest palindromem:") 
word.replace(/[^\w]/g, '').toUpperCase;
let isPalindrom = true;
for (let index = 0; index < parseInt(word.length/2); index++) {
 if(word[index] != word[word.length - index - 1]){
   isPalindrom = false;
 }
  
}

isPalindrom ? alert("To jest palindrom!") : alert("To nie jest palindrom!");
}
function zad6(){
  let magicWord = "ABRAKADABRA".split('').join(' ');
  let magicTriangle = "";
  const length = magicWord.length;
  let magicArray = [];
  magicArray[0]=magicWord;
  for (let index = 1; index <= 10; index++) {
  //   let magicArray = magicWord.split('');
  //   magicArray.pop();
  //   magicArray.shift();
  //   magicArray.unshift(' ');
  //   magicArray.push(' ');
  // console.log(magicWord=magicArray.join());
// let shrinkingMagic = magicWord.slice(0,length - index - 2);
// magicTriangle += Space(index) + shrinkingMagic + "\n";

magicArray[index] = Space(index) + magicWord.slice(0,length - 2*index);
  }
  console.log(magicArray.join("\n"));
}
function zad7(){
  const n = parseInt(prompt("Podaj liczbę całkowitą dodatnią:"))
  var starBox ="";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2*n; j++) {
    starBox+='*';
    }
  starBox+="\n";
  }
  console.log(starBox);
}
function zad8(){
  const n = prompt("Podaj liczbę n");
  starTriangle=[];
  for (let index = 0; index < n; index++) {
 starTriangle[index] = Space(n-index) + Star((index+1)*2-1);
  }
  console.log(starTriangle.join("\n"));
}

  function Star(number) {
    let stars = '*';
    for (let index = 1; index < number; index++) {
      stars += '*'; 
    }
    return stars;
  }{}

  function Space (index){
  let i=1;
  let spaces = " ";
  while(i <index){
    spaces+=" ";
    i++;
  }
  return spaces;
  }