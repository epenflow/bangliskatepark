'use client';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Image from 'next/image';
import { IF } from '../Conditional';
import Terminal from './Terminal';
const Gallery = () => {
	const [popUp, setPopUp] = React.useState<boolean>(true);
	function popUpModal() {
		setPopUp((prev) => !prev);
	}
	return (
		<section className='h-screen max-h-screen w-screen relative flex flex-row justify-center flex-wrap lg:flex-row p-2 gap-4'>
			{Array.from({ length: 5 }).map((_, index) => (
				<div
					onClick={popUpModal}
					key={index}
					className='flex flex-col capitalize'>
					<Image
						src={'/folder.png'}
						alt='folder'
						width={150}
						height={150}
					/>
					<span className='text-center font-mono text-xs'>
						bangli skatepark
					</span>
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
