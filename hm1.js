'use strict';

const goods = [
	{ title: 'Mango People T-shirt', Color: "Red", Size: "Xll", price: 150 },
	{ title: 'Mango People T-shirt', Color: "Red", Size: "Xll", price: 150 },
	{title: 'Mango People T-shirt', Color: "Red", Size: "Xll", price: 150 },
	{ title: 'Mango People T-shirt', Color: "Red", Size: "Xll", price: 150 },
 ]
 
 const renderGoodsItem = (title, Color, Size, price) => {
	return `
	<section class="shopping-c-productDe">
	<div class="shopping-c-product">
	<img src="img/Layer_45.png" alt "Layer_43">
	<div class="bo-x-x-x">
		<div class="shopping-c-product-1">${title}</div>
		<div class="shopping-c-product-1-text">
			Color: <span>${Color}</span> Size: <span>${Size}</span>
		</div>
	</div>
</div>
<div class="shopping-c-product-1-l"> Prise:${price}</div>
<input class="shopping-c-product-1-l1" type="text" value="2"></input>
<div class="shopping-c-product-1-l">FREE</div>
<div class="shopping-c-product-1-l">$300</div>
<div class="shopping-c-product-1-l">
	<i class="fa fa-times-circle" aria-hidden="true"></i>
</div>
<section class="shopping-c-button">
<button class="rectangle-but1">cLEAR SHOPPING CART</button>
<button class="rectangle-but1">cONTINUE sHOPPING</button>
</section>
<div class="line1"></div>
</section>
`

 }

 const renderGoodsList = list => {
	let goodsList = list.map(item => 
		renderGoodsItem(item.title, item.Color, item.Size, item.price))
 
	document.querySelector('.shopping-c-productDe').innerHTML = goodsList.join('');
 
 }
 
 const init = () => {
	renderGoodsList(goods)
 }
 


 window.onload = init