
        /*

        Bubble Sort = O(n^2)
        Insertion Sort = O(n^2)
        Selection Sort = O(n^2)
        Quick Sort = O(nlogn)
        Merge Sort = O(nlogn)
        Radix Sort - it doesn't compare between the elements ,it works on the list on the number. It works on the fact that the size of a number is decoded in the number of digits, means more digits big number

        */

// Helper funtions

// GetDigit 

function getDigit(num,n){
    return Math.floor((Math.abs(num)/Math.pow(10,n))) % 10 ;
}
getDigit(1234232,2);

// DigitCount -> 

function DigitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

// MostDigits 

function MostDigits(nums){
let maxDigits = 0;
for(let i =0; i<nums.length ; i++){
    maxDigits = Math.max(maxDigits,DigitCount(arr[i]));
}
return maxDigits;
}

function RadixSort(nums){
    let length = MostDigits(nums);
    for(let i =0 ; i<length ; i++){
        let Bucket = Array.from({length:10},()=>[]);
for(let j =0; j<nums.length ;j++){
    let digit = getDigit(nums[j],i);
    Bucket[digit].push(nums[i]);
}
nums = [].concat(...Bucket);
    }
    return arr;
}

