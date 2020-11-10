var prompt=require('prompt-sync')();

let iterator,iterator2,max1,min1,input,check,random,numOfTimes

let arr = new Array();
let arr2 = new Array();

var myMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);

while(true){
    random=Math.ceil(Math.random()*6);
    console.log(random);
    numOfTimes=myMap.get(random);
    numOfTimes++;
    myMap.set(random,numOfTimes);
    if(numOfTimes==10){
        max1=random;
        break;
    }
    
}
min1=0;
numOfTimes=10;
for(iterator=1;iterator<7;iterator++){
    if(myMap.get(iterator)<numOfTimes){
        numOfTimes=myMap.get(iterator);
        min1=iterator;
    }
}
console.log("the die rolled ",max1,", 10 times");
console.log("the die rolled ",min1,",minimum number of times which was ",numOfTimes);

myMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]);
var myMap2 = new Map([[1,"january"],[2,"february"],[3,"march"],[4,"april"],[5,"may"],[6,"june"],[7,"july"],[8,"august"],[9,"september"],[10,"october"],[11,"november"],[12,"december"]]);

for(iterator=0;iterator<100;iterator++){
    random=Math.ceil(Math.random()*12);
    numOfTimes=myMap.get(random);
    numOfTimes++;
    myMap.set(random,numOfTimes);
}

for(iterator=1;iterator<13;iterator++){
    console.log(myMap2.get(iterator),": Number of birthdays :", myMap.get(iterator));
}
