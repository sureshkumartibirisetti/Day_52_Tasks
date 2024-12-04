// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.

var cust="VIP";
var money=100;
var ten=money*0.1;
var five=money*0.05;
var fifteen=money*0.15;
var twenty=money*0.2;
if(cust=="Regular"){
    if(money<100 && money>0){
        console.log(`No discount for purchases under $100 you pay $ ${money}`);
    }
    else if(money>=100 && money<=500){
        console.log(`A 5% discount for purchases between $100 and $500.you pay $ ${money-five} `);
    }
    else if(money>500){
        console.log(`A 10% discount for purchases over $500.you pay $ ${money-ten}`);
    }
    else{
        console.log("Invalid amount")
    }
}
else if(cust=="VIP"){
    if(money<100 && money>0){
        console.log(`10% discount for purchases under $100 you pay $ ${money-ten}`);
    }
    else if(money>=100 && money<=500){
        console.log(`A 15% discount for purchases between $100 and $500.you pay $ ${money-fifteen} `);
    }
    else if(money>500){
        console.log(`A 20% discount for purchases over $500.you pay $ ${money-twenty}`);
    }
    else{
        console.log("Invalid amount");
    }
}
else{
    console.log("Invalid membership");
}



