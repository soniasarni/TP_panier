$(document).ready(function(){

let carts = document.querySelectorAll('.add-cart');
let products = [
{   
	name:"pull",
	color:"red",
	price: 15,
	incart:0
},
{
	name:"pull",
	color:"red",
	price: 15,
	incart:0
},
{
	name:"pull",
	color:"red",
	price: 15,
	incart:0
},
{
	name:"pull",
	color:"red",
	price: 15,
	incart:0
},
{
	name:"pull",
	color:"red",
	price: 15,
	incart:0
},
{
	name:"pull",
	color:"red",
	price: 15,
	incart:0
}];

for( let index=0; index < carts.length; index++){
    carts[index].addEventListener('click',(e)=>{
        e.preventDefault();
	     // console.log('slt')
	     cartNumbers();

    })
}
function cartNumbers(){
 let productNumbers = localStorage.getItem('cartNumbers')
 //console.log(productNumbers)
 //console.log(typeof productNumbers)
 productNumbers= parseInt(productNumbers)
// console.log(typeof productNumbers)
if (productNumbers) {
 localStorage.setItem('cartNumbers', productNumbers +1);
 document.querySelector('.cart span').textContent =  productNumbers +1;

}else{
 localStorage.setItem('cartNumbers',1)
 document.querySelector('.cart span').textContent = 1;
}
}
function onLoadCartNumbers(){
   let productNumbers = localStorage.getItem('cartNumbers')
   if (productNumbers) {
   	document.querySelector('.cart span').textContent = productNumbers
   }
}
onLoadCartNumbers();
})