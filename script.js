//Declare variables to be used
var textArea = document.querySelector(".input");
var wordCount = document.querySelector(".wordCount");
var charCount =  document.querySelector(".charCount");
var uniqueCount = document.querySelector(".uniqueCount");

//Add an event listener. What is an event listener? 
//What are the different types of events we have in JS.
textArea.addEventListener("input", counts);

//Declare the function which was called above.
function counts () {
    var textValue = textArea.value.trim();
    var words = textValue === "" ? 0 : textValue.split(/\s+/).length; //Study more on tenary operator and 
    var characters = textValue.length; //Study more length property in JS.
    var uniqueWords = new Set(textValue.match(/\b\w+\b/g)).size; //Study more on Set in JS.

    wordCount.innerHTML = "Word : " + words;
    charCount.innerHTML = "Character count : " + characters;
    uniqueCount.innerHTML = "Unique counts : " + uniqueWords;
}