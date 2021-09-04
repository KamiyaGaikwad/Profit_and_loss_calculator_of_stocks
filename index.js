var intialPrice = document.querySelector("#intial-price");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#intial-price");
var submitBtn = document.querySelector("#submit-btn");
var Output = document.querySelector("#output");

function calculateProfitandLoss(intialPrice,Quantity,currentPrice){
    if(currentPrice < intialPrice){
        var loss = (intialPrice - currentPrice)*Quantity;
        var lossPercent = (loss/intialPrice)*100;
        console.log("Sorry to say that you are in loss");
    }
    else if(currentPrice > intialPrice){
        var profit = (currentPrice - intialPrice)*Quantity;
        var profitPercent = (profit/intialPrice)*100;
        console.log("Happy to say that you are in profit");
    }
    else {
        console.log("No pain No gain and No gain No pain");
    }
}

calculateProfitandLoss(10,10,10);
calculateProfitandLoss(10,10,100);
calculateProfitandLoss(100,10,10);