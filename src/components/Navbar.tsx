import Link from 'next/link';
import React from 'react';

const Line = () => {
	return <span className='w-[0.025rem] block h-full bg-black' />;
};
const Navbar = () => {
	return (
		<header className='sticky top-0 z-50 px-10 py-2'>
			<div className='h-10 w-full rounded-full border border-solid border-black bg-[#f2f2f2] flex flex-row items-center justify-between px-14 capitalize'>
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
		</header>
	);
};

export default Navbar;
