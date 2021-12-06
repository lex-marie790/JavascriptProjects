var ms = 0;
var ss = 1;
var mm = 1;
var hh = 1;
var timers = false;
var msVar, ssVar, mmVar;

// grabbing the elements
const stopWatch = document.querySelector('.stopwatch');
const startButton = stopWatch.querySelector('.startButton');
const pauseButton = stopWatch.querySelector('.pauseButton');
const resetButton = stopWatch.querySelector('.resetButton');
const toggle = stopWatch.querySelector('.toggle');
const secDisplay = stopWatch.querySelector('#displayS');
const minDisplay = stopWatch.querySelector('#displayM');
const hrDisplay = stopWatch.querySelector('#displayH');

function setMs() {
	// if milliseconds is less than 10, add a 0 to the beginning, otherwise leave as it
	if (ms < 10) {
		document.getElementById('displayMs').innerHTML = '0' + ms;
	} else {
		document.getElementById('displayMs').innerHTML = ms;
	}
	// add 1
	ms = ms + 1;
	// set the delay
	msVar = setTimeout(setMs, 100);
	// if millisecond is equal or greater to 60, reset milliseconds to 0 and begin running the seconds
	if (ms >= 60) {
		setSS();
		ms = 0;
	}
}

function setSS() {
	// if seconds is equal or greater than 60, beginning running minutes and set seconds to 0
	if (ss >= 60) {
		setMM();
		ss = 0;
	}
	// if seconds is less than 10, add a 0 to the beginning, otherwise leave as it
	if (ss < 10) {
		document.getElementById('displayS').innerText = '0' + ss;
	} else {
		document.getElementById('displayS').innerText = ss;
	}
	// add 1
	ss = ss + 1;
}

function setMM() {
	// if minutes is equal or greater than 60, beginning running minutes and set minutes to 0
	if (mm >= 60) {
		setHH();
		mm = 0;
	}
	// if minutes is less than 10, add a 0 to the beginning, otherwise leave as it
	if (mm < 10) {
		document.getElementById('displayM').innerText = '0' + mm;
	} else {
		document.getElementById('displayM').innerText = mm;
	}
	// add 1
	mm = mm + 1;
}

function setHH() {
	// if hours is equal or greater than 60, beginning running minutes and set hours to 0
	if (hh >= 60) {
		setHH();
		hh = 0;
	}
	// if hours is less than 10, add a 0 to the beginning, otherwise leave as it
	if (hh < 10) {
		document.getElementById('displayM').innerText = '0' + hh;
	} else {
		document.getElementById('displayM').innerText = hh;
	}
	// add 1
	hh = hh + 1;
}

function start() {
	console.log('START');
	// if the timer is false, set the timer to true, beginning running the milliseconds
	if (!timers) {
		timers = true;
		setMs();
	}
}

function pause() {
	console.log('STOP');
	// stop the time
	clearInterval(msVar);
	timers = false;
}

function reset() {
	console.log('RESET');
	// grab the elements and reset to 00
	document.getElementById('displayM').innerText = '00';
	document.getElementById('displayS').innerText = '00';
	document.getElementById('displayMs').innerText = '00';
	// reset the variables
	ms = 0;
	ss = 0;
	mm = 0;
	timers = false;
	clearInterval(msVar);
}


// adding event listeners
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);



