
/** Feet to Mile assignment project start*/

function feetToMile(feet){
    let mile = ["Your distance are", feet / 5280, "Mile.",];
    if(feet < 0){
        mile = " It is not right calculation. Your distance is empty.";
    }
    return mile;
}
// Enter your input

let result =  feetToMile(166325);
console.log(result);

/** Feet to Mile assignment project close*/



/** Wood calculator assignment project start*/

function woodCalculator(chair, table, bed){
    let chairWoodCount = chair * 1; 
    let tableWoodCount = table * 3;
    let bedWoodCount = bed * 5;
    let totalFurnitureWoodCount = [" You have", chairWoodCount + tableWoodCount + bedWoodCount, "Square feet wood."];
    return totalFurnitureWoodCount;
}
// Enter your input

var totalWoodResult = woodCalculator(56, 35, 78);
console.log(totalWoodResult); 

/** Wood calculator assignment project close*/


/** Brick calculator project start */

function brickCalculator(floorNumber){
    if (floorNumber > 20){
        let totalHeight = (floorNumber - 20) * 10 + (12 * 10) + (15 * 10);
        return totalHeight;
    } else if(floorNumber > 10){
        let totalHeight = (floorNumber - 10) * 12+ (15 * 10);
        return totalHeight;
    } else{ 
        let totalHeight = floorNumber * 15;
        return totalHeight;
    }
}

// Enter your input
let totalBrick = brickCalculator(30)*1000;
console.log(totalBrick);

/** Brick calculator project close */



/** Tiny Friend assignment project start */

function tinyFriend(words){
    let shortest = words[0];
    for(let i = 0; i < words.length; i++){
        let currentWord = words[i];
        if(shortest.length > currentWord.length ){
            shortest = [currentWord, "is the shortest name among your friends"];
        }
    }
    return shortest;
}
// Enter your input

let shortestWord = tinyFriend(['abed', 'jabed', 'joi', 'khalek','arif']);
console.log(shortestWord);

/** Tiny Friend assignment project close */
