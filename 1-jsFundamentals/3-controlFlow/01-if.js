/*
falsy values:
    1. false
    2. 0
    3. "", '', ``
    4. null
    5. undefined
    6. NaN (not a number)

*/

let isOn = false; //boolean

if (isOn) {
	console.log('Light is on!');
}

if (isOn == false) {
	console.log('Light is off');
}

let weather = 80;

if (weather < 70) {
	console.log('Wear a jacket');
}
