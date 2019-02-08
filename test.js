let xAxisArr = ["top", "center", "bottom"];
let yAxisArr = ["right", "center", "left"];

let pickRandomPos = () => {
  let newPos = [];
  let randomX = Math.floor(Math.random()*Math.floor(xAxisArr.length-1));
  console.log(randomX);
  newPos.push(xAxisArr[randomX]);
  let randomY = Math.floor(Math.random()*Math.floor(yAxisArr.length-1));
  console.log(randomY);
  newPos.push(yAxisArr[randomY]);
  return   newPos;
}

document.getElementById("trollButton").addEventListener('mouseover', () => {

});

console.log(pickRandomPos())
