var pickButton;
var pairButton;
var header;
var body;
var choice;
var aList;
var numPlace;
var removeFromList;


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
choice.innerHTML = '&nbsp;'
var rand = students.splice(Math.floor(Math.random() * (students.length),1);
var rand1 = students.splice(Math.floor(Math.random() * students.length),1);
  if (colors[cur] === undefined) {
    window.clearInterval(x);
    cur = 0;
    choice.innerText = rand + ' ' + rand1;

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
