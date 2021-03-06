var intialPrice = document.querySelector("#intial-price");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var Output = document.querySelector("#output");

submitBtn.addEventListener("click",calculator);

function calculateProfitandLoss(IP,Q,CP){
    if(CP < IP){
        var loss = (IP - CP)*Q;
        loss = showTillTwoDecimal(loss);
        var lossPercent = ((IP-CP)/IP)*100;
        lossPercent = showTillTwoDecimal(lossPercent);
        var message = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercent}% âšī¸`;
        colorOfText = "#ef9a9a";
        showMessage(message,colorOfText);

    }
    else if(CP > IP){
        var profit = (CP - IP)*Q;
        profit = showTillTwoDecimal(profit);
        var profitPercent = ((CP - IP)/IP)*100;
        profitPercent = showTillTwoDecimal(profitPercent);
        var message = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercent}% đĨŗ`;
        colorOfText = "#00e676";
        showMessage(message,colorOfText);
    }
    else {
        var message = `No pain No gain and no gain no pain đ`;
        colorOfText = "#bbdefb";
        showMessage(message,colorOfText);
    }
}

function calculator(){
    var IP = Number(intialPrice.value);
    var Q = Number(Quantity.value);
    var CP = Number(currentPrice.value);
    if(IP == 0  || Q == 0 || CP == 0){
        message = "Please Enter all required fields đ§";
        colorOfText = "#e1bee7";
        showMessage(message,colorOfText);
    }
    else if(IP < 0  || Q < 0 || CP < 0){
        message = "Please Enter positive values only đ";
        colorOfText = "#e1bee7";
        showMessage(message,colorOfText);
    }
    else{
        calculateProfitandLoss(IP,Q,CP);
    }
    
}

function showMessage(message,colorOfText){
    Output.style.color = colorOfText;
    Output.innerHTML = message;
}


function showTillTwoDecimal(x){
    return Number.parseFloat(x).toFixed(2);
}