// JavaScript Document

const price = document.getElementById('price');
const product = price.dataset.product;
const quantity = document.getElementById('quantity');
const orignalPrice = price.innerText;
localStorage.setItem(`oriPrice-${product}`,orignalPrice);

// fetching details from local storage
if(localStorage.getItem(`quantity-${product}`) && localStorage.getItem(`newPrice-${product}`)){
    price.innerText = localStorage.getItem(`newPrice-${product}`);
    quantity.value = localStorage.getItem(`quantity-${product}`);
}

quantity.addEventListener('input',updatePrice);

//update price funtion
function updatePrice(){
    let value = quantity.value;
    let newPrice = Number(localStorage.getItem(`oriPrice-${product}`) * value).toFixed(2);
    price.innerText = newPrice;
    localStorage.setItem(`quantity-${product}`,value);
    localStorage.setItem(`newPrice-${product}`,newPrice);
}