const inputAmount = document.querySelector("#amount-input");
const inputCash = document.querySelector("#cash-input");
const nextBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#message");
const inputCashDiv = document.querySelector(".cashGivenInput");
const changeReturnDiv = document.querySelector(".changeReturn");
const output = document.querySelector("#output");
const noOfNotes = document.querySelectorAll(".notes-count");
const availableCurrency = [2000,500,100,20,10,5,1];

nextBtn.addEventListener('click',()=>{
    hideMessage();
    if(inputAmount.value>0){
        nextBtn.style.display="none";
        inputCashDiv.style.display="block";

    }
    else{
        showMessage("Please enter the valid amount")
   }
})

checkBtn.addEventListener('click',function validateBill(){
    hideMessage();
        if(inputAmount.value<=inputCash.value){
           const amountToBeReturned = inputCash.value-inputAmount.value;
           returnChange(amountToBeReturned);
           changeReturnDiv.style.display="block";
           output.style.display="block"
        }else{
            showMessage("Provided Cash is low please check the bill amount and provide right amount ")
        }
   
    
});

function returnChange(amt){
  for(let i=0;i<availableCurrency.length;i++){
      const returnCount = Math.trunc(amt /availableCurrency[i]);
      amt %=availableCurrency[i];
     noOfNotes[i].innerText = returnCount;
  }

}

function hideMessage(){
    message.style.display="none";
}

function showMessage(msg){
message.style.display="block";
message.innerText=msg;
}