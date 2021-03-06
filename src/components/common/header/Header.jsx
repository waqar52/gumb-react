import { useState, useEffect } from 'react';

import { Link, withTranslation } from '../../../../i18n';
import MobileHeader from './MobileHeader';
import LanguagesToggler from './LanguagesToggler';

import styles from './Header.module.scss';

const Header = ({ transparent, whiteLogo, whiteToggler, t }) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		document.addEventListener('scroll', onScroll);

		return () => document.removeEventListener('scroll', onScroll);
	}, []);

	const onScroll = () => {
		setScrolled(window.scrollY > 90);
	};

	return (
		<>
			<MobileHeader scrolled={scrolled} transparent={transparent} whiteLogo={whiteLogo} />
			<header 
				className={`${styles.header} ${!transparent ? styles.white : ''} ${scrolled ? styles.fixed : ''}`}
			>
				<div className="container">
					<div className={styles.content}>
						<div className="image_wrapper">
							<Link href="/">
								<img className={`${styles.logo} ${whiteLogo ? styles.white_logo : ''}`} src={whiteLogo ? (!scrolled ? "/images/gumb-brand-white.svg" : "/images/gumb-brand-pin.svg") : "/images/gumb.svg"} alt="Gumb" />
							</Link>
						</div>
						<nav className={styles.nav}>
							<ul>
								<li><Link href="/">{t('home')}</Link></li>
								{/* <li>{t('why')}</li> */}
								<li><Link href="/about-us">{t('about')}</Link></li>
								<li><Link href="/pricing">{t('price')}</Link></li>
								{/* <li>{t('community')}</li> */}
								<li><Link href="/support">{t('support')}</Link></li>
							</ul>
						</nav>
						{!scrolled && (
							<LanguagesToggler transparent={transparent} white={whiteToggler} />
						)}
						<div className={`button_group ${styles.buttons}`}>
							{!transparent && (
								<button className="secondary_button">{t('headerButton.temporaryButtonText')}</button>
							)}
							<button className="primary_button">{t('headerButton.mainButtonText')}</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default withTranslation('header')(Header);