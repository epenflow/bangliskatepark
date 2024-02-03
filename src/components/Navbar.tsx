'use client';
import Link from 'next/link';
import React from 'react';
import { Slant as Hamburger } from 'hamburger-react';
const Line = () => {
	return <span className='w-[0.025rem] block h-full bg-black' />;
};
const Navbar = () => {
	return (
		<header className='sticky top-0 z-50 px-10 py-2'>
			<div className='h-10 w-full rounded-full border border-solid border-black bg-[#f2f2f2] hidden flex-row items-center justify-between px-14 capitalize lg:flex'>
				<Link href={'/'}>
					<h1>Home</h1>
				</Link>
				<Line />
				<h1>gallery</h1>
				<Line />
				<h1>results</h1>
				<Line />
				<Link href={'/login'}>
					<h1>login</h1>
				</Link>
				<Line />
				<h1>location</h1>
			</div>
			<div className='h-10 rounded-full border border-solid border-black bg-[#f2f2f2] lg:hidden flex items-center justify-between p-5'>
				<h1 className='text-xs font-mono font-bold'>
					archive//bangli--skatepark
				</h1>
				<Hamburger />
			</div>
		</header>
	);
};

export default Navbar;
