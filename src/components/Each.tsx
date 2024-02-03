import React from 'react';

const Each = <T,>({
	render,
	of,
}: {
	render: (item: T, index?: number) => React.ReactNode;
	of: T[];
}) => React.Children.toArray(of.map((item, index) => render(item, index)));
export default Each;
