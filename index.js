const billAmount=document.querySelector("#bill-amount")
const cashGiven=document.querySelector("#cash-given")
const  checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes")

const availableNotes=[2000,500,100,50,20,10,1]
// console.log(cashGiven.value)
checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    message.style.display="none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value ){
            const amountToBeReturn=cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);

        }else{
            showMessage("Do u wana wash plate? ")
        }
    }else{
        showMessage("INvalid bill amount")
       
    }
});
function calculateChange(amountToBeReturn){
    for(i=0;i < availableNotes.length;i++){
        const numberOfNotes=Math.trunc(
            amountToBeReturn / availableNotes[i])
    amountToBeReturn  %= availableNotes[i];
    noOfNotes[i].innerText=numberOfNotes;
    };
};

function hideMessage(){
    message.style.display="none";
}

function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}
