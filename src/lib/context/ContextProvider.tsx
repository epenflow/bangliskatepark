'use client';
import React from 'react';
type context = {
	stack: HTMLElement[];
	stacking: React.JSX.Element[];
	setStack: React.Dispatch<React.SetStateAction<HTMLElement[]>>;
};
const Context = React.createContext<context>({
	stack: [],
	setStack: () => {},
	stacking: [],
});
interface Props {
	children: React.ReactNode;
}
export const ContextProvider = ({ children }: Props) => {
	const [stack, setStack] = React.useState<HTMLElement[]>([]);
	const stacking: React.JSX.Element[] = [];
	const values = {
		stack,
		setStack,
		stacking,
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
