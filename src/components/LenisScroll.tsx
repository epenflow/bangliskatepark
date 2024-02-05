'use client';
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
interface Props {
	children: React.ReactNode;
}
const LenisScroll = ({ children }: Props) => {
	const lenisRef = React.useRef<any>(null);
	React.useEffect(() => {
		function update(time: number) {
			lenisRef.current?.lenis.raf(time * 1500);
		}
		gsap.ticker.add(update);
		return () => {
			gsap.ticker.remove(update);
		};
	}, []);
	return (
		<ReactLenis
			root
			ref={lenisRef}
			autoRaf={false}
			options={{ lerp: 0.1, duration: 100, smoothTouch: true }}>
			{children}
		</ReactLenis>
	);
};

export default LenisScroll;
