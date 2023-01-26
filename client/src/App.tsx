import React from 'react';
import Input from './components/Input';
import Link from './components/Link';
import { useAppSelector } from './hooks/useAppSelector';
import { linksSelector } from './store/links/linksSelector';
import styles from './App.module.css';

function App() {
	const links = useAppSelector(linksSelector);

	return (
		<div className={styles.div}>
			<h1 className={styles.h1}>Short Link Generator</h1>
			<Input />
			{links.length > 0 &&
				links.map(({ linkId, link, shortLink }, index) => (
					<Link key={linkId} id={linkId} link={link} shortLink={shortLink} />
				))}
		</div>
	);
}

export default App;
