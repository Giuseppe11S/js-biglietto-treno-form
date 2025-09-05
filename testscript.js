let totalPrice = 0;
const basePrice = 0.21;
const discountUnder = 0.8; // under 18 
const discountOver = 0.6; // over 65
let priceBeforeDiscount = valueKm * basePrice;
let age

if(ageRage < 18){
  totalPrice = priceBeforeDiscount * discountUnder;
}

else if (ageRage > 18 && valueAge < 65){
  console.log(totalPrice);
}
 
else if (ageRage > 65) {
  totalPrice = priceBeforeDiscount * discountOver;

};

console.log(totalPrice);
