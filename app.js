
let fromCurrency = "eur";
let toCurrency = "usd";
const date = "latest"; 

let fromop=document.querySelectorAll(".fromcontainer option");
let tooption=document.querySelectorAll(".tocontainer option");
let pa=document.querySelector("#con");



let bt=document.querySelector("#bt");



let getamt=()=>
{
    amount=document.querySelector("#amt");
}

//geting the from country for the currencyy convertion
let getfrom=()=>{
for(op of fromop)
{
    if(op.selected==true){
        fromCurrency=op.outerText;
        fromCurrency=fromCurrency.toLowerCase();
    }
   
}
}


//getting the to country for the currency converter
let getto=()=>{
for(op of tooption)
    {
        if(op.selected==true){
            toCurrency=op.outerText;
            toCurrency=toCurrency.toLowerCase();
        }
     console.log(op.outerText);
    }
}


 bt.addEventListener("click",(event)=>
    {
        event.preventDefault();

getfrom();
getto();
getamt();
let amount=document.querySelector("#amt").value.trim();
let fimg=document.querySelector("#fromimg");
let timg=document.querySelector("#toimg");
let f="IN";
let t="US";
switch (fromCurrency) {
    case "inr":
        f = "IN";
        break;
    case "eur":
        f = "FR";
        break;
    case "aud":
        f = "AU";
        break;
    case "usd":
        f = "US";
        break;
    default:
        f = "";
}

switch (toCurrency) {
    case "inr":
        t = "IN";
        break;
    case "eur":
        t = "FR";
        break;
    case "aud":
        t = "AU";
        break;
    case "usd":
        t = "US";
        break;
    default:
        t = "";
}

fimg.src=`https://flagsapi.com/${f}/flat/64.png`;
timg.src=`https://flagsapi.com/${t}/flat/64.png`;

let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${fromCurrency}.json`;

(async function () {
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromCurrency][toCurrency];
    pa.innerText=amount*rate;
    console.log(rate);
})();
console.log(fromCurrency);
console.log(toCurrency);
console.log(amount);


    })



