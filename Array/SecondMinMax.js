let numArray = new Array(10);
for(let i = 0; i<numArray.length; i++)
{
    //generates 10random 3 digit number
    numArray[i]=Math.floor(Math.random()*900)+100;
}
console.log(numArray);
//traversing through for loop to sort array
for(let i = 0; i<numArray.length; i++)
{
    for(let j = 0; j<numArray.length - 1; j++)
    {
        if(numArray[j]>numArray[j+1])
        {
            let temp = numArray[j];
            numArray[j]=numArray[j+1];
            numArray[j+1]=temp;
        }
    }
}
//print statements
console.log(numArray);
console.log("Second largest element: "+numArray[(numArray.length-2)]+
"\nSecond smallest element: "+numArray[1]);