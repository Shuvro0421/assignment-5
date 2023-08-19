const cardClasses = document.getElementsByClassName('card-class');

for (const cardClass of cardClasses) {
    cardClass.addEventListener('click', function () {
        const moneyClass = cardClass.querySelector('.money-class');
        const moneyClassValueString = moneyClass.innerText;
        const moneyClassCValue = parseFloat(moneyClassValueString);

        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = moneyClassCValue;
    });
}

// const moneyClasses = document.getElementsByClassName('money-class');
// for (const moneyClass of moneyClasses) {
//     moneyClass.addEventListener('click', function () {
//         const moneyClassValueString = moneyClass.innerText;
//         const moneyClassCValue = parseFloat(moneyClassValueString);
//         console.log(moneyClassCValue);
//         const totalPrice = document.getElementById('total-price');
//         totalPrice.innerText = moneyClassCValue;
//     });
// }

