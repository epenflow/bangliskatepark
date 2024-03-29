import React from 'react';
import Each from '../Each';

const Thanks = () => {
	return (
		<section className='w-screen max-h-screen h-screen capitalize overflow-hidden'>
			<h1 className='lg:text-8xl text-4xl text-center markers__text'>
				Thanks to our partner
			</h1>
			<Each
				of={Array.from({ length: 10 })}
				render={(_, index) => <p key={index}>bo {index}</p>}
			/>

			<h1 className='lg:text-8xl text-4xl text-center markers__text'>
				Thanks to our media
			</h1>
		</section>
	);
};

export default Thanks;
