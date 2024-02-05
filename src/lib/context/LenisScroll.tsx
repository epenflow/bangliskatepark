'use client';
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
interface Props {
	children: React.ReactNode;
}
const LenisScroll = ({ children }: Props) => {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
				duration: 5000,
				smoothTouch: true,
				syncTouch: true,
			}}>
			{children}
		</ReactLenis>
	);
};

export default LenisScroll;
