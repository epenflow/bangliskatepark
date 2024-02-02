import React from 'react';
import Marquee from 'react-fast-marquee';
interface Props {
	direction?: 'left' | 'right' | 'up' | 'down';
}
const HomeMarquee: React.FC<Props> = ({ direction = 'right' }) => {
	return (
		<Marquee
			className='uppercase text-2xl bg-black text-white'
			direction={direction}>
			<h1 className='mx-2'>bupati cup#2</h1>
			<h1 className='mx-2'>skateboard competition ii</h1>
			<h1 className='mx-2'>Bangli, Bali, Indonesia</h1>
			<h1 className='mx-2'>August 25 - 27, 2023</h1>
			<h1 className='mx-2'>bupati cup#2</h1>
		</Marquee>
	);
};

export default HomeMarquee;
