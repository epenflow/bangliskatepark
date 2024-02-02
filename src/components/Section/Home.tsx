import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import HomeMarquee from './HomeMarquee';
import Link from 'next/link';
const text = {
	one: 'We are part of the PSB (Persatuan Skateboarders Bali), an official organization that accommodates the skateboard community in the Bangli area (PSB Bangli) under the auspices of PSB, which accommodates all skateboard communities in Bali. PSB Bangli was formed and built by people who have a passion and a strong desire to develop extreme sports in the Bangli area, especially skateboarding, so that the potential of young people who love skateboarding can be channeled better and directed, so that the existing potential can be developed into achievements that will later make the name of the region, nation, and country proud in this field of sports.',
	two: 'With the success of the Bupati Cup Competition I event last year, we want to continue this positive event as an annual event that is always eagerly awaited by the entire skateboard community in Bali in general. With a sustainable event, our hope as regional managers is to be able to grow and develop skateboarding as a new alternative sport for the young generation of Bangli and Bali in carrying out their creative activities towards achievements where skateboarding has been recognized by the world as a sport of achievement that has entered official competitions both from Extreme Games, SEA Games, ASIAN Games and Olympiad. The support that has been given to our activities is the spirit that drives us to remain active and strive to give our best to build potential for successful skateboard athletes who can bring pride and honor to Kabupaten Bangli in local, national, and even international events as our biggest target to achieve in the future.',
};
const Home = () => {
	return (
		<section className='w-screen lg:max-h-screen lg:h-screen flex flex-col lg:flex-row border-y border-solid border-black'>
			<div className='flex items-center justify-center h-full flex-col w-full lg:w-1/2 relative overflow-hidden lg:border-none border-b border-solid border-black gap-2'>
				<h1 className=' text-center text-4xl lg:text-8xl uppercase mt-14 lg:mt-0'>
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
					<HomeMarquee direction='right' />L
				</div>
			</div>
			<div className='flex flex-col h-full w-full lg:w-1/2 items-center justify-center border-l border-solid border-black gap-2 box-border overflow-hidden relative'>
				<h1 className='text-center text-4xl uppercase mt-5'>
					background
				</h1>
				<span className='lg:mx-16 mx-10 mb-10'>
					<p className='text-justify m-2 indent-5'>{text.one}</p>
					<p className='text-justify m-2 indent-5'>{text.two}</p>
				</span>
				<div className='absolute bottom-0'>
					<HomeMarquee direction='left' />
				</div>
			</div>
		</section>
	);
};

export default Home;
