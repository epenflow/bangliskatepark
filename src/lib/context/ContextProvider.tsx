'use client';
import React from 'react';
type context = {
	isErrorActive: boolean;
	handleError: () => void;
};
const Context = React.createContext<context>({
	isErrorActive: false,
	handleError: () => {},
});
interface Props {
	children: React.ReactNode;
}
export const ContextProvider = ({ children }: Props) => {
	const [isErrorActive, setErrorActive] = React.useState<boolean>(false);
	function handleError() {
		setErrorActive((prev) => !prev);
	}

	const values = {
		isErrorActive,
		handleError,
	};
	return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useContextProvider = () => {
	const context = React.useContext(Context);
	if (context === undefined) {
		throw new Error(
			'useContextProvider must use within ContextProvider, or will thrown undefined'
		);
	}
	return context;
};
export default useContextProvider;
