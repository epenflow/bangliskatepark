'use client';
import Link from 'next/link';
import React from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import { IF } from './Conditional';
import gsap from 'gsap';
import Each from './Each';
const navlist = ['Home', 'Gallery', 'Results', 'Login', 'Location'];

const Line = () => {
	return <div className='w-[0.025rem] block h-full bg-[#C8C8C8]'></div>;
};
const DesktopNavbarList = () => {
	return (
		<div className='w-full flex justify-between h-full'>
			<Each
				of={navlist}
				render={(item, index) =>
					index === navlist.length - 1 ? (
						<div
							className='h-full w-full font-mono font-bold flex flex-row items-center justify-between text-center'
							key={index}>
							<Line />
							<h1 className='w-full'>{item}</h1>
							<Line />
						</div>
					) : (
						<div
							className='h-full w-full font-mono font-bold flex flex-row items-center justify-between text-center'
							key={index}>
							<Line />
							<h1 className='w-full'>{item}</h1>
						</div>
					)
				}
			/>
		</div>
	);
};
const Navbar = () => {
	const [isToggle, setToggle] = React.useState<boolean>(false);
	const mobileNavbarContent = React.useRef<HTMLDivElement>(null);
	const mobileNavbarList = React.useRef<(HTMLHeadingElement | null)[]>([]);
	const tl = gsap.timeline({ paused: true });
	function handleToggle() {
		setToggle((prev) => !prev);
	}
	React.useLayoutEffect(() => {
		const list = document.querySelectorAll('#navbar-list');
		tl.set(mobileNavbarContent.current, {
			yPercent: -100,
			backgroundColor: 'black',
		})
			.set(list, { yPercent: 100 })
			.to(mobileNavbarContent.current, {
				yPercent: 0,
				display: 'flex',
				backgroundColor: '#f2f2f2',
			})
			.to(list, { yPercent: 0, stagger: 0.5 });

		if (isToggle) {
			tl.play();
			document.body.style.overflow = 'hidden';
		}
		return () => {
			tl.reverse();
			document.body.style.overflow = 'unset';
		};
	}, [isToggle]);
	return (
		<header
			id='navbar__wrapper'
			className='sticky top-0 z-[100] px-10 py-2 '>
			<div
				id='dekstop__navbar'
				className='h-10 w-full rounded-md border border-solid border-[#C8C8C8] bg-[#f5f5f5] hidden flex-row items-center gap-2 px-2 capitalize lg:flex shadow-md'>
				<div className='h-5 w-5 bg-black rounded-full border border-solid border-[#C8C8C8]'></div>
				<DesktopNavbarList />
				<div className='h-5 w-5 bg-black rounded-full border border-solid border-[#C8C8C8]'></div>
			</div>
			<div
				id='mobile__navbar'
				className='h-10 rounded-md border border-solid border-[#C8C8C8] bg-[#f5f5f5] shadow-md lg:hidden flex items-center justify-between p-5 relative'>
				<h1 className='text-xs font-mono font-bold'>
					archive//bangli--skatepark
				</h1>
				<button onClick={handleToggle}>
					<Hamburger
						toggled={isToggle}
						size={20}
					/>
				</button>
			</div>

			<div
				id='mobile__navbar/content'
				ref={mobileNavbarContent}
				className='absolute bg-[#f5f5f5] h-screen w-screen left-0 top-0 -z-10 hidden justify-center flex-col p-2 text-6xl gap-2 lg:hidden'>
				<Each
					of={navlist}
					render={(item, index) => (
						<h1
							key={index}
							className='h-fit overflow-hidden w-fit'>
							<span
								id='navbar-list'
								className='block p-2'>
								{item}
							</span>
						</h1>
					)}
				/>
			</div>
		</header>
	);
};

export default Navbar;
