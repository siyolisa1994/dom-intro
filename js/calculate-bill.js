//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
var errorString = document.querySelector(".error")
//get a reference to the billString
var billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
  
  var billString = billStringElement.value;
  //  * this function should read the string value entered - split it on a comma.
  var billItems = billString.split(",");
  //  * loop over all the entries in the the resulting list
  var billTotal = 0;
  for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }


    }
    // if (billItems != ""){
    //   document.write("this is not a string");
    // }

  //  * check if it is a call or an sms and add the right amount to the overall total
  var roundedBillTotal = billTotal.toFixed(2);
  //  * once done looping over all the entries - display the total onto the screen in the billTotal element
  billTotalElement.innerHTML = roundedBillTotal;
  if(roundedBillTotal > 20 && roundedBillTotal < 30){
    billTotalElement.classList.toggle("warning");
}else if (roundedBillTotal > 30){
  billTotalElement.classList.toggle("danger");
}
if (roundedBillTotal < 30) {
  billTotalElement.classList.remove("danger");

}
if(roundedBillTotal < 20){
    billTotalElement.classList.remove("warning");
    }

}
calculateBtnElement.addEventListener('click', calculateBtnClicked);
