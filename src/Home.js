import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className='container'>
			<nav>
				<div className='title'>Noura</div></nav>
			<div className='button-select'>
				<p className='prompt'>What would you like to do?</p>
				<div className='grid-container'>
					<div className='grid-item'>
						<button type='button' id='b1'>Stretch</button>
					</div>
					<div className='grid-item'>
						<button type='button' id='b2'>Focus</button>
					</div>
					<div className='grid-item'>
						<button type='button' id='b3'>Breathe</button>
					</div>
					<div className='grid-item'>
						<button type='button' id='b4'>Water</button>
					</div>
					<div className='grid-item'>
						<button type='button' id='b5'>Custom</button>
					</div>
				</div>
			</div>
			<div className='bottom-button'>
				<button className='next'>Next</button>
			</div>
		</div>
	)
}
export default Home;