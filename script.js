
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

// function checkPriceTicket(valueKm, ageRange){
  
//   const basePrice = 0.21;
//   const discountUnder = 0.8; // under 18 
//   const discountOver = 0.6; // over 65
//   let priceBeforeDiscount = valueKm * basePrice;
  // let totalPrice = 0;
 
//   return totalPrice;

// } 

// let totalPrice = 0;
// const basePrice = 0.21;
// const discountUnder = 0.8; // under 18 
// const discountOver = 0.6; // over 65
// let priceBeforeDiscount = valueKm * basePrice;

// if(ageRage < 18){
//   totalPrice = priceBeforeDiscount * discountUnder;
// }

// else if (ageRage > 18 && valueAge < 65){
//   console.log(totalPrice);
// }
 
// else if (ageRage > 65) {
//   totalPrice = priceBeforeDiscount * discountOver;

// };

// console.log(totalPrice);


// Prezzo totale del biglietto dopo la funzione in output
const oupPutPrice = document.getElementById('price-Ouput');

// inputTotalForm.addEventListener('submit', checkPriceTicket(kmRichiesti, 18));

inputTotalForm.addEventListener('submit', (evento) => {
  evento.preventDefault();

  ouputName.innerHTML = nomeUtente.value.trim();
  oupPutKm.innerHTML = kmRischiesti.value.trim();
  oupPutAge.innerHTML = inputAge.value.trim();

  let totalPrice = 0;
  const discountUnder = 0.8; 
  const discountOver = 0.6;  
  let km = parseInt(kmRischiesti.value);
  let age = parseInt(inputAge.value);

  let priceBeforeDiscount = km * 0.21;

  if (age < 18) {
    totalPrice = priceBeforeDiscount * discountUnder;
  } else if (age >= 18 && age <= 65) {
    totalPrice = priceBeforeDiscount;
  } else if (age > 65) {
    totalPrice = priceBeforeDiscount * discountOver;
  }

  console.log(totalPrice);
  oupPutPrice.innerHTML = totalPrice.toFixed(2) + " €";
});








