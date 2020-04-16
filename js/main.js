// DOM Elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM'

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    // Call function every second
    setTimeout(showTime, 1000);
}

// Add Zeroes
function addZero(number) {
    // Parses the number that is input and adds a zero before it if it's less than 10 
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center center';
        document.body.style.color = 'white';
    }
}

// Get name
function getName() {
    //checking local storage for name, if not, set a default
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    // The e is for event
    if(e.type === 'keypress'){
        // Make sure enter is pressed, enter's value is 13
        if(e.which == 13 || e.keyCode == 13) {
         // e.target is what was clicked or pressed enter on
         localStorage.setItem('name', e.target.innerText);
         // blur means to click offf of or unfocus something
         name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get focus
function getFocus() {
    //checking local storage for name, if not, set a default
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    // The e is for event
    if(e.type === 'keypress'){
        // Make sure enter is pressed, enter's value is 13
        if(e.which == 13 || e.keyCode == 13) {
         // e.target is what was clicked or pressed enter on
         localStorage.setItem('focus', e.target.innerText);
         // blur means to click offf of or unfocus something
         focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

// Run
showTime();
setBgGreet();
getName();
getFocus();