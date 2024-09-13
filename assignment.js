

function calculateTax(income, expenses) {
    
    if(income < 0 || expenses < 0 || expenses > income){
        
        return "Invalid Input";
    }
    
    let contrast = income - expenses;
    let tax = contrast*.20;
    
    return tax;
}


function sendNotification(email) {
    
    if(!email.includes('@')){

        return "Invalid Email"
    }
    
    let splitEmail = email.split('@')
    
    let userName = splitEmail[0]
    let domainName = splitEmail[1]
    
    let message = userName + ' sent you an email from ' + domainName
    
    return message;   
}


function checkDigitsInName(name) {
    
    if(typeof name !== 'string'){

        return 'Invalid Input';
    }
    
    const arr = name.split('')
    
    for(let i=0; i<arr.length; i++){
        
        if(!isNaN(arr[i])){
            
            return true;
        }   
    }
    
    return false;
}


function calculateFinalScore(obj) {
    
    if(typeof obj !== 'object'){
        
        return "Invalid Input";
    }
    
    let totalScore = obj.testScore + obj.schoolGrade
    
    if(obj.isFFamily ){

        totalScore += (totalScore*0.2);
    }
    
    if(totalScore >=80){

        return true;
    }
    
    else{

        return false;
    }  
}


function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        
        return "Invalid Input";
    }
    
    let sum = 0;

    for(i=0; i<waitingTimes.length; i++){
        
        sum+= waitingTimes[i];
    }
    
    let avgTime = Math.round( sum / waitingTimes.length)
    
    let secondInput = serialNumber - 1 - waitingTimes.length
    
    let waitingTime = secondInput * avgTime
    
    return waitingTime;
    
}

