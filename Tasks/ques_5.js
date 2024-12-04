// Context: An event registration system needs to validate user inputs before confirming their registration:

// The user must be 18 years or older to register.

// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

// The user must provide a valid email address.

// Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.

var age=Number.parseInt(prompt());
var alreadyRegis=Number.parseInt(prompt());
var mail=prompt("Mail should be lowercase and containing @ and '.' :");
var validMail=true;
var c=0;
for(var i=0;i<mail.length;i++){
    var ch=mail.charAt(i);
    if((ch>='a' && ch<='z')||(ch=='@')||(ch=='.')){
        c++;
    }
}
if(c==mail.length){
    validMail=true;
}else{
    validMail=false;
}
if(age>=18 && alreadyRegis<=100 && validMail){
    console.log("user successfully registered the event");
}else{
    console.log("You are Not eligible for the event because some or all conditions are not met");
}
