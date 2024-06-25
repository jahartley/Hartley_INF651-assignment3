//Page Framework
const title = "Assignment 3";
const date = "20240624";
const url ="https://github.com/jahartley/Hartley_INF651-assignment3";

const titleEl = document.getElementById("title");
titleEl.innerHTML = title;

const dateEl = document.getElementById("date");
dateEl.innerHTML = date;

const repositoryUrlEl = document.getElementById("repositoryUrl");
repositoryUrlEl.href = url;


//Assignment 3 function
function analyzeArray(arr) {
  res = [arr[0],arr[0],0,0];
  res[3] = arr.map(el => {
    if (el > res[0]) res[0] = el;
    if (el < res[1]) res[1] = el;
    res[2] += el;
    if (el % 2 === 0) return el;
  }).filter(el => el != null);
  res[2] /= arr.length;
  return res;
}

//string to array of numbers helper
const resultEl = document.getElementById("resultDisplay");
function makeArray(x){
  let arr = x.split(/\s*,+\s*/).map(Number).filter(Number.isFinite);
  if (arr.length > 0) {
    res = analyzeArray(arr);
    resultEl.children[0].innerHTML = `You entered: [${arr}]`;
    resultEl.children[1].innerHTML = `Maximum value: ${res[0]}`;
    resultEl.children[2].innerHTML = `Minimum value: ${res[1]}`;
    resultEl.children[3].innerHTML = `Average value: ${res[2]}`;
    resultEl.children[4].innerHTML = `Even values: ${JSON.stringify(res[3])}`;
  } else {
    [...resultEl.children].forEach((child) => child.innerHTML = "");
  }
}