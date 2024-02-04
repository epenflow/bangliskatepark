'use client';
import React from 'react';
import Finder from '@/components/Section/Gallery/Finder';
import Draggable from 'react-draggable';

const Gallery = () => {
	return (
		<section className='h-screen max-h-screen w-screen relative overflow-hidden flex flex-row justify-center flex-wrap lg:flex-row p-2 gap-4'>
			<div
				id='dekstop__items'
				className='flex flex-row w-full flex-wrap justify-center content-start lg:justify-start'>
				{Array.from({ length: 4 }).map((_, index) => (
					<Finder
						key={index}
						index={index}
					/>
				))}
			</div>
			<div
				id='program__window'
				className='absolute top-0 left-0 flex'>
				<div
					id='minimized__window'
					className='fixed right-5 bottom-5 flex flex-col gap-y-1 z-[60]'></div>
			</div>
		</section>
	);
};

export default Gallery;
