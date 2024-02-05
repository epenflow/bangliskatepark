'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
const GoBack = () => {
	const route = useRouter();
	return (
		<button
			className='flex flex-row font-bold uppercase text-xs items-center'
			onClick={() => route.back()}>
			<IoIosArrowBack size={15} />
			<h1>back</h1>
		</button>
	);
};

export default GoBack;
