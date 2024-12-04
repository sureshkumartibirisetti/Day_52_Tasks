// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:

// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

// Weekends: Standard price of $15. Seniors and children receive a 30% discount.

// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.

var week=prompt();
var age=prompt();
age=Number.parseInt(age);
if(week=="weekdays"){
    var sp=12;
    if(65<=age || age<12){
        console.log(`Seniors (65 and older) and children (under 12) receive a 50% discount.you pay $ ${sp*0.5}`);
    }else{
        console.log(`standard price $ ${sp}`);
    }
}else if(week=="weekends"){
    var sp=15;
    if(65<=age || age<12){
        console.log(`Seniors (65 and older) and children (under 12) receive a 50% discount.you pay $ ${sp*0.3}`);
    }else{
        console.log(`standard price $ ${sp}`);
    } 
}else{
    console.log("please enter valid data");
}