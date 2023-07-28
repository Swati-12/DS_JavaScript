function squareOfArray(array1 , array2)
{
    for(let i=0;i<array1.length;i++)
    {
        let isSqauare =false;
        for(let j=0;j<array1.length;j++)
        {
            if(array1[i]*array1[i]===array2[j])
            {
                isSqauare=false;
            }
            if(j===array2.length-1)
            {
                if(!isSqauare)
                { 
                    return true;
                }
            }
            
        }
    }
    return true;
}

const result = squareOfArray([1,2,3,4] , [2,4,9,5])
console.log("Result" , result);