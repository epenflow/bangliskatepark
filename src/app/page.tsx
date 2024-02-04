import Gallery from '@/components/Section/Gallery';
import Hero from '@/components/Section/Hero';
import Home from '@/components/Section/Home';
import Live from '@/components/Live';
import Thanks from '@/components/Section/Thanks';
import WindowProgram from '@/components/Section/WindowProgram';
import Client from '@/lib/client';
export default function Page() {
	return (
		<Client>
			<main className='overflow-hidden'>
				<WindowProgram />
				<Live />
				<Hero />
				<Home />
				<Gallery />
				<Thanks />
			</main>
		</Client>
	);
}
