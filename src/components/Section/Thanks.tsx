import React from 'react';
import Each from '../Each';

const Thanks = () => {
	const arr = Array.from({ length: 10 });
	return (
		<section className='w-screen max-h-screen h-screen capitalize overflow-hidden'>
			<h1 className='lg:text-8xl text-4xl text-center'>
				Thanks to our partner
			</h1>
			<Each
				of={Array.from({ length: 10 })}
				render={(_, index) => <p key={index}>bo {index}</p>}
			/>

			<h1 className='lg:text-8xl text-4xl text-center'>
				Thanks to our media
			</h1>
		</section>
	);
};

export default Thanks;
