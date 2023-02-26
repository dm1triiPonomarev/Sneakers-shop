import React, { useState } from 'react'

export let currentOrderCount = localStorage.getItem('currentCount')
export function Check(event) {
	currentOrderCount = localStorage.getItem('currentCount')
}
const BuyFunction = (price) => {

	// console.log(price.price);
	localStorage.removeItem('currentCount')

	localStorage.setItem("currentCount", Number(currentOrderCount) + Number(price.price))
	console.log(Number(currentOrderCount));
	currentOrderCount = localStorage.getItem('currentCount')
	console.log(localStorage.getItem("currentCount"));

}

export default BuyFunction
