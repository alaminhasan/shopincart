const increaseBtn = document.getElementById("increase_btn");
const decreaseBtn = document.getElementById("decrease_btn");
const increaseBtn2 = document.getElementById("increase_btn2");
const decreaseBtn2 = document.getElementById("decrease_btn2");
const totalProduct2 = document.getElementById("total_product2");
const totalProduct = document.getElementById("total_product");
const totalAmount = document.getElementById("total_amount");

increaseBtn.addEventListener("click", function(){
  totalProduct.innerHTML= parseInt(totalProduct.innerHTML) + 1;
  totalAmount.innerHTML = (parseInt(totalProduct.innerHTML)+ parseInt(totalProduct2.innerHTML))*220 ;
  
})

decreaseBtn.addEventListener("click", function(){
  if(totalProduct.innerHTML>0){
    
  totalProduct.innerHTML= parseInt(totalProduct.innerHTML) - 1;
  totalAmount.innerHTML = (parseInt(totalProduct.innerHTML)+ parseInt(totalProduct2.innerHTML))*220 ;
 }
});

increaseBtn2.addEventListener("click", function(){
  totalProduct2.innerHTML= parseInt(totalProduct2.innerHTML) + 1;
  totalAmount.innerHTML = (parseInt(totalProduct.innerHTML)+ parseInt(totalProduct2.innerHTML))*220 ;
  
})

decreaseBtn2.addEventListener("click", function(){
  if(totalProduct2.innerHTML>0){
    
  totalProduct2.innerHTML= parseInt(totalProduct2.innerHTML) - 1;
  totalAmount.innerHTML = (parseInt(totalProduct.innerHTML)+ parseInt(totalProduct2.innerHTML))*220 ;
 }
});

