//create msg and variable to store user input
var msg = 'Enter test score' + '\nOr enter 999 to end entries'
var score_list = [];
var sum = 0;

//store prompt in a loop
do {
    var score = parseInt(window.prompt(msg));
    console.log(score);
    if(score != 999){
        sum += score;
        score_list.push(score);
    } 

} while (score < 999);

//find the number of scores entered
console.log(score_list)
var arrayLength = score_list.length;

//find the average
alert('Average score is ' + (sum/arrayLength));