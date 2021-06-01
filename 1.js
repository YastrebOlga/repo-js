'use strict';

const productsShopping =  [
	{  id : 1 ,  title : 'Mango People T-shirt' ,  price : 150  } ,
	{  id : 2 , title : 'Mango People T-shirt' , price : 150   } ,
	{  id : 3 , title : 'Mango People T-shirt' ,  price : 150  } ,
] ;

const renderShoppingItem = (title, price) => {
	return `<section class="shopping-c-productde">
<div class="shopping-c-product">
	<img src="img/Layer_43.png" alt="Layer_43">
	<div class="bo-x-x-x">
		<div class="shopping-c-product-1">${title}</div>
		<div class="shopping-c-product-1-text">
			Color: <span>Red</span> Size: <span>Xll</span>
		</div>
	</div>
</div>
<div class="shopping-c-product-1-l">${price}</div>
<input class="shopping-c-product-1-l1" type="text" value="2"></input>
<div class="shopping-c-product-1-l">FREE</div>
<div class="shopping-c-product-1-l">$300</div>
<div class="shopping-c-product-1-l">
	<i class="fa fa-times-circle" aria-hidden="true"></i>
</div>
</section>`
 };
 
 const renderShoppingList = list => {
	let shoppingList = list.map(item => renderShoppingItem(item.title, item.price))
 

 
	document.querySelector('.shopping-c-productde').innerHTML = shoppingList
 
 };

const init = () => {
	renderShoppingList(productsShopping)
 };

window.onload = init


