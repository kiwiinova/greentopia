var cart = [];
//  var sum= 0.0;
        $(function () {
            if (localStorage.cart)
            {
                cart = JSON.parse(localStorage.cart);
                showCart();
            }
        });
        
            function addToCart(index)    {
//                 var sum= 0.0;
//              $('#cart-content > tbody > tr').each(function() {
            // var $img1 = $('<img width="30px" height="30px" src="' + addTocart.data("image") + '"/>').css({"position":"fixed","z-index":"999"});
            var img1 = $('#item-list').find('.item-image').attr('src');
            // var img1 = $(this).data('image');
            var price1 = $('.price .u-pull-right').text().replace("$", "");
            var price = parseFloat(price1,2);
            var name = $('h4').text();
            var qty = $('.count').val();
            var amount = (qty*price);
//             var total = $('#totalPrice').text();
//             var itemTot = parseFloat(qty*price)

//             sum+=amount;
//             $(this).find('.amount').text(''+amount);
            
//              });
//              $('#totalPrice').text('$'+ sum.toFixed(2));

            // update qty if product is already present
            for (var i in cart) {
                if(cart[i].Name == name)
                {
                    cart[i].Quantity = qty;
                    showCart();
                    saveCart();
                    return;
                }
            }
            // create JavaScript Object
            var item = {Image: img1, Name: name, Price: price, Quantity: qty}; 
            cart.push(item);
            console.log(cart);return false;
            saveCart();
            showCart();
        }
                

        function deleteItem(index){
            cart.splice(index,1); // delete item at index
            console.log(index);
            showCart();
            saveCart();
        }

        function saveCart() {
            if ( window.localStorage)
            {
                localStorage.cart = JSON.stringify(cart);
            }
        }
        

        function showCart() {
            // if (cart.length == 0) {
            //     $("#cart-content").css("visibility", "hidden");
            //     return;
            // }

            $("#cart-content").css("visibility", "visible");
            $("#cart-content tbody").empty();
            var sum = 0;
            for (var i in cart) {
                var item = cart[i];
                var row = "<tr><td><img src='"+ item.Image +"' >" + "</td><td>" + item.Name + "</td><td>" +
                             item.Quantity + "</td><td>" + (item.Quantity*item.Price).toFixed(2) + " $" + "</td><td>"
                             + "<button onclick='deleteItem(" + i + ")' class='delete'>X</button></td></tr>";
                $("#cart-content tbody").append(row);
                sum+=parseFloat((item.Quantity*item.Price));
//                 var new = localStorage.getItem(sum);
//                     $('#totalPrice').val('$'+ sum);
                buttonActivator();
            }
            $('#totalPrice').text('$'+ sum);
            $(".delete").css({"border": "1px solid red", "border-radius": "50%", "padding": "5px 10px", "text-decoration": "none", "color": "red", "width": "30px", "height": "30px", "flex-direction" : "column", "justify-content" : "center" , "align-item" : "center", "cursor": "pointer"});
           
    }  
    let buttonActivator = () => {
     let removeButtons =  document.querySelectorAll(".remove")

removeButtons.forEach(el => {
     el.addEventListener("click", (e)=>{
          let row = e.target.parentNode.parentNode;
          document.querySelectorAll("table#cart-content tbody")[0].removeChild(row)
     })
})

}
/// For clearing the entire cart
document.querySelector("a#clear-cart").addEventListener("click", ()=>{
     let rows = document.querySelectorAll("table#cart-content tbody")[0].childNodes
     while(rows)
          document.querySelectorAll("table#cart-content tbody")[0].removeChild(rows[0])  
})
