import Image from 'next/image';
import React from 'react';
import HomeMarquee from './HomeMarquee';

const Hero = () => {
	const date = new Date();

	return (
		<section className='h-fit p-2 flex flex-col lg:flex-row items-center justify-between'>
			<h1 className='lg:text-8xl text-7xl py-2'>Prologue</h1>
			<h1 className=''>{date.toUTCString()}</h1>
		</section>
	);
};

export default Hero;
