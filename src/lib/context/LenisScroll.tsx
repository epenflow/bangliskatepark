'use client';
import React from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { useIsomorphicEffect } from '../hooks/useIsomorphicEffect';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
interface Props {
	children: React.ReactNode;
}
const LenisScroll = () => {
	useIsomorphicEffect(() => {
		(async () => {
			gsap.registerPlugin(ScrollTrigger);
		})();
		const lenis = new Lenis({
			smoothWheel: true,
			lerp: 0.025,
			syncTouch: true,
			syncTouchLerp: 0.025,
			autoResize: true,
			touchInertiaMultiplier: 2.5,
		});
		function update(time: number) {
			lenis.raf(time * 1000);
		}
		function initSmoothScroll() {
			lenis.on('scroll', () => ScrollTrigger.update);
			gsap.ticker.add(update);
			gsap.ticker.lagSmoothing(0);
		}
		initSmoothScroll();
		return () => gsap.ticker.remove(update);
	}, []);
	return null;
};

export default LenisScroll;
