import React from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeLink } from '../../store/links/linksSlice';
import styles from './styles.module.css';

type TLinkProps = {
	id: string;
	link: string;
	shortLink: string;
};

const Link = ({ id, link, shortLink }: TLinkProps) => {
	const dispatch = useAppDispatch();

	const onRemoveLink = (id: string) => {
		dispatch(removeLink(id));
	};

	return (
		<div className={styles.div}>
			<p className={styles.p}>{link.substring(0, 88)}...</p>
			<a href={shortLink} target='_blank' rel='noreferrer' className={styles.a}>
				{shortLink}
			</a>
			<button
				className={styles.buttonCopy}
				onClick={() => {
					navigator.clipboard.writeText(shortLink);
				}}
			>
				Copy
			</button>
			<button
				type='button'
				className={styles.buttonClose}
				onClick={() => onRemoveLink(id)}
			>
				<svg
					className={styles.svg}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					aria-hidden='true'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
		</div>
	);
};

export default Link;
