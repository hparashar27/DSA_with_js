
        // merging two sorted arrays
        function MergeTwoSortedArray(arr1,arr2){
            let result = [];
            let i=0;
            let j=0;
            while(i<arr1.length && j<arr2.length)
            {
                if(arr1[i]<arr2[j]){
                   result.push(arr1[i])
                    i++;
                }
                else{
                    result.push(arr2[j])
                }
            }
            while(i<arr1.length){
                result.push(arr1[i])
                    i++;
            }
            while(j<arr2.length){
                result.push(arr2[j])
                j++;
            }
            return result;
        }

        // In case of the merging of the two array we use recurrsion for the spiliting the given array in two halves ->

        function MergeSort(arr){
            let middle = Math.floor(arr.length/2);
            let left = MergeSort(arr.slice(0,mid));
            let right = MergeSort(arr.slice(mid));
            arr = MergeTwoSortedArray(left,right);
            return arr;
        }