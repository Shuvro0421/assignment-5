function priceElement(prices, name) {

    // total price calculation
    const price = document.getElementById(prices);
    const priceValueString = price.innerText;
    const priceValue = parseFloat(priceValueString);
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);
    const newTotalPrice = priceValue + totalPriceNumber;
    const finalTotalPrice = document.getElementById('final-total-price');

    totalPrice.innerText = newTotalPrice.toFixed(2);

    const makePurchaseButton = document.getElementById('make-purchase');
    const applyButton = document.getElementById('apply-btn');

    if(totalPrice.innerText >= 0){

        makePurchaseButton.disabled = false;
        
    }

    if(totalPrice.innerText >= 200){

        applyButton.disabled = false;
    }

    finalTotalPrice.innerText = newTotalPrice.toFixed(2);


    // element name showcasing
    const valueName = document.getElementById('element-name');
    const count = valueName.childElementCount + 1;
    const p = document.createElement('p');
    p.innerHTML = `${count}. ${name}`;
    valueName.appendChild(p);

}


// just function
function getId(getId){
    const getGet = document.getElementById(getId);
    const getGetString = getGet.innerText;
    const getGetValue = parseFloat(getGetString);
    return getGetValue;
}

function getId2(getId2){
    const getGet2 = document.getElementById(getId2);
    return getGet2;
}


// codes
document.getElementById('card-1').addEventListener('click', function () {
    priceElement('price-1', 'Spoons');
})

document.getElementById('card-2').addEventListener('click', function () {
    priceElement('price-2', 'Plates');
})

document.getElementById('card-3').addEventListener('click', function () {

    priceElement('price-3', 'Home Cooker');
})


// apply button
document.getElementById('apply-btn').addEventListener('click', function () {
    const discountPrice = document.getElementById('discount-price');
    const couponField = document.getElementById('coupon-field');
    const totalPrice2 = document.getElementById('total-price');
    const totalPrice2String = totalPrice2.innerText;
    const totalPrice2Value = parseFloat(totalPrice2String);
    const totalPriceNumber = getId('total-price');
    const finalFinalTotalPrice = getId2('final-total-price');

    if (couponField.value === 'SELL200') {
        
        const newFinalTotalPrice = totalPrice2Value * (20 / 100);
        discountPrice.innerText = newFinalTotalPrice.toFixed(2);

        // Update the discounted final total price
        const newDiscountedFinalTotalPrice = totalPrice2Value - newFinalTotalPrice;
        finalFinalTotalPrice.innerText = newDiscountedFinalTotalPrice.toFixed(2);

        couponField.value = '';

        
        
    } else {
        alert('Wrong Coupon Code');
        finalFinalTotalPrice.innerText = totalPriceNumber.toFixed(2);

        // Reset the discount price to zero
        discountPrice.innerText = '0.00';

        couponField.value = '';
        
    }
});

document.getElementById('sell-btn').addEventListener('click' , function(){
    const sellButton = document.getElementById('sell-btn');
    const couponField = document.getElementById('coupon-field');

    const sellButtonValue = sellButton.innerText;
    couponField.value = sellButtonValue;


})

