// JavaScript P3

var price = document.getElementById('price');
var product = price.dataset.product;
var quantity = document.getElementById('quantity');
var orignalPrice = price.innerText;
localStorage.setItem(`Price-${product}`,orignalPrice);

if(localStorage.getItem(`quantity-${product}`) && localStorage.getItem(`newPrice-${product}`))
{
    price.innerText = localStorage.getItem(`newPrice-${product}`);
    quantity.value = localStorage.getItem(`quantity-${product}`);
}

quantity.addEventListener('input',update);

function update(){
    var value = quantity.value;
    var newPrice = Number(localStorage.getItem(`Price-${product}`) * value).toFixed(2);
    price.innerText = newPrice;
    localStorage.setItem(`quantity-${product}`,value);
    localStorage.setItem(`newPrice-${product}`,newPrice);
}