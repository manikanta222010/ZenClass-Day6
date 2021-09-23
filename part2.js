// Porblem 1: Write a code to print the numbers in the array
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 1; i <= 11; i++) {
    new_string += numsArr[i - 1]
}
console.log(new_string);



// Problem 2: Write a code to print the numbers in the array
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 1; i < 11; i++) {
    new_string += numsArr[i - 1] + ","
}
new_string += numsArr[numsArr.length - 1]
console.log(new_string);



// Porblem 3: Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var new_string = "";

for (var i = 11; i > 0; i--) {
    new_string += numsArr[i - 1] + " "
}
console.log(new_string.trim());


// Problem 4: Write a code to replace the array value — If the number is even, replace it with ‘even’.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        numsArr[i] = "odd"
    }
    else {
        numsArr[i] = "even"
    }
}
console.log(numsArr);


// Problem 5: Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        numsArr[i] = "even"
    }
}
console.log(numsArr);


// Problem 6: Write a code to add all the numbers in the array
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
    sum += numsArr[i]
}
console.log(sum);


// Problem 7: Write a code to add the even numbers only
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < 10; i++) {
    if (numsArr[i] % 2 == 0)
        sum += numsArr[i]
}
console.log(sum);


// Problem 8: Write a code to add the even numbers and subract the odd numbers
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        sum += numsArr[i]
    }
    else {
        sum -= numsArr[i]
    }
}
console.log(sum);


// Problem 9: Write a code to print inner arrays
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i])
}


// Porblem 10: Write a code to print elements in the inner arrays
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var strAll = "";
for (let i = 0; i < numsArr.length; i++) {
    var innerArray = numsArr[i];
    for (var j = 0; j < innerArray.length; j++) {
        strAll = strAll + innerArray[j] + " "
    }
}
console.log(strAll);




// Problem 11: Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
    var innerArray = numsArr[i];
    for (var j = 0; j < innerArray.length; j++)
        if (j % 2 == 0) {
            numsArr[i][j] = "even"
        }
}
console.log(numsArr);



// Problem 12: Write a code to print elements in the inner arrays in reverse
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var strAll = "";
for (var i = numsArr.length - 1; i >= 0; i--) {
    var innerArray = numsArr[i];
    for (var j = innerArray.length - 1; j >= 0; j--)
        strAll = strAll + innerArray[j] + " "
}
console.log(strAll);



// Problem 13: Write a code to add elements in the inner arrays based on odd or even values
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var sumOdd = 0;
var sumEven = 0;
for (var i = 0; i < numsArr.length; i++) {
    var innerArray = numsArr[i];
    for (var j = 0; j < innerArray.length; j++) {
        if (innerArray[j] % 2 != 0) {
            sumOdd += innerArray[j]
        }
        else {
            sumEven += innerArray[j]
        }
    }
}
console.log(sumOdd);
console.log(sumEven);