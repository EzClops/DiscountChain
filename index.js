
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// Discount Chain
// our goal is to make a logic checkout system that returns the total cost of all refills including if the customer has a sub &&|| coupon

function subscription(customer){
    let totalPrice = customer.refills * customer.pricePerRefill;
    let discountValue = 0;
    let finalAmount = 0;
    // If the customers sub is true, determine the refill total and then multiple 25% to the total price
    if(customer.subscription === true){
        // find the difference from total price and discount price to get answer
        discountValue = totalPrice * .25;
        
    }
    finalAmount = totalPrice - discountValue;

    // return a console log with "Your grand total is ${finalAmount}."
    return console.log(`Sarah => Your grand total is $${finalAmount}.`);
    
}


function coupon(customer){
    let totalPrice = customer.refills * customer.pricePerRefill;
    let finalAmount = 0;
    // If the customer coupon is true, determine the refill total and then subtract $10 from total price
    if(customer.coupon === true){
        finalAmount = totalPrice - 10;
        
        // return a console log with "Your grand total is ${finalAmount}.
        return console.log(`Timmy => Your grand total is $${finalAmount}.`);
    }else{
        finalAmount = totalPrice
        return console.log(`Timmy => Your grand total is $${finalAmount}.`);
    }
    
} 

function subAndCoupon(customer){
    let totalPrice = customer.refills * customer.pricePerRefill;
    let discountValue = 0;
    let finalAmount = 0;
    // If the customer coupon is true and sub is true, determine the refill total multiply 25% to total price
    if(customer.subscription === true && customer.coupon === true){
        discountValue = totalPrice * .25;
        // Find the difference from total and subtract $10
        finalAmount = (totalPrice - discountValue) - 10;
        
    }
    // return a console log with "Your grand total is ${finalAmount}."
    return console.log(`Rocky => Your grand total is $${finalAmount}.`)
}

coupon(timmy);
subscription(sarah); 
subAndCoupon(rocky);