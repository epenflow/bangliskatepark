import React from 'react';
import { Slant as Hamburger } from 'hamburger-react';
interface Props {
	handleToggle: () => void;
	isDisabled: boolean;
	isToggle: boolean;
}
const MobileNavbar: React.FC<Props> = ({
	handleToggle,
	isDisabled,
	isToggle,
}: Props) => {
	return (
		<div
			id='mobile__navbar'
			className='h-10 rounded-md border border-solid border-[#C8C8C8] bg-[#f5f5f5] shadow-md lg:hidden flex items-center justify-between p-2 relative'>
			<div className='h-5 w-5 bg-black rounded-full border border-solid border-[#C8C8C8]'></div>
			<h1 className='text-xs font-mono font-bold'>
				archive//bangli--skatepark
			</h1>
			<button
				onClick={handleToggle}
				disabled={isDisabled}>
				<Hamburger
					toggled={isToggle}
					size={20}
				/>
			</button>
		</div>
	);
};

export default MobileNavbar;
