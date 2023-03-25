
// Linear search ->
// In the case of the JS , the methods ->
// Indexof , find , findof , includes all these methods using linear search algo -

// Linear Search 
// the time complexity -> LINEAR SEARCH O(n);

function LinearSearch(arr,n){

for(let i =0; i<arr.length ;i++){
    if(arr[i]===n){
        return i;
    }
    else{
        console.log("the array doesnt contain the given element");
    }
}
}
console.log(LinearSearch([12,23,34,45,56,65,76,54,32],56)); ;

// Binary Search for the Sorted array ->
// the time complexity -> LINEAR SEARCH O(logn);

// the pseudo code required for the binary search algorithm is like
/*
the function accepts a sorted array, and a value
create two pointers left pointer points in starting of the array and the right pointer points to the end of the array

*/
function BinarySearch(arr2,n2){
    let start = 0; 
    let end = arr2.length-1;
    let middle = Math.floor((start + end)/2);
    while(n2 !== middle && start<=end){
        if(n2>arr2[middle]){
start = middle+1;
        }else{
end = middle-1;
        }
    middle = Math.floor((start + end)/2)
    }
    return arr2[middle] === n2?middle:-1;
}
console.log(BinarySearch([1,2,3,4,5,6,7,8,9,10],10)); 

// Naive String Searching Algorithm for the string ->
// the time complexity -> LINEAR SEARCH O(m x n);
// this searching technique is used to search for substring of the string in the string
/*
Loop over the Big String 
Loop over the small string 
if the character doesn't match than break out from the inner loop
and if the character do match then keep going
if you complete the inner loop then find the match , increment the count and return the count 
*/

function Naive_Search(Long,Short){
    let count = 0;
    for(let i = 0;i<Long.length;i++){
        for(let j =0; Short.length;j++){
            if(Short[i] !== Long[i+j]){
                console.log("BREAK !");
                break;
            }
            if(j===Short.length-1){
                count++
            }
        }
    }
    return count ;
}
console.log(Naive_Search("Helelelelelelele","le"));

// KMP String Searching Algo ( Improved version of the Navie String Searching Algo. ) ->
// the time complexity -> LINEAR SEARCH O(n+m)=O(m);
