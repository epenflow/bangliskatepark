import React from 'react';
import Client from '@/lib/client';
import HTMLClientComment from '@/lib/hooks/HTMLClientComment';
import WindowProgram from '@/components/Section/Window/WindowProgram';
import Live from '@/components/Section/Window/Live';
import Hero from '@/components/Section/Hero';
import Home from '@/components/Section/Home/Home';
import Gallery from '@/components/Section/Gallery/Gallery';
import Thanks from '@/components/Section/Thanks';
export default function Main() {
	return (
		<main className='overflow-hidden'>
			<Client>
				<HTMLClientComment comment='window__program/wrapper'>
					<WindowProgram />
				</HTMLClientComment>

				<Hero />
				<Home />
				<Gallery />
				<Thanks />
			</Client>
		</main>
	);
}
