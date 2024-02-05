'use client';
import React from 'react';
import gsap from 'gsap';
import HTMLClientComment from '@/lib/hooks/HTMLClientComment';
import MobileNavbar from './navbar-components/MobileNavbar';
import MobileNavbarContent from './navbar-components/MobileNavbarContent';
import DekstopNavbar from './navbar-components/DekstopNavbar';
const Navbar = () => {
	/**
	 * isToggle, isDisable is Navbar state management
	 */
	const [isToggle, setToggle] = React.useState<boolean>(false);
	const [isDisabled, setDisabled] = React.useState<boolean>(false);
	/**
	 * mobileNavbarContent is useRef hooks for animating mobile navbar content
	 */
	const mobileNavbarContent = React.useRef<HTMLDivElement>(null);
	/**
	 * gsap timeline
	 */
	const tl = gsap.timeline({ paused: true });
	/**
	 * handleToggle
	 */
	function handleToggle() {
		setToggle((prev) => !prev);
	}
	/**
	 * layoutEffect
	 */
	React.useLayoutEffect(() => {
		const list = document.querySelectorAll('#navbar-list');
		tl.set(mobileNavbarContent.current, {
			yPercent: -100,
			backgroundColor: 'black',
		})
			.set(list, {
				yPercent: 100,
			})
			.to(mobileNavbarContent.current, {
				yPercent: 0,
				display: 'flex',
				backgroundColor: '#00ff00',
				onStart: () => setDisabled((prev) => !prev),
			})
			.to(list, {
				yPercent: 0,
				stagger: 0.25,
				onComplete: () => setDisabled((prev) => !prev),
			});

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
			<HTMLClientComment comment='dekstop__navbar/wrapper'>
				<DekstopNavbar />
			</HTMLClientComment>
			<HTMLClientComment comment='mobile__navbar/wrapper'>
				<MobileNavbar
					handleToggle={handleToggle}
					isDisabled={isDisabled}
					isToggle={isToggle}
				/>
			</HTMLClientComment>
			<MobileNavbarContent mobileNavbarContent={mobileNavbarContent} />
		</header>
	);
};

export default Navbar;
