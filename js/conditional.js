//conditional statements==> it is used to perform different actions 
//  based on diffferent conditions.
//1.if 2.else 3.else if 4.switch

let age=19;
if(age>=18)
{
    console.log("you are eligible to vote");
}
else{
    console.log("you are not eligible to vote");
}

let age1=15;
if(age1>18)
{
    console.log("you are eligible to vote");
}
else if(age1==18)
{
    console.log("you are eligible to vote but you are not an adult");
}
else{
    console.log("you are not eligible to vote");
}

let day=2;
switch(day)
{
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("firday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
        break;
}


