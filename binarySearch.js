function search(array , num)
{
    let min =0;
    let max= array.length-1;
    while(min<=max)
    {
        let midIndex = Math.floor((min+max)/2);
        if(array[midIndex]<num)
        {
            min =midIndex+1;
        }else if(array[midIndex]>num)
        {
            max = midIndex-1;
        }
        else{
            return midIndex;
        }
    }
}
const result = search([1,2,3,4,5,6,7,8,9,10,11] , 8);
console.log("Index is : " , result);