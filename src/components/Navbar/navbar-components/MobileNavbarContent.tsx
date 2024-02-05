import React from 'react';
import Each from '../../Each';
import NAVBAR__ITEMS from '../constants/navbar-items';
import Link from 'next/link';
interface Props {
	mobileNavbarContent: React.LegacyRef<HTMLDivElement>;
}
const MobileNavbarContent: React.FC<Props> = ({
	mobileNavbarContent,
}: Props) => {
	return (
		<div
			id='mobile__navbar/content'
			ref={mobileNavbarContent}
			className='absolute bg-[#f5f5f5] h-screen w-screen left-0 top-0 -z-10 hidden justify-center flex-col p-2 text-6xl gap-2 lg:hidden'>
			<Each
				of={NAVBAR__ITEMS}
				render={(item, index) => (
					<Link
						href={
							item.toLocaleLowerCase() === 'home'
								? '/'
								: `/${item.toLocaleLowerCase()}`
						}
						key={index}
						className='h-fit overflow-hidden w-fit'>
						<span
							id='navbar-list'
							className='block p-2'>
							{item}
						</span>
					</Link>
				)}
			/>
		</div>
	);
};

export default MobileNavbarContent;
