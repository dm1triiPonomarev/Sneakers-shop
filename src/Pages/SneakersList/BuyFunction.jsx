import React, { useState } from 'react'

export let currentOrderCount = localStorage.getItem('currentCount')
export function Check() {
	currentOrderCount = localStorage.getItem('currentCount')
}
const BuyFunction = (price) => {
	localStorage.removeItem('currentCount')
	localStorage.setItem("currentCount", Number(currentOrderCount) + Number(price.price))
	currentOrderCount = localStorage.getItem('currentCount')


}

export default BuyFunction
