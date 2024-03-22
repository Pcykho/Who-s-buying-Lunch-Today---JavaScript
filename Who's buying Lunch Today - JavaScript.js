// "Who's buying Lunch Today?" Challenge with JavaScript. Programmed by Pcykho Duke.
// Special thanks to Angela Yu @ AppBrewary.

var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function randomName () {

    var numberOfPeople = nameList.length;
    var count = (Math.random () * numberOfPeople);
    
    count = Math.floor(count);
    
    var name = nameList [count];

    return (name + " is going to buy lunch today!");
}

//check console log for the output, he/she's paying for the lunch today !!!