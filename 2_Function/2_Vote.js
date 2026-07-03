function vote(age){
    if(age>18){
        console.log("You are eligible to vote");
    }
    else if(age<1){
        console.log("Invalid Input");
    }
    else{
        console.log("You are not eligible to vote");
    }
}

vote(0);