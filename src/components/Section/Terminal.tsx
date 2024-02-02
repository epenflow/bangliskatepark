import Image from 'next/image';
import React from 'react';
import { IF } from '../Conditional';
import Marquee from 'react-fast-marquee';
interface Props {
	popUpModal: () => void;
}
type TerminalHeaderItems = {
	popUpModal: () => void;
	minimizePopUp: () => void;
	maximizePopUp: () => void;
	minimize: boolean;
	text: string;
};
const TerminalHeaderItems = ({
	popUpModal,
	minimizePopUp,
	maximizePopUp,
	minimize,
	text,
}: TerminalHeaderItems) => {
	return (
		<React.Fragment>
			<ul
				className={`flex gap-1.5 ${
					minimize ? 'relative' : 'absolute'
				}`}>
				<li
					className='block h-3 w-3 rounded-full bg-red-500 cursor-pointer'
					onClick={popUpModal}></li>
				<li
					className='block h-3 w-3 rounded-full bg-yellow-500 cursor-pointer'
					onClick={minimizePopUp}></li>
				<li
					className='block h-3 w-3 rounded-full bg-green-500'
					onClick={maximizePopUp}></li>
			</ul>
			<div className='w-full text-center'>
				<h1 className='text-xs capitalize font-semibold font-serif'>
					{text}
				</h1>
			</div>
		</React.Fragment>
	);
};

type TerminalHeader = {
	variant: string;
	children: React.ReactNode;
};
const TerminalHeader = ({ variant, children }: TerminalHeader) => {
	console.info(variant);
	return <div className={variant}>{children}</div>;
};
type TerminalContent = {
	children: React.ReactNode;
	css?: string;
};
const TerminalContent = ({ children, css }: TerminalContent) => {
	return (
		<div
			className={`${css} w-full h-full overflow-x-scroll no-scrollbar flex flex-wrap`}>
			{children}
		</div>
	);
};
type TerminalWrapper = {
	maximize: boolean;
	children: React.ReactNode;
};
const TerminalWrapper = ({ maximize, children }: TerminalWrapper) => {
	return (
		<div
			className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center justify-center w-screen h-screen ${
				maximize && 'bg-[#f2f2f2]'
			}`}>
			<div
				className={` bg-white rounded-md shadow-md overflow-hidden border border-solid border-black ${
					maximize
						? 'w-[95%] h-[95%]'
						: 'lg:w-[50%] lg:h-[60%] w-4/5 h-1/2'
				}`}>
				{children}
			</div>
		</div>
	);
};
const Terminal: React.FC<Props> = ({ popUpModal }) => {
	const [minimize, setMinimize] = React.useState<boolean>(false);
	const [maximize, setMaximize] = React.useState<boolean>(false);
	function minimizePopUp() {
		setMinimize((prev) => !prev);
	}
	function maximizePopUp() {
		setMaximize((prev) => !prev);
	}
	const variants = {
		default:
			'flex flex-row p-2 bg-[#f5f5f5] shadow-sm rounded-t-md items-center relative border-b border-solid border-black',
		minimize:
			'fixed bottom-5 right-5 bg-[#f5f5f5] p-2 rounded-full z-[60] border border-solid border-black flex items-center flex-row gap-2.5',
	};
	React.useEffect(() => {
		if (maximize) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [maximize]);
	return (
		<IF
			state={!minimize}
			elseCondition={
				<TerminalHeader variant={variants.minimize}>
					<TerminalHeaderItems
						maximizePopUp={maximizePopUp}
						minimizePopUp={minimizePopUp}
						popUpModal={popUpModal}
						minimize={minimize}
						text='archive/bangli---skatepark'
					/>
				</TerminalHeader>
			}>
			<TerminalWrapper maximize={maximize}>
				<TerminalHeader variant={variants.default}>
					<TerminalHeaderItems
						text='archive/bangli---skatepark'
						maximizePopUp={maximizePopUp}
						minimizePopUp={minimizePopUp}
						popUpModal={popUpModal}
						minimize={minimize}
					/>
				</TerminalHeader>
				<TerminalContent css='bg-[#39FF14]'>
					<Marquee
						className='p-2 h-fit uppercase font-mono text-6xl'
						autoFill={true}>
						<h1 className='mx-2'>Bangli, Bali, Indonesia</h1>
						<h1 className='mx-2'>this year!</h1>
						<h1 className='mx-2'>bupati cup</h1>
						<h1 className='mx-2'>skateboard competition!</h1>
					</Marquee>
					<h1 className='lg:text-6xl capitalize px-2 text-justify text-2xl font-semibold lg:font-normal'>
						coming soon// bupati---cup--skateboard-competition---II
					</h1>
					<h1 className='font-serif uppercase px-2'>
						Archive ⤵️ <br /> launching soon
					</h1>
				</TerminalContent>
			</TerminalWrapper>
		</IF>
	);
};

export default Terminal;
