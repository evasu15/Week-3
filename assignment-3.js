// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3,9,23,64,2,8,28,93]; 

// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
console.log(ages[ages.length -1] - ages[0])


// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(45);
console.log(ages[ages.length -1] - ages[0])

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let sum = 0;
    for(let i = 0; i < ages.length; i++) {
        sum+= ages[i];
    }
    console.log(Math.round(sum/ages.length))

// 2.	Create an array called names that contains the following values: : ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ["Sam","Tommy","Tim","Sally","Buck","Bob"]

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let totalLetters = 0
for(let i = 0; i < names.length; i ++){
    totalLetters += names[i].length;
}
console.log(totalLetters / names.length);
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let result = '';
for(let i = 0; i < names.length; i ++){
    result = result.concat(names[i] + '' );
}
console.log(result);
// 3.	How do you access the last element of any array?
// By using the length proberty = 0
// Example:
let MyFavoriteSports = ["Boxing","Basketball","football","Soccer","Track"]
console.log(MyFavoriteSports[4]);
// The last element "Track" will print to the web browser

// How do you access the first element of any array?
// By using the length proberty = -1
// Example:
let boxingPunches = ["Jab","Cross","Hooks","Uppercut",]
console.log(boxingPunches[0]);
// The first element "Jab" will print to the web browser 

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for(i = 0; i < names.length; i++){
nameLengths[i] = names[i].length;
}

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let nameLengthsSum = 0;
for(let i = 0; i < nameLengths.length; i++){
nameLengthsSum += nameLengths[i];    
}
console.log(nameLengthsSum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function repeatWord(word, n) {
    let string = '';
    for(let i = 0; i < n; i++){

            string += word;
    }
    return string;
}

console.log(repeatWord('hello', 3));
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log("Eddie","Vasquez");
// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(array){
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        count += array[i];    
    }

    return count > 100;
}
console.log(sumGreaterThan100(ages));
// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(array){
    let sum = 0
    for(let i = 0; i < array.length; i ++) {
        sum += array[i];
    }
    return(Math.round(sum/array.length));
}
console.log(average(ages))
// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverage(array1,array2){
    const average1 = average(array1);
    const average2 = average(array2);

    return average1 > average2;
}
console.log(compareAverage(ages,[3,6,9]));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket = 0){
    return isHotOutside && moneyInPocket > 10.5;
}

console.log(willBuyDrink(true,25))

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function isCarOnList(list, car){
    for(let i = 0; i < list.length; i++) {
        if(list[i].toLowerCase() == car.toLowerCase() ){
            return true;
        }
    }
        return false; 
}
let carList = ["Viper","Charger","Challenger","Mustang","Dart"]
console.log(isCarOnList(carList, "charger"));
// 