function findSecLargest(arr){
    let max=Number.MIN_SAFE_INTEGER;
    let maxPos =-1;
    let secMax=Number.MIN_SAFE_INTEGER;;
    let position = -1;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            secMax=max;
            position=maxPos;
            max=arr[i];
            maxPos=i;
        }
        else if(max>arr[i] && secMax<arr[i]){
            secMax=arr[i];
            position=i;

        }
     
    }
    console.log("Second largest element is at position "+position);

}

const arr = [10,8, 20,5];
//const arr = [20,8,20,5,12];
//const arr = [10, 10,10];
findSecLargest(arr);