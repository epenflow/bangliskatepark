import React from 'react';
import Finder from '@/components/Section/Gallery/Finder';

const Gallery = () => {
	return (
		<section className='h-screen max-h-screen w-screen relative overflow-hidden flex flex-row justify-center flex-wrap lg:flex-row p-2 gap-4 bg-[#f2f2f2]'>
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
		</section>
	);
};

export default Gallery;
