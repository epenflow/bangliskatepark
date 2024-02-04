'use client';
import React from 'react';
import { useIsomorphicEffect } from './hooks/useIsomorphicEffect';
interface Props {
	children: React.ReactNode;
}
const Client: React.FC<Props> = ({ children }) => {
	const [isClient, setClient] = React.useState<boolean>(false);
	useIsomorphicEffect(() => {
		setClient((prev) => (prev = true));
	}, []);
	return isClient ? children : null;
};

export default Client;
