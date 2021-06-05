console.log("Welcome to Dice");
diceMap=new Map();
let flag = true;
while(flag)
{
    //generating random number between 1-6
    let diceValue=Math.floor(Math.random()*6)+1;
    //if the map already has the key increase the count and update the map
    if(diceMap.has(diceValue))
    {
        count=diceMap.get(diceValue);
        count++;
        diceMap.set(diceValue,count);
    }
    // else add new key value pair into the map
    else
    {
        diceMap.set(diceValue,1);
    }
    //console.log(diceMap);
    //check for all key-value pairs if the value=10 then come out of while loop
    for(let [key,value] of diceMap)
    {
        if(value==10)
        {
            flag=false;
            break;
        }
    }
}
for(let [key,value] of diceMap)
{
    //Check if the value = max of all the values in dicemap
    if(value==Math.max(...diceMap.values()))
    console.log("Maximum occurence: "+key+" occured for "+value+" times.");
    //Check if the value = min of all the values in dicemap
    if(value==Math.min(...diceMap.values()))
    console.log("Minimum occurence: "+key+" occured for "+value+" times.");
}