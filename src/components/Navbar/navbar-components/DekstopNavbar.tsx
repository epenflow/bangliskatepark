import React from 'react';
import CircleProgress from './CircleProgress';
import DekstopNavbarContent from './DekstopNavbarContent';
import HTMLClientComment from '@/lib/hooks/HTMLClientComment';
const DekstopNavbar = () => {
	return (
		<div
			id='dekstop__navbar'
			className='h-10 w-full rounded-md border border-solid border-[#C8C8C8] bg-[#f5f5f5] hidden flex-row items-center gap-2 px-2 capitalize lg:flex shadow-md'>
			<CircleProgress />
			<HTMLClientComment comment='dekstop__navbar/content'>
				<DekstopNavbarContent />
			</HTMLClientComment>
			<CircleProgress />
		</div>
	);
};

export default DekstopNavbar;
