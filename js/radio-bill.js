// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn	 = document.querySelector(".radioBillAddBtn	");
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed
var callTotals = 0;
var smsTotals = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
  var billItemType = checkedRadioBtn.value
  // billItemType will be 'call' or 'sms'
}
    // get the value entered in the billType textfield
    // var billTypeEntered = billTypeText.value.trim();
    console.log(billItemType);
    // update the correct total
    if (billItemType === "call"){
        callTotals += 2.75
    }
    else if (billItemType === "sms"){
        smsTotals += 0.75;
    }


    //update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callTotals.toFixed(2);
    smsTotalTwo.innerHTML = smsTotals.toFixed(2);
    var totalTwoCost = callTotals + smsTotals;
    totalTwo.innerHTML = totalTwoCost.toFixed(2);

    if (totalTwoCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }else if (totalTwoCost >= 30){
        totalTwo.classList.add("warning");
    }


}

radioBillAddBtn.addEventListener('click', radioBillTotal);
