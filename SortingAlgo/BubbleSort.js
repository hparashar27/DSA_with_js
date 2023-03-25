

// unoptimized bubble sort ->

    function BubbleSort(arr){
            for(let i = arr.length ; i>0; i--){
                for(let j=0 ; j<arr.length ; j++ ){
                    if(arr[j] > arr[j+1]){
                   let temp = arr[j];
                   arr[j] = arr[j+1];
                    arr[j+1] = temp;         
                    } 
                }
            }
           return arr;
        }
    BubbleSort([10,21,12,32,43,54])

// Optimized bubble sort ->

function BubbleSort(arr){
    let noswaps ;
            for(let i = arr.length ; i>0; i--){
                noswaps = true;
                for(let j=0 ; j<arr.length ; j++ ){
                    if(arr[j] > arr[j+1]){
                   let temp = arr[j];
                   arr[j] = arr[j+1];
                    arr[j+1] = temp;   
                    noswaps = false;      
                    } 
                }
                if(noswaps){
                    break;
                }
            }
           return arr;
        }
    BubbleSort([10,21,12,32,43,54])


