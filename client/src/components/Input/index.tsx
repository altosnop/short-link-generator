import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	linksSelector,
	loadingSelector,
} from '../../store/links/linksSelector';
import { getLink } from '../../store/links/linksSlice';
import styles from './styles.module.css';

const Input = () => {
	const dispatch = useAppDispatch();
	const links = useAppSelector(linksSelector);
	const loading = useAppSelector(loadingSelector);
	const [value, setValue] = useState('');

	const onLinkShorten = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let isShorten = false;

		links.forEach(link => {
			if (link.link !== value) {
				isShorten = false;
			} else {
				isShorten = true;
				alert('This link is already shorten!');
			}
		});

		if (!isShorten) {
			dispatch(getLink(value));
		}

		setValue('');
	};

	return (
		<form className={styles.form} onSubmit={e => onLinkShorten(e)}>
			<div className={styles.div}>
				<input
					type='url'
					id='default-search'
					className={styles.input}
					placeholder='Paste link'
					required
					autoFocus
					value={value}
					onChange={e => setValue(e.currentTarget.value)}
				/>
				<button type='submit' className={styles.button} disabled={loading}>
					Shorten Link
				</button>
			</div>
		</form>
	);
};

export default Input;
