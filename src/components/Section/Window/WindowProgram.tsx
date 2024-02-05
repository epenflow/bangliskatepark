import HTMLClientComment from '@/lib/hooks/HTMLClientComment';
import React from 'react';

const WindowProgram = () => {
	return (
		<section
			id='program__window'
			className='absolute top-0 left-0 flex'>
			<div
				id='minimized__window'
				className='fixed right-5 bottom-5 flex flex-col gap-y-1 z-[60]'></div>
		</section>
	);
};

export default WindowProgram;
