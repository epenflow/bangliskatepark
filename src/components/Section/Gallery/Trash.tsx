'use client';
import React from 'react';
import Image from 'next/image';
import useContextProvider from '@/lib/context/ContextProvider';
import Each from '@/components/Each';
import gsap, { Power4 } from 'gsap';
interface Props {
	children: React.ReactNode;
}
const Error: React.FC<Props> = ({ children }) => {
	const colorCode = [
		'#FFFFFF',
		'#F8FB02',
		'#02FEFF',
		'#01FF00',
		'#FD00FB',
		'#FB0102',
		'#0301FC',
	];
	const { isErrorActive } = useContextProvider();
	React.useLayoutEffect(() => {
		const tl = gsap.timeline({
			repeat: -1,
		});
		const colorItems = gsap.utils.toArray('#color__items');

		const ctx = gsap.context(() => {
			if (isErrorActive) {
				tl.fromTo(
					colorItems,
					{
						height: 0,
						width: 0,
						repeat: -1,
					},
					{
						height: '100%',
						width: '100%',
						stagger: 0.5,
						repeat: -1,
						ease: Power4.easeInOut,
					}
				);
			}
		});

		return () => ctx.revert();
	}, [isErrorActive]);
	return isErrorActive ? (
		<div className='w-screen h-screen overflow-hidden flex items-center justify-center relative bg-black'>
			<div className='flex flex-col lg:flex-row w-full h-full '>
				<Each
					of={colorCode}
					render={(item, index) => (
						<div
							className={`w-full h-full block`}
							id='color__items'
							style={{ backgroundColor: item }}
							key={index}></div>
					)}
				/>
			</div>
			<div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black p-5'>
				<div className='absolute bg-white h-4 w-4 lg:w-8 lg:h-8 -translate-y-full -translate-x-full z-20 border border-solid top-2 left-2 lg:top-4 lg:left-4 border-black'></div>
				<h1 className='text-white text-1xl lg:text-6xl font-mono font-bold uppercase'>
					oops no signal!
				</h1>
			</div>
			<div className='absolute bottom-0 left-0 bg-black w-screen'>
				<div className='bg-black text-white flex flex-row justify-between p-2 items-center'>
					<h1 className='text-2xl lg:text-4xl font-bold flex flex-row items-center'>
						4
						<span className='lg:h-8 lg:w-8 h-4 w-4 rounded-full bg-white block' />
						4
					</h1>
					<h1 className='italic capitalize'>
						sorry we lost your page.
					</h1>
					<h1 className='text-2xl lg:text-4xl font-bold flex flex-row items-center'>
						4
						<span className='lg:h-8 lg:w-8 h-4 w-4 rounded-full bg-white block' />
						4
					</h1>
				</div>
			</div>
		</div>
	) : (
		children
	);
};

export default Error;
export const Trash = () => {
	const { handleError } = useContextProvider();
	return (
		<div
			className='flex flex-col cursor-pointer hover:bg-[#e3e2e2] hover:rounded-md p-1'
			onClick={handleError}>
			<Image
				src={'/reycle.png'}
				width={150}
				height={150}
				className='px-2'
				alt='reycle'
			/>
			<span className='text-center font-mono text-xs'>trash</span>
		</div>
	);
};
