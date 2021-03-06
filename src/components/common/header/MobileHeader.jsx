import { useState, useEffect } from 'react';

import { Link } from '../../../../i18n';
import LanguagesToggler from './LanguagesToggler';
import { useWindowSize } from '../../../hooks';

import styles from './MobileHeader.module.scss';

const MobileHeader = ({ scrolled, transparent, whiteLogo }) => {
	const [open, setOpen] = useState(false);
	const [currentLogoPin, setCurrentLogoPin] = useState("/images/gumb-brand-white.svg");
	const windowSize = useWindowSize();

	useEffect(() => {
		if (whiteLogo) {
			if (open && windowSize.width <= 600) {
				setTimeout(() => {
					setCurrentLogoPin("/images/gumb-brand-pin.svg");
				}, 300);
			} else if (!scrolled) {
				setCurrentLogoPin("/images/gumb-brand-white.svg");
			}
		}
	}, [open, scrolled, windowSize]);

	useEffect(() => {
		if (whiteLogo) {
			if (scrolled) {
				setCurrentLogoPin("/images/gumb-brand-pin.svg");
			} else {
				setCurrentLogoPin("/images/gumb-brand-white.svg");
			}
		}
	}, [scrolled]);

	return (
		<header className={`${styles.mobile_header} ${!transparent ? styles.white : ''} ${open ? styles.open : ''} ${scrolled ? styles.fixed : ''}`}>
			<div className={styles.burger} onClick={() => setOpen(!open)}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<Link href="/">
				<img className={`${styles.logo} ${whiteLogo ? styles.white_logo : ''}`} src={whiteLogo ? currentLogoPin : "/images/gumb.svg"} alt="Gumb" />
			</Link>
			<LanguagesToggler transparent={scrolled ? false : transparent} />
			<nav className={styles.nav}>
				<ul>
					<li className={styles.green}>
						Anmelden
					</li>
					<li className={styles.red}>
						Jetzt 30 Tage testen
					</li>
					<li><Link href="/">Home</Link></li>
					{/* <li>Warum Gumb?</li> */}
					<li><Link href="/about-us">Über uns</Link></li>
					<li><Link href="/pricing">Preise</Link></li>
					{/* <li>Community</li> */}
					<li><Link href="/support">Support</Link></li>
				</ul>
			</nav>
		</header>
	);
};

export default MobileHeader;