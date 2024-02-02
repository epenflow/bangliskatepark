import React from 'react';
interface IFProps {
	state: boolean;
	children: React.ReactNode;
	elseCondition: React.ReactNode;
}
const IF: React.FC<IFProps> = ({ state, children, elseCondition }) => {
	return state ? children : elseCondition;
};
export { IF };
