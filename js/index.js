function priceElement(prices, name) {

    const price = document.getElementById(prices);
    const priceValueString = price.innerText;
    const priceValue = parseFloat(priceValueString);
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceString);
    const NewTotalPrice = priceValue + totalPriceNumber;
    totalPrice.innerText = NewTotalPrice.toFixed(2);
    const valueName = document.getElementById('element-name');
    const count = valueName.childElementCount + 1;
    const p = document.createElement('p');
    p.innerHTML = `${count}. ${name}`;
    valueName.appendChild(p);

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





