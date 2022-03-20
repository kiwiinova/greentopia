//JavaScript P4 - Shopping Cart
//When the user hits the input value button to change the quantity of an item, it will trigger the updateSummary() function which triggers
//another function which triggers another one. This could be seen like a chain reaction. Hence every value in the order summary will be
//updated accordingly and dynamically.


//update summary function
function updateSummary(){
	var quantity= document.querySelectorAll(".quantity");
	quantity.forEach(item=>
	{
    	item.addEventListener("change",(a)=>
		{
					var quantity= a.target.value;
					var priceElement= a.target.parentElement.previousSibling.previousSibling.childNodes[1]
        			var priceProduct= priceElement.dataset.price;
        			//var product= priceElement.dataset.product;
        			var newPrice= priceProduct*quantity;
        			priceElement.innerText= newPrice.toFixed(2);
        			updateSubTotal(); //call function to update subtotal
			
		}); // end of event listener block
	}) // end of change each item quantity block
} // end of function


//update subtotal function
function updateSubTotal(){
    var priceItem= document.querySelectorAll(".price");
    var price= [];
    priceItem.forEach(item=>
	{
    	price.push(Number(item.innerText)).toFixed(2);
    }); // end of change each price item block 
	
	var subtotalElement= document.getElementById('subtotal');
    var finalPrice= price.reduce((element1, element2)=>
								{
									return element1+element2;
								});
	
    subtotalElement.innerText= Number(finalPrice).toFixed(2);
    updateTotalBeforeTax(); //call function to update total before tax
} // end of function


//update total before taxes function
function updateTotalBeforeTax(){
	var subtotal2= document.getElementById('subtotal').innerText;
    var shipping= document.getElementById('shipping').innerText; 
    var totalbeforetaxElement= document.getElementById('total');
    totalbeforetaxElement.innerText= Number(Number(subtotal2)+Number(shipping)).toFixed(2);
	updateQST(); //call function to update QST of the price
} // end of function


//update QST of the price function
function updateQST(){
    var totalElement= document.getElementById('total');
    var qstElement= document.getElementById('qst')
    var total= totalElement.innerText;
    qstElement.innerText= Number(total*0.09975).toFixed(2);
    updateGST(); //call function to update GST of the price
} // end of function


// update GST of the price function
function updateGST(){
    var totalElement= document.getElementById('total');
    var gstElement= document.getElementById('gst');
    var total= totalElement.innerText;
    gstElement.innerText= Number(total*0.05).toFixed(2);
    updateFinalTotal();
} // end of function


//update final total price function
function updateFinalTotal(){
    var total= document.getElementById('total').innerText;
    var qst= document.getElementById('qst').innerText;
    var gst= document.getElementById('gst').innerText; 
    var shipping= document.getElementById('shipping').innerText; 
    var finaltotalElement= document.getElementById('finaltotal');
    finaltotalElement.innerText= Number(Number(total)+Number(qst)+Number(gst)).toFixed(2);
} // end of function




