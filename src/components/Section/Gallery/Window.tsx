'use client';
import React from 'react';
import { IF } from '../../Conditional';
import { createPortal } from 'react-dom';
type HeaderButton = {
	handleClose: () => void;
	handleMinimize: () => void;
	handleMaximize: () => void;
};
type DefaultType = {
	children: React.ReactNode;
	styles?: React.CSSProperties;
	classNames?: string;
};
type variant = {
	parentClass: string;
	ulClass: string;
};
interface WindowContent {
	children: React.ReactNode;
}
interface WindowHeader extends HeaderButton {
	text?: string;
	variant: variant;
}
interface Window extends DefaultType {
	handleClose: () => void;
	headerText: string;
}
interface WindowWrapper extends DefaultType {
	maximize: boolean;
}
const HeaderButton = ({
	handleClose,
	handleMaximize,
	handleMinimize,
}: HeaderButton) => {
	return (
		<React.Fragment>
			<li
				onClick={handleClose}
				className='bg-[#FD5754] border border-solid border-[#DF494A] h-3 w-3 cursor-pointer rounded-full'></li>
			<li
				onClick={handleMinimize}
				className='bg-[#FEBB40] border border-solid border-[#E1A034] h-3 w-3 cursor-pointer rounded-full'></li>
			<li
				onClick={handleMaximize}
				className='bg-[#34C848] border border-solid border-[#30AB3B] h-3 w-3 cursor-pointer rounded-full'></li>
		</React.Fragment>
	);
};
export const WindowHeader = ({
	text = '',
	handleClose,
	handleMaximize,
	handleMinimize,
	variant,
}: WindowHeader) => {
	const buttonProps = {
		handleClose,
		handleMaximize,
		handleMinimize,
	};
	function Maximize() {
		return (
			<div className={variant.parentClass}>
				<ul className={variant.ulClass}>
					<HeaderButton {...buttonProps} />
				</ul>
				<div className='w-full flex items-center justify-center'>
					<h1 className='text-xs font-mono font-bold line-clamp-1'>
						{text}
					</h1>
				</div>
			</div>
		);
	}
	return <Maximize />;
};

export const WindowContent = ({ children }: WindowContent) => {
	return (
		<div
			className={`p-2 lg:p-4 w-full overflow-y-scroll h-full no-scrollbar`}>
			{children}
		</div>
	);
};

const WindowWrapper = ({
	children,
	classNames,
	styles,
	maximize,
}: WindowWrapper) => {
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
			state={maximize}
			elseCondition={
				<div
					className={classNames}
					style={styles}>
					{children}
				</div>
			}>
			<div className='fixed top-0 left-0 w-screen h-screen bg-[#39FF14] flex items-center justify-center z-[60]'>
				<div
					className={
						'w-[85%] h-[90%] bg-white rounded-md shadow-md flex flex-col'
					}
					style={styles}>
					{children}
				</div>
			</div>
		</IF>
	);
};
const Window = ({
	children,
	classNames,
	styles,
	handleClose,
	headerText,
}: Window) => {
	const [minimize, setMinimize] = React.useState<boolean>(false);
	const [maximize, setMaximize] = React.useState<boolean>(false);

	const programWindow = document.querySelector(
		'#program__window'
	) as HTMLDivElement;
	const minimizedWindow = document.querySelector(
		'#minimized__window'
	) as HTMLDivElement;
	function handleMaximize() {
		setMaximize((prev) => !prev);
		console.info('maximize');
	}
	function handleMinimize() {
		setMinimize((prev) => !prev);
		console.info('minimize');
	}
	const headerVariants = {
		default: {
			parentClass:
				'w-full p-1 relative bg-[#f5f5f5] rounded-t-md flex items-center border-b border-solid border-[#C8C8C8]',
			ulClass: 'flex flex-row gap-1 absolute items-center bg-[#f5f5f5]',
		},
		minimize: {
			parentClass:
				'flex flex-row gap-1 items-center p-2 bg-[#f5f5f5] shadow-md rounded-md border border-solid border-[#C8C8C8]',
			ulClass: 'flex flex-row gap-1 bg-[#f5f5f5] p-1',
		},
	};
	return (
		<IF
			state={!minimize}
			elseCondition={createPortal(
				<WindowHeader
					handleClose={handleClose}
					handleMaximize={handleMinimize}
					handleMinimize={handleMaximize}
					text={headerText}
					variant={headerVariants.minimize}
				/>,
				minimizedWindow
			)}>
			{createPortal(
				<WindowWrapper
					maximize={maximize}
					classNames={classNames}
					styles={styles}>
					<WindowHeader
						handleClose={handleClose}
						handleMaximize={handleMaximize}
						handleMinimize={handleMinimize}
						text={headerText}
						variant={headerVariants.default}
					/>
					<WindowContent>{children}</WindowContent>
				</WindowWrapper>,
				programWindow
			)}
		</IF>
	);
};

export default Window;
