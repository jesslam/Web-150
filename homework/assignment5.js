//create variables to store user input
var msg = 'Enter test score' + '\nOr enter 999 to end entries'
var score = window.prompt(msg);
var score_list = [];
var lastScore = 999;
var arrayLength = score_list.length;
var i;

//store prompt in a loop
do {
    var nextScore = score;
    console.log(score);
    score_list.push(nextScore);
} while (score < 999);

//find the average

alert('Average score is ' + (score/arrayLength));