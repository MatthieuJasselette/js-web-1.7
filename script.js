
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

//returns a new array containing random picks from two other arrays
let pickRandomPos = (arrA, arrB) => {
  let newPos = [];
  let randomPercentX = Math.floor(Math.random()*666)+"px";
  let randomPercentY = Math.floor(Math.random()*666)+"px";
  let randomX = Math.floor(Math.random()*Math.floor(arrA.length-1));
  newPos.push(arrA[randomX]+randomPercentX);
  let randomY = Math.floor(Math.random()*Math.floor(arrB.length-1));
  newPos.push(arrB[randomY]+randomPercentY);
  return   newPos;
}

//trigger on mouseover
document.getElementById("trollButton").addEventListener('mouseover', () => {
  console.log("mouseover");//works
  let newPos = pickRandomPos(xAxisArr, yAxisArr); //contains an array
  document.getElementById("buttonBox").style = 'position:absolute ;' + newPos[0] + '; ' + newPos[1] +';';

;
  console.log(newPos);
});

console.log("Hey look in your browser console. It works!");
