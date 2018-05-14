// get a reference to the sms or call radio buttons
var radioBtnSetting = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var smsFieldSettings = document.querySelector(".smsTotalSettings");
var callFieldSettings= document.querySelector(".callTotalSettings");
var totalFieldSettings = document.querySelector(".totalSettings");
var callCostsSettings = document.querySelector(".callCostSetting");
var smsCostsSettings = document.querySelector(".smsCostSetting");
var warningLevelSettings = document.querySelector(".warningLevelSetting");
var criticalLevelSettings = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var addBtnSettings = document.querySelector(".addBtnSettings");

//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callCost = 2.00;
var smsCost = 0.56;
var warningLevel = 10.00;
var criticalLevel = 15.00;
// create a variables that will keep track of all three totals.
var callsTotals = 0;
var smsesTotal = 0;
var totalTwoSetting =0;
//add an event listener for when the 'Update settings' button is pressed
//Add a function called updateSettings
function updateSettings(){
    callCost  = parseFloat(callCostsSettings.value);
    smsCost = parseFloat(smsCostsSettings.value);
    warningLevel = parseFloat(warningLevelSettings.value);
   criticalLevel = parseFloat(criticalLevelSettings.value);

   if (totalTwoSetting >= warningLevel){
       totalFieldSettings.style.color = "orange";
   }

   if (totalTwoSetting >= criticalLevel){
       // adding the danger class will make the text red
       totalFieldSettings.style.color = "red";
   }


else if(totalTwoSetting < warningLevel){
      totalFieldSettings.style.color = "black";

    }

  }
  updateSettingsBtn.addEventListener('click', updateSettings);
//add an event listener for when the add button is pressed
function billSettings(){
  var checkedRadioBtns = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtns){
  var billItemTypeWithSettings = checkedRadioBtns.value;
  // billItemType will be 'call' or 'sms'
}
if(totalTwoSetting >= criticalLevel ){

}
else{
  if (billItemTypeWithSettings === "call"){
      callsTotals += callCost
      console.log(callsTotals);
  }
  else if (billItemTypeWithSettings === "sms"){
      smsesTotal += smsCost;
  }
//update the totals that is displayed on the screen.
  callFieldSettings.innerHTML = callsTotals.toFixed(2);
  smsFieldSettings.innerHTML = smsesTotal.toFixed(2);
  totalTwoSetting = callsTotals + smsesTotal;
  totalFieldSettings.innerHTML = totalTwoSetting.toFixed(2);
}

if (totalTwoSetting >= warningLevel){
    totalFieldSettings.style.color = "orange";
}

if (totalTwoSetting >= criticalLevel){
    // adding the danger class will make the text red
    totalFieldSettings.style.color = "red";
}

else if(totalTwoSetting < warningLevel){
   totalFieldSettings.style.color = "black";

 }

}

addBtnSettings.addEventListener('click', billSettings);
