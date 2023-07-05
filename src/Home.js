import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className='container'>
			<nav className='nav'>
				<div className='title'>Noura</div>
				<button className='close'>x</button>
			</nav>
			<div className='button-select'>
				<p className='prompt'>What would you like to do?</p>
				<div className='btn-container'>
					<div className='btn-item'>
						<button type='button' id='b1' className='button'>Stretch</button>
					</div>
					<div className='btn-item'>
						<button type='button' id='b2' className='button'>Focus</button>
					</div>
					<div className='btn-item'>
						<button type='button' id='b3' className='button'>Breathe</button>
					</div>
					<div className='btn-item'>
						<button type='button' id='b4' className='button'>Water</button>
					</div>
					<div className='btn-item'>
						<button type='button' id='b5' className='button'>Custom</button>
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