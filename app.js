var user = prompt("What is your name?");

console.log("The user's name is " + user);

alert("Hi " + user + "! See if you can guess some things about Lex.");

var answer1 = prompt("Does Lex live with his brother? ('Y' or 'N', please...)");
console.log("The user answered " + answer1 + " to the first question");
if(answer1 === "N") {
  alert("Bingo! Lex lives with his sister, Cheri.");
} else {
  alert("BZZZT. Lex doesn't have a brother, only sisters.");
}

var answer2 = prompt("Does Lex have a cat named Murphy? (Again. please answer 'Y' or 'N'.)");
console.log("The user answered " + answer2 + " to the second question");
if(answer2 === "N") {
  alert("Yep! Lex's cat is named Thumbles.");
} else {
  alert("No way! Murphy is his sister's dog. (He doesn't exactly get along with the cat.)");
}

var answer3 = prompt("Does Lex watch 'Masterchef Junior' with is sister? ('Y' or 'N')");
console.log("The user answered " + answer3 + " to the third question");
if(answer3 === "N") {
  alert("Wrong. (It's her TV.)");
} else {
  alert("Yes, and sometimes with his mother as well. (When he's by himself he prefers 'The Blacklist')");
}

var answer4 = prompt("How many sisters does Lex have? (a number greater than 0, please...)");
console.log("The user answered " + answer4 + " to the fourth question");
if(answer4 == 3) {
  alert("Right on! Three is the magic number!");
} else if(answer4 < 3) {
  alert("No, his Mom kept going.");
} else {
  alert("That's too many (if it's even a number at all...)");
}