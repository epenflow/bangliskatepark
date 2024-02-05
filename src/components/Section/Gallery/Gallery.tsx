'use client';
import React from 'react';
import Finder from '@/components/Section/Gallery/Finder';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trash } from './Trash';
gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
	React.useLayoutEffect(() => {
		const dekstopItemsWrapper = document.querySelector(
			'#dekstop__items-wrapper'
		);
		// const tl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: dekstopItemsWrapper,
		// 		pin: true,
		// 		start: 'top center',
		// 		end: 'bottom bottom',
		// 		toggleActions: 'play pause resume reverse',
		// 		markers: true,
		// 	},
		// });
		const finderItems = gsap.utils.toArray('#finder__items');
		const ctx = gsap.context(() => {
			// finderItems.forEach((el, index) => {
			// 	tl.fromTo(
			// 		el as HTMLDivElement,
			// 		{
			// 			xPercent: -100 * index,
			// 			position: 'absolute',
			// 		},
			// 		{
			// 			xPercent: 0,
			// 			position: 'relative',
			// 		}
			// 	);
			// });
		});

		return () => ctx.revert();
	}, []);

	return (
		<section
			id='gallery__wrapper'
			className='h-screen max-h-screen w-screen relative overflow-hidden flex flex-row justify-center flex-wrap lg:flex-row p-2 gap-4 bg-[#f2f2f2]'>
			<div
				id='dekstop__items-wrapper'
				className='flex flex-row w-full flex-wrap justify-center content-start lg:justify-start'>
				{Array.from({ length: 4 }).map((_, index) => (
					<Finder
						key={index}
						index={index}
					/>
				))}
				<Trash />
			</div>
		</section>
	);
};

export default Gallery;
