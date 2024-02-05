'use client';
import Image from 'next/image';
import React from 'react';
import HomeMarquee from './Home/HomeMarquee';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import Window from './Window/Window';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
	const date = new Date();

	React.useLayoutEffect(() => {
		gsap.to('#hero__wrapper', {
			scrollTrigger: {
				trigger: '#hero__wrapper',
				start: 'top top',
				end: 'bottom top',
				pin: true,
				scrub: true,
				pinSpacing: false,
				invalidateOnRefresh: true,
			},
			backgroundColor: 'black',
			color: '#00ff00',
		});
		gsap.to('#hero__text', {
			scrollTrigger: {
				trigger: '#hero__text',
				start: 'top top',
				end: 'bottom top',
				pin: true,
				scrub: true,
				pinSpacing: false,
				invalidateOnRefresh: true,
				pinType: 'transform',
			},
			yPercent: -100,
			duration: 1.5,
		});
	}, []);

	return (
		<section
			id='hero__wrapper'
			className='-z-20 h-screen w-screen flex flex-col items-center'>
			<div className='h-fit p-2 flex flex-col lg:flex-row items-center justify-between w-full border-b border-solid border-black bg-[#f2f2f2] z-20'>
				<h1 className='lg:text-8xl text-7xl py-2'>Prologue</h1>
				<h1 className=''>{date.toUTCString()}</h1>
			</div>

			<h1
				id='hero__text'
				className='text-center lg:text-8xl text-4xl py-4 uppercase font-mono flex items-center w-full justify-center h-full'>
				Bangli
				<span className='lg:h-14 lg:w-14 h-5 w-5 rounded-full bg-black block' />
				Skatepark
			</h1>
		</section>
	);
};

export default Hero;
