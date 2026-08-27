function findLargest(arr){
    let maxEl=arr[0];
    let position = 0;
    
    for(let i=1;i<=arr.length-1;i++){
        if(arr[i]>maxEl){
            maxEl=arr[i];
            position=i;
        }
    }
    console.log("Largest Element is "+maxEl+" at index "+position);
}

const array =  [40,8,50,100];
findLargest(array);