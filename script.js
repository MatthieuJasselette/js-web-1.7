
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//Arrays containing accepted values for position
let xAxisArr = ["top : ", "bottom : "];
let yAxisArr = ["right : ", "left : "];
let numberOfTry = 0;

//returns a new array containing random picks from two other arrays
let pickRandomPos = (arrA, arrB) => {
  let newPos = [];
  let randomPercentX = Math.floor(Math.random()*100)+"%";
  let randomPercentY = Math.floor(Math.random()*666)+"px";
  let randomX = Math.floor(Math.random()*Math.floor(arrA.length-1));
  newPos.push(arrA[randomX]+randomPercentX);
  let randomY = Math.floor(Math.random()*Math.floor(arrB.length-1));
  newPos.push(arrB[randomY]+randomPercentY);
  return   newPos;
}

let commentArray = ["Good job !", "Remember, you only fail when you give up.", "You're almost there.", "Don't give up, you can do it.", "We all believe you can do it.", "As long as you keep trying, you're bound to meet success."]

let randomizeComment = (comArr) => {
  let  randomComment = "";
  randomComment = comArr[Math.floor(Math.random()*comArr.length)];
  return randomComment;
}

//trigger on mouseover
document.getElementById("trollButton").addEventListener('mouseover', () => {
  numberOfTry ++
  if(numberOfTry%5===0){
    window.alert(randomizeComment(commentArray) + ` You have tried ${numberOfTry} times.`);
  //   document.getElementById("trollButton").innerText=`You have tried ${numberOfTry} times.`;
  // } else {
  //   document.getElementById("trollButton").innerText=`Click me !`;
  }
  let newPos = pickRandomPos(xAxisArr, yAxisArr); //contains an array
  document.getElementById("trollButton").style = 'position:absolute ;' + newPos[0] + '; ' + newPos[1] +';';

;
  console.log(newPos);
});

console.log("Hey look in your browser console. It works!");
