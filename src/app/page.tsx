import Gallery from '@/components/Section/Gallery';
import Hero from '@/components/Section/Hero';
import Home from '@/components/Section/Home';
import Thanks from '@/components/Section/Thanks';
export default function Page() {
	return (
		<main className='overflow-hidden'>
			<Hero />
			<Home />
			<Gallery />
			<Thanks />
		</main>
	);
}
