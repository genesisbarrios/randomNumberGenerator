var max;
var reps;
var intent = 0;

function Run(){
    var intentStr = ' ';
    clearConsole()
    log('starting...');

    if(intent == 0){
        intentStr = 'out '
    }
    log('Running with' + intentStr + 'intention.');
    getRandomArray();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function log(randomint){
    console.log(randomint);
    var newLine = document.createElement("li");
    newLine.innerHTML = (typeof txt === 'string') ? txt : JSON.stringify(randomint, null, 4);
    document.querySelector('#console').appendChild(newLine);
}

function getRandomArray(){
    max = document.getElementById('max').value;
    reps = document.getElementById('reps').value;
    console.log('max: ' + max);
    console.log('reps: '+ reps);
    var array = [];
    for(var x=0; x<reps; x++){
        var randomint = getRandomInt(2);
        log(randomint);

        array[x] = randomint;
    } 
    getAndPrintAverage(array);
}

function getAndPrintAverage(array){
    for(var x=0; x<reps; x++){
        var sum = 0;
        sum = array[x] + sum;
    } 
    var avg = sum / 10;
    log('Average: ' + avg);
    log('Mean: ' + mean(array));
    log('Median: ' + median(array));
    log('Mode: ' + mode(array));
    changeRunTextAndIntentValue();
}

function changeRunTextAndIntentValue(){
    if(intent == 0){
        intent=1;
        document.getElementById('run').innerHTML = "Run With Intent";
        document.getElementById('script').innerHTML = "Think of a number.";
    }else{
        intent=0;
        document.getElementById('run').innerHTML = "Run Again";
        document.getElementById('script').innerHTML = "Do not think of any number. Step away from the computer if you want.";
    }
}

function clearConsole(){
    document.querySelector('#console').innerHTML = "";
}

//https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript
function mean(array) {
    var total = 0, i;
    for (i = 0; i < array.length; i += 1) {
        total += array[i];
    }
    return total / array.length;
}

function median(array) {
    var median = 0, numsLen = array.length;
    array.sort();
 
    if (
        numsLen % 2 === 0 //even
    ) {
        // average of two middle numbers
        median = (array[numsLen / 2 - 1] + array[numsLen / 2]) / 2;
    } else { //odd
        // middle number only
        median = array[(numsLen - 1) / 2];
    }
 
    return median;
}

function mode(numbers) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}



