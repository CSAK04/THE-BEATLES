 alert('merch is under maintenance')

var removeCartItemsbtn = document.getElementsByClassName("btn-dngr")
console.log(removeCartItemsbtn)
for(var i=0;i<removeCartItemsbtn.length;i++){
    var button=removeCartItemsbtn[i]
    button.addEventListener('click',function(event){
        console.log("clicked")
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}



function updateCartTotal(){
    var cartItemCntnr = document.getElementsByClassName("cart-items")[0]
    var cart_row = cartItemCntnr.getElementsByClassName("cart-row")
    for(var i=0;i<cart_row.length;i++){
        var cartrow=cart_row[i]
        var total_price=cartrow.getElementsByClassName("cart-price")[i]
        var quantity_total=cartrow.getElementsByClassName("cart-quantity")[i].Value;
        var price=parseFloat(total_price.innerHTML)
        var quantity=quantity_total.Value
        console.log(quantity_total)    
    }

}
