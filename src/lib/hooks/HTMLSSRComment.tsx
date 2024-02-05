import React from 'react';
interface Props {
	comment: string;
}
/**
 *
 * SSR HTMLComment
 */
export default function HTMLSSRComment({ comment }: Props) {
	const html = `<!-- ${comment} -->`;
	const callback = (instance: HTMLScriptElement) => {
		const outerComment = instance as HTMLScriptElement;
		outerComment!.outerHTML = html;
	};
	return (
		<script
			ref={callback}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}
