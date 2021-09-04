// const newArr = [2,3,4,5];

//push front

// Given an array and an additional value,
// insert this value at the beginning of the array. Do this without using any built-in array methods.

// const pushFront = (arr, newFirstNum) => {
//     for (var x = arr.length - 1; x >= 0; x--)
//         arr[x + 1] = arr[x];
//     arr[0] = newFirstNum;
// }

// pushFront(newArr, 2);
// console.log(newArr);

//pop front

// Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().

// const popFront = (arr) => {
//     const firstNum = arr[0];
//     const reversedArr = [];
//     const unreversedArr = [];
//     console.log(arr);
//     for(var i = arr.length - 1; i >= 0; i--){
//         reversedArr.push(arr[i]);
//     }
//     console.log(reversedArr);
//     reversedArr.pop();
//     console.log(reversedArr);
//     for(var i = reversedArr.length -1; i >= 0; i--){
//         unreversedArr.push(reversedArr[i]);
//     }
//     console.log(unreversedArr);
//     return firstNum;
// }
// // console.log("hello");
// console.log(popFront(newArr));

//Insert At

// Given an array, index, and additional value, insert the value into array at given index.
// Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

const newArr = [2,3,4,5];
// const insertAt = (arr, index, val) => {
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i+1]
//         console.log(arr[i]);
//     }
//     // console.log(arr[index]);
//     arr[index] = val;
// }

const insertAt = (arr,index, newNum) => {
    for (var x = arr.length - 1; x >= 0; x--){
        arr[x + 1] = arr[x];
        console.log(arr[x]);
    }
    arr[index] = newNum;
}

console.log(insertAt(newArr, 1, 8));
