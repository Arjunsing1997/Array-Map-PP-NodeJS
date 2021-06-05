repeatedDigitsArr=[];
let divisor = 11;
//traversing through for loop
for(let i=10;i<100;i++)
{
    if( i % divisor == 0)
    {
        repeatedDigitsArr.push(i);
    }
}
console.log("Repeated digits content:") 
console.log(repeatedDigitsArr); 