
// let inputUserKm = prompt("Quanti km vuoi percorrere?");
// let inputUserAge = prompt("Quanti anni hai?");



// const totalPrice = inputUserKm * basePrice;

// id del ticket
const inputTotalForm = document.getElementById('form-ticket')

// variabili per l'input
const nomeUtente = document.getElementById('nameUser');
const kmRischiesti = document.getElementById('valueKm');
const inputAge = document.getElementById('ageRange');
const btnSubmit = document.getElementById('sub-btn');

// variabili per l'output
const ouputName = document.getElementById('p-Name');
const oupPutKm = document.getElementById('p-Km');
const oupPutAge = document.getElementById('p-Age');


// fuori il form

const outputTicket = document.getElementById('ticket-output');

// function per calcolare il prezzo del biglietto

function checkPriceTicket(valueKm, valueAge){
  
  const basePrice = 0.21;
  const discountUnder = 0.8; // under 18 
  const discountOver = 0.6; // over 65
  let priceBeforeDiscount = valueKm * basePrice;
  let totalPrice = 0;
 
  if(valueAge < 18){
    totalPrice = priceBeforeDiscount * discountUnder;
  }
  
  else if (valueAge > 18 && valueAge < 65){
    console.log(totalPrice);
  }
   
  else if (valueAge > 65) {
    totalPrice = priceBeforeDiscount * discountOver;

  };
  return totalPrice;
}

// inputTotalForm.addEventListener('submit', checkPriceTicket(kmRichiesti, 18));

inputTotalForm.addEventListener('submit', (evento) => {
  // Saltare da un input all'altro senza inviare
  evento.preventDefault();

  ouputName.innerHTML = nameUser.value.trim();
  // oupPutKm.innerHTML = kmRischiesti.value.trim();
  // oupPutAge.innerHTML = inputAge.value.trim();
  
});







