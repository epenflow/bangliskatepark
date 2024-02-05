import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

interface Props {
	children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
	return <React.Fragment>{children}</React.Fragment>;
}
