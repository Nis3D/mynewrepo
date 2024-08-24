// Select the button and the div
const button = document.getElementById('myButton');
const div = document.getElementById('myDiv');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the text of the div
    div.textContent = 'The text has been changed!';
    
    // Change the background color of the div
    div.style.backgroundColor = 'lightgreen';
});