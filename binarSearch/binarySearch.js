//
// function binarySearch(arr,value) {
//
//     let start = 0;
//     let last = arr.length-1;
//     let middle = Math.floor((start+ last)/2);
//
//     while(arr[middle] !== value && start <= last){
//
//         if (arr[middle] < value){
//
//             start = middle +1;
//
//         }else {
//             last = middle -1;
//         }
//          middle = Math.floor((start+ last)/2);
//
//         if(arr[middle] === value){
//             return middle;
//         }
//     }
//     return -1;
//
// }
//
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,13,14,15],13));
//
//


function binarySearch(arr,value) {

    let start = 0;
    let last = arr.length-1;
    let middle = Math.floor((start+ last)/2);
    while(arr[middle] !== value && start <= last) {
        if (arr[middle] < value) start = middle + 1;
        else last = middle - 1;
        middle = Math.floor((start + last) / 2);
    }
        return (arr[middle] === value) ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,13,14,15],13));


