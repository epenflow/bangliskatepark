'use client';
import React from 'react';
interface Props {
	comment: string;
	children: React.ReactNode;
}
/**
 *
 * Client Hooks HTMLComment
 */
const HTMLClientComment = ({ comment, children }: Props) => {
	const commentFirstRef = React.useRef<HTMLScriptElement>(null);
	const commentSecondRef = React.useRef<HTMLScriptElement>(null);
	React.useEffect(() => {
		commentFirstRef.current!.outerHTML = `<!-- ${comment} -->`;
		commentSecondRef.current!.outerHTML = `<!-- ${comment} -->`;
	}, [comment]);
	return (
		<React.Fragment>
			<script
				ref={commentFirstRef}
				type='text/placeholder'
			/>
			{children}
			<script
				ref={commentSecondRef}
				type='text/placeholder'
			/>
		</React.Fragment>
	);
};
export default HTMLClientComment;
