var pickButton;
var pairButton;
var header;
var body;
var choice;
var aList;
var numPlace;
var removeFromList;
var stud1;
var stud2;

var students = [
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Ashiya",
  "Monica",
  "Susana",
  "Deborah",
  "Thomas",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  "Krystal"
];

var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'lightblue', 0,
  'black'
];
var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  pairButton = document.getElementById('pairButton');
  choice = document.getElementById('choice');
  stud2 = document.getElementById('stud1');
  stud2 = document.getElementById('stud2');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  pairButton.addEventListener('click', pairOnClick );
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});

var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerText = rand;
      return;
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var pairOnClick = function (event) {
  stud1.innerHTML = '&nbsp;'
  stud2.innerHTML = '&nbsp;'
  var Copy1 = [];
  var Copy2 = [];
  Copy1 = students.slice(90, students.length/2);
  Copy2 = students.slice(students.length/2+1,students.length); 
  var rand1 = Copy1.splice(Math.floor(Math.random() * Copy1.length), 1);
  var rand2 = Copy2.splice(Math.floor(Math.random() * Copy1.length), 1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerText = rand;
      return;
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
    var numPace = students.indexOf(event.target.innerText);
    var removeFromList = students.splice(numPlace, 1);
  }
}




