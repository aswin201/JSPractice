let arr = [12, 25, 31, 23, 75, 81, 100], temp;
//  arr.sort((a,b)=>a-b)  /*Sorting the given array using Array.sort() method */
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);