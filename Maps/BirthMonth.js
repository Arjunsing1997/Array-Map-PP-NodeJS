bDayMap = new Map();
//Initializes start date
startDate=new Date("1 Jan 1992");
//Initializes end date
endDate= new Date("31 Dec 1993");

// generate 50 random dates between the above specified dates
for(let i=0;i<50;i++)
{
    // date.getTime() gives total milliseconds till the date from 1970/01/01
    randomDate = new Date(startDate.getTime()+Math.random()*(endDate.getTime()-startDate.getTime()));

    bDayMap.set((i+1),randomDate);
}
sameMonthBdayMap = new Map();
for(let [key1,value1] of bDayMap)
{
    arr = [];
    month=value1.getMonth();
    for(let [key2,value2] of bDayMap)
    {
        //checking if the month value is same and then pushing into array and map
        if(value2.getMonth()==month)
        {
            arr.push(key2);
            sameMonthBdayMap.set(value2.getMonth(),arr);
        }      
    }
}
// printing values
for(let [key,value] of sameMonthBdayMap)
{
    console.log("Month: "+key+". Person id: "+value);
}