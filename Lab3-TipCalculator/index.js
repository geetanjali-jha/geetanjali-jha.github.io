// 1. Getting all the DOM objects
var billTotalNode = document.getElementById("billTotalInput");
var tipSliderNode = document.getElementById("rangeSliderInput");

// Adding event listener on bill Total  
billTotalNode.addEventListener("input", tipSliderfunc);
// Adding event listner to slider
tipSliderNode.addEventListener("input", tipSliderfunc);

function tipSliderfunc() {
    var tipPercentageNode = document.getElementById("tipPercentageInput");
    var tipAmountNode = document.getElementById("tipAmountInput");
    var totalBillWithTipNode = document.getElementById("totalBillWithTipInput");
    var sliderOutput = document.getElementById("sliderValue");
    billTotalNode = document.getElementById("billTotalInput");
    tipSliderNode = document.getElementById("rangeSliderInput");
    var errorMessageNode = document.getElementById("errorMessage");

    // Get the values from nodes
    var billTotalValue = Number(billTotalNode.value);
    var tipSliderValue = parseFloat(tipSliderNode.value);

    sliderOutput.textContent = tipSliderValue + "%";

    // Validation
    if (isNaN(billTotalValue) || billTotalNode.value === "" || billTotalValue < 0) {
        // Set empty strings on disabled fields
        tipPercentageNode.value = "";
        tipAmountNode.value = "";
        totalBillWithTipNode.value = "";

        // Throw an error message
        if (billTotalNode.value !== "" || billTotalValue < 0) {
            // put an error message in errorMessageNode
            errorMessageNode.innerHTML = "Invalid input";
            errorMessageNode.style.color = "rgb(255, 49, 49)";

        } else {
            errorMessageNode.innerHTML = "";
        }

        return;
    } else {
        errorMessageNode.innerHTML = "Valid Input";
        errorMessageNode.style.color = "rgb(124, 252, 0)";
    }

    var tipAmountValue  = parseFloat(tipAmountNode.value);

    sliderOutput.textContent = tipSliderValue + "%";
      
    //Updating Tip Slider
    sliderOutput.innerHTML = parseFloat(tipSliderValue);
    tipAmountValue = (billTotalValue * tipSliderValue) / 100;

    tipAmountNode.value = tipAmountValue.toFixed(2);

    //Updating tip amount
    tipAmountNode.innerHTML = parseFloat(tipAmountValue);

    //updating Tip percentage
    tipPercentageNode.value = tipSliderValue.toFixed(2)+"%";

    // Updating Total bill with Tip amount
    var totalBillwithTip = parseFloat(billTotalValue + tipAmountValue).toFixed(2);
    totalBillWithTipNode.value = totalBillwithTip;

    sliderOutput.textContent = tipSliderValue + "%";
}