// id del ticket
const inputTotalForm = document.getElementById('form-ticket')

// variabili per l'input
const nomeUtente = document.getElementById('nameUser');
const kmRischiesti = document.getElementById('valueKm');
const inputAge = document.getElementById('ageRange');
const btnSubmit = document.getElementById('sub-btn');
const buttonReset = document.getElementById('btn-reset');

// variabili per l'output
const outPutName = document.getElementById('p-Name');
const outPutKm = document.getElementById('p-Km'); // debug
const outPutAge = document.getElementById('p-Age'); //debug


// fuori il form
const outputTicket = document.getElementById('ticket-output');

// Prezzo totale del biglietto dopo la funzione in output
const outPutPrice = document.getElementById('price-Output'); 

inputTotalForm.addEventListener('submit', (evento) => {
  
  evento.preventDefault();

  outPutName.innerHTML = nomeUtente.value.trim();

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
  outPutPrice.innerHTML = totalPrice.toFixed(2) + " €";

});

// Reset del form

buttonReset.addEventListener('click', () => {
  
  outPutPrice.innerHTML = '';
  outPutName.innerHTML = '';
  inputTotalForm.reset();

}
)



