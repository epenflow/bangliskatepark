'use client';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Image from 'next/image';
import { IF } from '../Conditional';
import Terminal from './Terminal';
const Gallery = () => {
	const [popUp, setPopUp] = React.useState<boolean>(false);
	function popUpModal() {
		setPopUp((prev) => !prev);
	}
	return (
		<section className='h-screen max-h-screen w-screen flex items-center justify-center relative gap-4'>
			{Array.from({ length: 5 }).map((_, index) => (
				<div
					onClick={popUpModal}
					key={index}
					className='flex items-center justify-center flex-col capitalize'>
					<Image
						src={'/folder.png'}
						alt='folder'
						width={150}
						height={150}
					/>
					<span>veneu</span>
				</div>
			))}
			<IF
				state={popUp}
				elseCondition={null}>
				<Terminal popUpModal={popUpModal} />
			</IF>
		</section>
	);
};

export default Gallery;
