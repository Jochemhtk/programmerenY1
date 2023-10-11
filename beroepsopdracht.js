/* templates
else if (givenAnswer === ) {
        
    }
const a = ["A", "a", "A.", "a."];
var story1 = (`story 1 test`);
var choice1 = (`question 1 test`);
var end1 = (`end 1`);
*/

var readlineSync = require("readline-sync");
// readlineSync active

const a = ["A", "a", "A.", "a."];
const b = ["B", "b", "B.", "b."];
const c = ["C", "c", "C.", "c."];
// array for answer, user error failsafe

var story0 = (`story 0 test`);
var story1 = (`story 1 test`);
var story2 = (`story 2 test`);
var story3 = (`story 3 test`);
var story4 = (`story 4 test`);
var story5 = (`story 5 test`);
var story6 = (`story 6 test`);
var story7 = (`story 7 test`);
var story8 = (`story 8 test`);
var story9 = (`story 9 test`);
var story10 = (`story 10 test`);
var story11 = (`story 11 test`);
var story12 = (`story 12 test`);
var story13 = (`story 13 test`);
var story14 = (`story 14 test`);
var story15 = (`story 15 test`);
var story16 = (`story 16 test`);
var story17 = (`story 17 test`);
var story18 = (`story 18 test`);
var story19 = (`story 19 test`);
var story20 = (`story 20 test`);
var story21 = (`story 21 test`);
// all story prats

var choice0 = (`question 0 test`);
var choice1 = (`question 1 test`);
var choice2 = (`question 2 test`);
var choice3 = (`question 3 test`);
var choice4 = (`question 4 test`);
var choice5 = (`question 5 test`);
var choice6 = (`question 6 test`);
var choice7 = (`question 7 test`);
var choice8 = (`question 8 test`);
var choice9 = (`question 9 test`);
var choice10 = (`question 10 test`);
var choice11 = (`question 11 test`);
var choice12 = (`question 12 test`);
var choice13 = (`question 13 test`);
var choice14 = (`question 14 test`);
var choice15 = (`question 15 test`);
var choice16 = (`question 16 test`);
var choice17 = (`question 17 test`);
var choice18 = (`question 18 test`);
var choice19 = (`question 19 test`);
var choice20 = (`question 20 test`);
var choice21 = (`question 21 test`);
// all choices

var end0 = (`end 0`);
var end1 = (`end 1`);
var end2 = (`end 2`);
var end3 = (`end 3`);
// all endings

var currentStory = story1;
var currentChoiceA = choice0;
var currentChoiceB = choice1;
var currentChoiceC = choice2;

function questionThreeAnswers (story, choiceA, choiceB, choiceC) {
    var answer = readlineSync.question(`${story}\n A. ${choiceA}\n B. ${choiceB}\n C. ${choiceC}\n `);
    const Atf = a.some(a => answer.includes(a));
    const Btf = b.some(b => answer.includes(b));
    const Ctf = c.some(c => answer.includes(c));

    console.log(Atf);
    console.log(Btf);
    console.log(Ctf);

    if (Atf === true) {
         return choiceA;
    }
    else if (Btf === true) {
        return choiceB;
    }
    else if (Ctf === true) {
        return choiceC;
    }
    else {
        console.log(`Dit is een ongelding answer. answer met A, B of C!`)
        return questionThreeAnswers(story, choiceA, choiceB, choiceC);
    }
}
//function for multiplechoice question with three answers

function questionTwoAnswers (story, choiceA, choiceB) {
    var answer = readlineSync.question(`${story}\n A. ${choiceA}\n B. ${choiceB}\n`);
    const Atf = a.some(a => answer.includes(a));
    const Btf = b.some(b => answer.includes(b));

    console.log(Atf);
    console.log(Btf);

    if (Atf === true) {
         return choiceA;
    }
    else if (Btf === true) {
        return choiceB;
    }
    else {
        console.log(`Dit is een ongelding answer. answer met A, B of C!`)
        return questionTwoAnswers(story, choiceA, choiceB);
    }
}
//function for multiplechoise question with two answers

function nextQuestion(givenAnswer) {
    if (givenAnswer === choice0){
        console.log(`TEST choice0`)
        currentChoiceA = choice4;
        currentChoiceB = choice5;
        currentChoiceA = choice6;
        return story1;
    }
    else if (givenAnswer === choice1) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice2) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice3) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice4) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice5) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice6) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice7) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice8) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story; 
    }
    else if (givenAnswer === choice9) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice10) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice11) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice12) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice13) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice14) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice15) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice16) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice17) {
        console.log(`TEST choice`)
        currentChoiceA = choice;
        currentChoiceB = choice;
        currentChoiceA = choice;
        return story;
    }
    else if (givenAnswer === choice18) {
        console.log(`TEST end0`)
        return end0;
    }
    else if (givenAnswer === choice19) {
        console.log(`TEST end1`)
        return end1;
    }
    else if (givenAnswer === choice20) {
        console.log(`TEST end2`)
        return end2;
    }
    else if (givenAnswer === choice21) {
        console.log(`TEST end3`)
        return end4
    }

}
// function for correct squential answer


var givenAnswer = questionThreeAnswers(story0, choice0, choice1, choice2);
console.log(`Gekozen answer: ${givenAnswer}`);

var currentStory = nextQuestion(givenAnswer);
console.log(givenAnswer);


while (currentStory !== end0 || currentStory !== end1 || currentStory !== end2 || currentStory !== end3) {
    var givenAnswer = questionThreeAnswers(currentStory, currentChoiceA, currentChoiceB, currentChoiceC);
    console.log(`Gekozen answer: ${givenAnswer}`);

    var currentStory = nextQuestion(givenAnswer);
    console.log(givenAnswer);
}

