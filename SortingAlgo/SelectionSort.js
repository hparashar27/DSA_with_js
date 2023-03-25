
        function SelectionSort(arr){
            for(let i = 0; i<arr.length ;i++){
                let minimum = i;
                for(let j = i+1; j<arr.length ;j++){
                    if(arr[j]<arr[minimum]){
                        minimum = j;
                    }
                    if(i !== minimum){
// swap of the i and minimum
                   let temp = arr[i];
                   arr[i] = arr[minimum];
                    arr[minimum] = temp;
                    }
                }
            }
            return arr;
        }

        SelectionSort([1,2,34,3,21,4,54,32])
   