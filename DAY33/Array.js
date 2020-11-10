var prompt = require('prompt-sync')();

let iterator,iterator2,max1,max2,min1,min2,input,check

let arr = new Array();
let arr2 = new Array();

for(iterator=0;iterator<10;iterator++){
    arr.push(Math.floor(Math.random()*1000));
    console.log(arr[iterator])
}
max1=1;max2=0;min1=998,min2=999;

for(iterator=0;iterator<10;iterator++){
    if(arr[iterator]>max1){
        max2=max1;
        max1=arr[iterator];
    }
    else if(arr[iterator]>max2){
        max2=arr[iterator];
    }
    if(arr[iterator]<min1){
        min2=min1;
        min1=arr[iterator];
    }
    else if(arr[iterator]<min2){
        min2=arr[iterator];
    }
}
console.log("Second largest Number = " , max2 , "Second smallest Number = ", min2);

arr.sort(function(a,b){return a-b;});
console.log("Second largest Number = " , arr[8] , "Second smallest Number = ", arr[1]);

console.log("Enter number to get its factor");
input = parseInt(prompt());
for (iterator2 = 2; iterator2 <= input / 2; iterator2++) {
    if (input % iterator2 == 0) {
        check = false;
        for (iterator = 2; iterator <= Math.sqrt(iterator2); iterator++) {
            check = false;
            if (iterator2 % iterator == 0) {
                check = true;
                break;
            }
        }
        if (!check)
            arr2.push(iterator2);
    }
}
for(iterator=0;iterator<arr2.length;iterator++){
    console.log(arr2[iterator]);
}

console.log("Enter 10 numbers");
for(iterator = 0; iterator<3;iterator++){
    input=parseInt(prompt());
    arr2[iterator]=input;
}
if(arr2[0]+arr2[1]+arr2[2]==0){
    console.log("Sum is zero");
}
else
console.log("Sum not zero");
arr2=new Array();
for(iterator=0;iterator<100;iterator++){
    if(iterator%11==0&&iterator!=0){
        arr2.push(iterator);
    }
}
console.log(arr2.toString());