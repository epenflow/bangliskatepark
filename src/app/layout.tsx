import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContextProvider } from '@/lib/context/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning={true}
				className={`${inter.className}`}>
				<ContextProvider>
					<Navbar />
					{children}
					<Footer />
				</ContextProvider>
			</body>
		</html>
	);
}
