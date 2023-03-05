import React from 'react'
import bcg from './/imgs/bcg-img.png'
import './Slider.scss'
import arrow from './/imgs/arrow.svg'

const Slider = () => {
	return (
		<div onClick={() => alert('типо слайдер (как-нибудь потом)')} style={{ marginBottom: '3em' }} className="slider-wrapper  align-center ">
			<img src={bcg} alt="slider" style={{ position: 'relative', padding: '0 15px', cursor: 'pointer', width: "-webkit-fill-available" }} />
			<button className='slider-btn'  >
				<img src={arrow} alt="arrow" />
			</button>
		</div>
	)
}

export default Slider
