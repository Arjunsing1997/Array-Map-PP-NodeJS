

let primeFactorsArray= new Array();
async function PrimeFactorization()
{
    let checkForFactors= false;
    console.log("Please enter the first no. to get prime factors");
    //taking input for calculating prime factors
    let n= Math.floor(Math.random() * 100);
    console.log("n ="+n);
    //iterating over all values, which divides n
    for(let i=2;i<=n;i++)
    {
        if(n%i==0)
        {
            //finding if the particular value is  prime no or not
            //check is bool value
           check= prime(i);
           if(!check)
           {
               //prints prime factors
               console.log("Prime Factors: "+i);
               primeFactorsArray.push(i);
               checkForFactors=true;

           }
           else
           {
               continue;
           }
        }
    }
    //if check for factors remain false, then there are no factors of numbers and number itself is prime
    if(!checkForFactors)
    {
        console.log("No has no prime factors, and itself is prime");
    }
    console.log("Prime Factors Array: "+primeFactorsArray);
}
function prime(n)
{
    let check=false;
    //iterating loop upto n/2
    for(let i=2;i<=Math.ceil(n/2);i++)
    {
        //if n is divisible by any iterator, then n is not prime no
        if(n%i==0)
        {
            return true;
            //console.log(n +" is not a prime number");
            break;
        }
    }
    //if check is still false
    //then n is prime number.   
    if(!check)
    {
        return false;
        //console.log(n+" is a prime number.");
    }
}
PrimeFactorization();