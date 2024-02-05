'use client';
import React from 'react';
import Window from './Window';
import Marquee from 'react-fast-marquee';
import { IF } from '../../Conditional';
const Live = () => {
	const [isOpen, setOpen] = React.useState<boolean>(true);
	function handleClose() {
		setOpen((prev) => !prev);
		console.info('close');
	}
	return (
		<IF
			state={isOpen}
			elseCondition={null}>
			<Window
				headerText={`@LIVE//Bangli--Skatepark`}
				handleClose={handleClose}
				classNames='w-[80%] h-[50%] lg:w-1/2 lg:h-[65%] top-1/2 left-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 shadow-md bg-white rounded-md fixed flex flex-col border border-solid border-[#C8C8C8] overflow-hidden'
				contentClassName='bg-black w-full h-full rounded-md relative no-scrollbar'
				wrapperId='live__bangli-skatepark'>
				<Marquee
					className='absolute -top-1 text-black bg-[#00ff00] font-mono font-extrabold p-2'
					autoFill={true}>
					<h1 className='mx-2'>Live, From//@bangliskatepark</h1>
					<h1 className='mx-2 uppercase'>
						shout out to our sponsor :
						........,..............,..........
					</h1>
					<h1 className='mx-2 capitalize'>
						results: .............., ..........
					</h1>
				</Marquee>
				<div className='w-full h-[87%] flex justify-center'>
					<video
						src='/VideoBangliSkatepark.webm'
						className='h-full w-full'
						controls></video>
				</div>
			</Window>
		</IF>
	);
};

export default Live;
