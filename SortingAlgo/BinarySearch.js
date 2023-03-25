
     function BinarySearch(arr ,val ){
        let start = 0 ;
        let end  = arr.length-1 ;
        let middle = Math.floor((start + val)/2);
        while( val!==arr[middle] && end>start){
        if(val<arr[middle]){
           end = middle+1;
        }else{
           start = middle-1;
        }
        middle = Math.floor((start + val)/2)
    }
    return val=== arr[middle]?middle:-1
    }
BinarySearch([1,2,3,4,5,6,7],5);
   