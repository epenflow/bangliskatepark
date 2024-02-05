import Link from 'next/link';
import Each from '../../Each';
import React from 'react';
import Line from './Line';
import NAVBAR__ITEMS from '../constants/navbar-items';
interface Props {}
const DekstopNavbarContent: React.FC<Props> = ({}: Props) => {
	return (
		<div className='w-full flex justify-between h-full'>
			<Each
				of={NAVBAR__ITEMS}
				render={(item, index) =>
					index === NAVBAR__ITEMS.length - 1 ? (
						<div
							className='h-full w-full font-mono font-bold flex flex-row items-center justify-between text-center'
							key={index}>
							<Line />
							<Link
								href={
									item.toLocaleLowerCase() === 'home'
										? '/'
										: `/${item.toLocaleLowerCase()}`
								}
								key={index}
								className='w-full'>
								<span
									id='navbar-list'
									className='block p-2'>
									{item}
								</span>
							</Link>
							<Line />
						</div>
					) : (
						<div
							className='h-full w-full font-mono font-bold flex flex-row items-center justify-between text-center'
							key={index}>
							<Line />
							<Link
								href={
									item.toLocaleLowerCase() === 'home'
										? '/'
										: `/${item.toLocaleLowerCase()}`
								}
								key={index}
								className='w-full'>
								<span
									id='navbar-list'
									className='block p-2'>
									{item}
								</span>
							</Link>
						</div>
					)
				}
			/>
		</div>
	);
};
export default DekstopNavbarContent;
