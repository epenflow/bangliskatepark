'use client';
import React from 'react';
import { IF } from '../../Conditional';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@/lib/hooks/useIsomorphicEffect';
type HeaderButton = {
	handleClose: () => void;
	handleMinimize: () => void;
	handleMaximize: () => void;
};
type DefaultType = {
	children: React.ReactNode;
	styles?: React.CSSProperties;
	classNames?: string;
	wrapperId?: string;
	contentId?: string;
};
type variant = {
	parentClass: string;
	ulClass: string;
};
interface WindowContent extends DefaultType {}
interface WindowHeader extends HeaderButton {
	text?: string;
	variant: variant;
}
interface Window extends DefaultType {
	handleClose: () => void;
	headerText: string;
	contentClassName?: string;
	contentStyles?: React.CSSProperties;
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

export const WindowContent = ({
	children,
	classNames,
	styles,
	contentId,
}: WindowContent) => {
	return (
		<div
			id={contentId}
			className={`${
				classNames
					? classNames
					: 'p-2 lg:p-4 w-full overflow-y-scroll h-full no-scrollbar'
			}`}
			style={styles}>
			{children}
		</div>
	);
};

const WindowWrapper = ({
	children,
	classNames,
	styles,
	maximize,
	wrapperId,
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
					id={wrapperId}
					className={classNames}
					style={styles}>
					{children}
				</div>
			}>
			<div
				id={wrapperId}
				className='fixed top-0 left-0 w-screen h-screen bg-[#00ff00] flex items-center justify-center z-[100]'>
				<div
					className={
						'w-[85%] h-[90%] bg-white rounded-md shadow-md overflow-hidden relative flex flex-col border border-solid border-[#C8C8C8]'
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
	contentClassName,
	contentStyles,
	wrapperId,
	contentId,
}: Window) => {
	const [minimize, setMinimize] = React.useState<boolean>(false);
	const [maximize, setMaximize] = React.useState<boolean>(false);
	const [domReady, setDomReady] = React.useState<boolean>(false);
	const programWindow = document.querySelector(
		'#program__window'
	) as HTMLDivElement;
	const minimizedWindow = document.querySelector(
		'#minimized__window'
	) as HTMLDivElement;
	useIsomorphicEffect(() => {
		setDomReady(true);
	}, []);
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
				'w-full p-1 relative bg-[#f5f5f5] rounded-t-md flex items-center border-b border-solid border-[#C8C8C8] z-20',
			ulClass: 'flex flex-row gap-1 absolute items-center bg-[#f5f5f5]',
		},
		minimize: {
			parentClass:
				'flex flex-row gap-1 items-center p-2 bg-[#f5f5f5] shadow-md rounded-md border border-solid border-[#C8C8C8] z-20',
			ulClass: 'flex flex-row gap-1 bg-[#f5f5f5] p-1',
		},
	};
	return (
		<IF
			state={!minimize}
			elseCondition={
				domReady
					? createPortal(
							<WindowHeader
								handleClose={handleClose}
								handleMaximize={handleMinimize}
								handleMinimize={handleMaximize}
								text={headerText}
								variant={headerVariants.minimize}
							/>,
							minimizedWindow
					  )
					: null
			}>
			{domReady
				? createPortal(
						<WindowWrapper
							maximize={maximize}
							classNames={classNames}
							styles={styles}
							wrapperId={wrapperId}>
							<WindowHeader
								handleClose={handleClose}
								handleMaximize={handleMaximize}
								handleMinimize={handleMinimize}
								text={headerText}
								variant={headerVariants.default}
							/>
							<WindowContent
								classNames={contentClassName}
								styles={contentStyles}
								contentId={contentId}>
								{children}
							</WindowContent>
						</WindowWrapper>,
						programWindow
				  )
				: null}
		</IF>
	);
};

export default Window;
