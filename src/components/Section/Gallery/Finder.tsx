'use client';
import React from 'react';
import Image from 'next/image';
import { IF } from '../../Conditional';
import Marquee from 'react-fast-marquee';
import Window from './Window';
const Finder = ({ index }: { index: number }) => {
	const [isOpen, setOpen] = React.useState<boolean>(false);
	const nodeRef = React.useRef<HTMLDivElement>(null);
	function handleClose() {
		setOpen((prev) => !prev);
		console.info('close');
	}
	return (
		<React.Fragment>
			<div
				onClick={handleClose}
				className='flex flex-col capitalize cursor-pointer hover:bg-[#e3e2e2] hover:rounded-md p-1'>
				<Image
					src={'/folder.png'}
					alt='folder'
					width={150}
					height={150}
					className='px-2'
				/>
				<span className='text-center font-mono text-xs'>
					archive/22
				</span>
			</div>
			<IF
				state={isOpen}
				elseCondition={null}>
				<Window
					headerText={`@Archive//bangli--skatepark__${index + 1}`}
					handleClose={handleClose}
					classNames='w-[80%] h-[50%] lg:w-1/2 lg:h-[65%] top-1/2 left-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 shadow-md bg-white rounded-md fixed flex flex-col border border-solid border-[#C8C8C8]'>
					<Marquee
						className='p-2 h-fit uppercase font-mono text-6xl bg-black text-white'
						autoFill={true}>
						<h1 className='mx-2'>Bangli, Bali, Indonesia</h1>
						<h1 className='mx-2'>this year!</h1>
						<h1 className='mx-2'>bupati cup</h1>
						<h1 className='mx-2'>skateboard competition!</h1>
					</Marquee>
					<h1 className='lg:text-6xl capitalize px-2 text-justify text-2xl font-semibold lg:font-normal'>
						coming soon// bupati---cup--skateboard-competition---II
					</h1>
					<div className='flex flex-row flex-wrap'>
						<h1 className='font-serif uppercase px-2'>
							Archive ⤵️ <br /> launching soon
							<br />
							{index}
						</h1>
						<p className='font-mono font-bold text-xs'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Velit, non nihil? Dignissimos ea modi aliquid,
							incidunt debitis ipsum sint mollitia unde commodi
							voluptatibus voluptates at enim molestiae sapiente
							illum quibusdam?
						</p>
					</div>
				</Window>
			</IF>
		</React.Fragment>
	);
};

export default Finder;
