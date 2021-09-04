var intialPrice = document.querySelector("#intial-price");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var Output = document.querySelector("#output");

submitBtn.addEventListener("click",calculator);

function calculateProfitandLoss(IP,Q,CP){
    if(CP < IP){
        var loss = (IP - CP)*Q;
        var lossPercent = (loss/IP)*100;
        // console.log("Sorry to say that you are in loss");
        var message = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercent}% ☹️`;
        showMessage(message);

    }
    else if(CP > IP){
        var profit = (CP - IP)*Q;
        var profitPercent = (profit/IP)*100;
        // console.log("Happy to say that you are in profit");
        var message = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercent}% 🥳`;
        showMessage(message);
    }
    else {
        var message = `No pain No gain and no gain no pain 😉`;
        showMessage(message);
    }
}

function calculator(){
    var IP = Number(intialPrice.value);
    var Q = Number(Quantity.value);
    var CP = Number(currentPrice.value);

    calculateProfitandLoss(IP,Q,CP);
}

function showMessage(message){
    Output.innerHTML = message;
}