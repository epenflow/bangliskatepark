'use client';
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import HomeMarquee from './HomeMarquee';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const text = {
	one: 'We are part of the PSB (Persatuan Skateboarders Bali), an official organization that accommodates the skateboard community in the Bangli area (PSB Bangli) under the auspices of PSB, which accommodates all skateboard communities in Bali. PSB Bangli was formed and built by people who have a passion and a strong desire to develop extreme sports in the Bangli area, especially skateboarding, so that the potential of young people who love skateboarding can be channeled better and directed, so that the existing potential can be developed into achievements that will later make the name of the region, nation, and country proud in this field of sports.',
	two: `<span>With the success of the Bupati Cup Competition I event last year, we want to continue this positive event as an annual event that is always eagerly awaited by the entire skateboard community in Bali in general. With a sustainable event</span>, our hope as regional managers is to be able to grow and develop skateboarding as a new alternative sport for the young generation of Bangli and Bali in carrying out their creative activities towards achievements where skateboarding has been recognized by the world as a sport of achievement that has entered official competitions both from Extreme Games, SEA Games, ASIAN Games and Olympiad. The support that has been given to our activities is the spirit that drives us to remain active and strive to give our best to build potential for successful skateboard athletes who can bring pride and honor to Kabupaten Bangli in local, national, and even international events as our biggest target to achieve in the future.`,
};
const Home = () => {
	const sectionOneTrigger = {
		trigger: '#home__section-one',
		pin: true,
		scrub: true,
		start: 'top top',
		end: 'bottom top',
		invalidateOnRefresh: true,
	};
	const sectionTwoTrigger = {
		trigger: '#home__section-two',
		pin: true,
		scrub: true,
		start: 'top+=25% top',
		end: 'bottom+=25% top',
		invalidateOnRefresh: true,
		markers: true,
	};
	React.useLayoutEffect(() => {
		const tl = gsap.timeline();
		const markersText = gsap.utils.toArray('.markers__text');
		const homeText = gsap.utils.toArray('#home__section-text');
		const ctx = gsap.context(() => {
			tl.to('#home__section-one', {
				scrollTrigger: sectionOneTrigger,
				duration: 2.5,
				clipPath: 'circle(0% at 50% 50%)',
			});
			homeText.forEach((text, index) => {
				tl.to(
					'#home__section-text',
					{
						stagger: 1.5,
						duration: 2.5,
						scrollTrigger: {
							trigger: text as HTMLParagraphElement,
							pin: true,
							scrub: 0.2,
							start: 'top+=15% top',
							end: 'bottom+=50% top',
							invalidateOnRefresh: true,
							pinSpacing: false,
							pinType: 'fixed',
						},
					},
					index + 2
				);
			});
			markersText.forEach((text, index) => {
				gsap.to(text as HTMLSpanElement, {
					backgroundSize: '100% 100%',
					scrollTrigger: {
						trigger: text as HTMLSpanElement,
						start: 'top center-=2%',
						end: 'top center-=2%',
						toggleClass: '.active__markers_text',
						toggleActions: 'play paused resume reset',
						invalidateOnRefresh: true,
						scrub: 0,
					},
				});
			});
		});
		return () => ctx.revert();
	}, []);
	return (
		<section
			id='home__wrapper'
			className='w-screen lg:max-h-screen lg:h-screen flex flex-col lg:flex-row border-y border-solid border-black z-10 bg-black'>
			<div
				id='home__section-one'
				className='flex items-center justify-center h-screen lg:h-full flex-col w-full lg:w-1/2 relative overflow-hidden lg:border-none gap-2 circle__clip-path bg-[#00ff00]'>
				<h1 className='text-center text-4xl lg:text-8xl uppercase mt-14 lg:mt-0'>
					Bupati Cup Skateboard Competition
					<br />
					II
				</h1>
				<h1 className='lg:text-4xl font-medium'>
					Bangli, Bali, Indonesia
				</h1>
				<h1 className='lg:text-4xl  font-medium'>
					Agust 25 - 27, 2023
				</h1>
				<Link
					href='https://maps.app.goo.gl/ZEsAQKxDC7Q8q2JA9'
					className='mb-5 lg:mb-0'>
					-8.462643, 115.353366
				</Link>
				<div className='absolute top-0 '>
					<HomeMarquee direction='right' />
				</div>
			</div>
			<div
				id='home__section-two'
				className='flex flex-col h-full w-full lg:w-1/2 items-center justify-center border-t border-l border-solid border-black gap-2 box-border overflow-hidden relative bg-[#f2f2f2] '>
				<h1 className='text-center text-4xl uppercase mt-5 markers__text'>
					background
				</h1>
				<span className='lg:mx-16 mx-5 mb-10'>
					<p
						id='home__section-text'
						className='text-justify m-1 indent-5 square__clip-path'>
						We are part of the PSB (Persatuan Skateboarders Bali),
						an official organization that accommodates the
						skateboard community in the Bangli area (PSB Bangli)
						under the auspices of PSB, which accommodates all
						skateboard communities in Bali.
						<span className='markers__text'>
							PSB Bangli was formed and built by people who have a
							passion and a strong desire to develop extreme
							sports in the Bangli area, especially skateboarding,
							so that the potential of young people who love
							skateboarding can be channeled better and directed,
							so that the existing potential can be developed into
							achievements that will later make the name of the
							region, nation, and country proud in this field of
							sports.
						</span>
					</p>
					<p
						id='home__section-text'
						className='text-justify m-1 indent-5 square__clip-path bg-[#f2f2f2]'>
						<span className='markers__text'>
							With the success of the Bupati Cup Competition I
							event last year, we want to continue this positive
							event as an annual event that is always eagerly
							awaited by the entire skateboard community in Bali
							in general. With a sustainable event , our hope as
							regional managers is to be able to grow and develop
							skateboarding as a new alternative sport for the
							young generation of Bangli and Bali in carrying out
							their creative activities towards achievements where
							skateboarding has been recognized by the world as a
							sport of achievement that has entered official
							competitions both from Extreme Games, SEA Games,
							ASIAN Games and Olympiad.
						</span>
						The support that has been given to our activities is the
						spirit that drives us to remain active and strive to
						give our best to build potential for successful
						skateboard athletes who can bring pride and honor to
						Kabupaten Bangli in local, national, and even
						international events as our biggest target to achieve in
						the future.
					</p>
				</span>
				<div className='absolute bottom-0'>
					<HomeMarquee direction='left' />
				</div>
			</div>
		</section>
	);
};

export default Home;
