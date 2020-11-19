import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Layout.module.css';

export const siteTitle = 'Keeping US A-ccountable';

const Layout = ({
	children,
	home
}: {
	children: React.ReactNode;
	home?: boolean;
}) => {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta
					name="description"
					content="Keeping US A-ccountable"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle}/>
				<meta name="twitter:card" content="summary_large_image"/>
			</Head>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
