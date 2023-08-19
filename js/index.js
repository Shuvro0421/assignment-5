document.getElementById('card-1').addEventListener('click' , function(){

    priceElement('price-1');
    elementName('Spoons');

})

document.getElementById('card-2').addEventListener('click' , function(){

    priceElement('price-2');
    elementName('Plates')

})

document.getElementById('card-3').addEventListener('click' , function(){

    priceElement('price-3');
    elementName('Home Cooker')
})

function priceElement(prices){

    const price = document.getElementById(prices);
    const priceValueString = price.innerText;
    const priceValue = parseFloat(priceValueString);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = priceValue;

}

function elementName(name){
    const valueName = document.getElementById('element-name');
    const count = valueName.childElementCount + 1;
    const p = document.createElement('p');
    p.innerHTML = `${count}. ${name}`;
    valueName.appendChild(p);
    

}



