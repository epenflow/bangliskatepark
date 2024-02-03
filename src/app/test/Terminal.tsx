import React from 'react';
import { IF } from '../../components/Conditional';
import Marquee from 'react-fast-marquee';
import { createPortal } from 'react-dom';
import Draggable from 'react-draggable';
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
	styles?: React.CSSProperties;
};
const TerminalHeader = ({ variant, children, styles }: TerminalHeader) => {
	return (
		<div
			className={variant}
			style={styles}>
			{children}
		</div>
	);
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
	styles?: React.CSSProperties;
};
const TerminalWrapper = ({ maximize, children, styles }: TerminalWrapper) => {
	return (
		<Draggable>
			<div
				className={`z-[60] flex items-center justify-center w-screen h-screen ${
					maximize &&
					'bg-[#f2f2f2] fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
				}`}
				style={styles}>
				<div
					className={` bg-white rounded-md shadow-md overflow-hidden border border-solid border-black ${
						maximize
							? 'w-[95%] h-[95%]'
							: 'lg:w-[50%] lg:h-[60%] w-4/5 h-1/2'
					}`}>
					{children}
				</div>
			</div>
		</Draggable>
	);
};
interface Props {
	popUpModal: () => void;
	index: number;
}
const Terminal: React.FC<Props> = ({ popUpModal, index }) => {
	const [minimize, setMinimize] = React.useState<boolean>(false);
	const [maximize, setMaximize] = React.useState<boolean>(false);
	const programWindow = document.querySelector(
		'#program__window'
	) as HTMLDivElement;
	const minimizedWindow = document.querySelector(
		'#minimized__window'
	) as HTMLDivElement;
	function maximizePopUp() {
		setMaximize((prev) => !prev);
	}
	const variants = {
		default:
			'flex flex-row p-2 bg-[#f5f5f5] shadow-sm rounded-t-md items-center relative border-b border-solid border-black',
		minimize: `bg-[#f5f5f5] p-2 rounded-md border border-solid border-black flex items-center flex-row gap-2.5`,
	};
	function minimizePopUp() {
		setMinimize((prev) => !prev);
	}
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
			elseCondition={createPortal(
				<TerminalHeader variant={variants.minimize}>
					<TerminalHeaderItems
						maximizePopUp={maximizePopUp}
						minimizePopUp={minimizePopUp}
						popUpModal={popUpModal}
						minimize={minimize}
						text={index + 'archive/bangli---skatepark'}
					/>
				</TerminalHeader>,
				minimizedWindow
			)}>
			{createPortal(
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
				</TerminalWrapper>,
				programWindow
			)}
		</IF>
	);
};

export default Terminal;
