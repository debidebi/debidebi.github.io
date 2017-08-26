var pickButton;
var pairButton;
var header;
var body;
var choice;
var aList;



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
  var aListOnClick = document.getElementById("myelement");
var isStruck = (ele.style.getProperty("text-decoration") == "line-through");

  pickButton.addEventListener('click', pickOnClick );
  pairButton.addEventListener('click', pickOnClick );
  aList.addEventListener('click', aListOnClick );
  

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let ul = document.createElement('ul');
    (if(isStruck  == 'line through')
       continue; )
    ul.innerText = students[i];
    else aList.append(ul);
  }
});



var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students[Math.floor(Math.random() * students.length)];
  
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
  var rand = students[Math.floor(Math.random() * students.length)];
    if(students[rand] === students[i]) {
  students[rand] = students[rand++];
    picks.push(students[i] + " gets " + students[random]);
    used.push(students[rand]);
} else {
    picks.push(students[i] + " gets " + students[random]);
    used.push(students[rand]);

}

console.log("picked array: ")
for(var k=0; k<picks.length; k++) {
console.log(picks[k]);
}
console.log("used array: " + used);
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
  if (event.target.tagName === 'UL') {
    event.target.style.textDecoration = 'line-through';
  }
}



