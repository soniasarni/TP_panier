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
	color:"blue",
	price: 10,
	incart:0
},
{
	name:"pull",
	color:"purple",
	price: 22,
	incart:0
},
{
	name:"pull",
	color:"pink",
	price: 17,
	incart:0
},
{
	name:"pull",
	color:"brown",
	price: 15,
	incart:0
},
{
	name:"pull",
	color:"black",
	price: 16,
	incart:0
}];

for( let index=0; index < carts.length; index++){
    carts[index].addEventListener('click',(e)=>{
        e.preventDefault();
	     // console.log('slt')
	     cartNumbers(products[index]);
	     totalcost(products[index])

    })
}
function cartNumbers(product){
	console.log('the product clicked is',product)
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
setItems(product)
}
function setItems(product){
	//console.log("inside of setItem function")
	//console.log("my product is", product);
	let cartItems = localStorage. getItem('productsIncart')
	cartItems= JSON.parse(cartItems);
	//console.log("my cartItems are" ,cartItems)
	
	if(cartItems != null){
		//cartItems["red"]
		if(cartItems[product.color] == undefined){
			cartItems={
				...cartItems,
				[product.color]:product
			}
		}
		cartItems[product.color].incart +=1;
    }else{
   	product.incart = 1;
    cartItems={
		[product.color] : product
	}
}
		localStorage.setItem("productsIncart",JSON.stringify(cartItems))
	}
function onLoadCartNumbers(){
   let productNumbers = localStorage.getItem('cartNumbers')
   if (productNumbers) {
   	document.querySelector('.cart span').textContent = productNumbers
    }
}
//calculer le prix des produits
function totalcost(product){
//console.log('the product price is', product.price)
let cartcost=localStorage.getItem('totalcost')
if (cartcost!= null) {
cartcost=parseInt(cartcost)
localStorage.setItem('totalcost', cartcost + product.price)
}else{
	localStorage.setItem('totalcost', product.price)
}
//console.log(typeof cartcost)
}
onLoadCartNumbers();
})