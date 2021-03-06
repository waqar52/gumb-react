import { Link, withTranslation } from '../../../../i18n';

import styles from './Footer.module.scss';

const Footer = ({ t }) => (
	<footer className={styles.footer}>
		<div className="container">
			<div className={styles.content}>
				<div>
					<img className={`image_wrapper centered ${styles.logo}`} src="/images/gumb.svg"/>
					<div>
						<p>{t('logo.text')}</p>
						<p>© {t('logo.copyRight')}</p>
					</div>
				</div>
				<div>
					<nav className={styles.nav}>
						<p><b>{t('navigation.title')}</b></p>
						<ul>
							<li><Link href="/">{t('navigation.links.home')}</Link></li>
							<li><Link href="/about-us">{t('navigation.links.aboutUs')}</Link></li>
							{/* <li>{t('navigation.links.why')}</li>
							<li>{t('navigation.links.community')}</li> */}
						</ul>
					</nav>
				</div>
				<div>
					<nav className={styles.nav}>
						<p><b>{t('aboutGump.title')}</b></p>
						<ul>
							<li><Link href="/about-us#team">{t('aboutGump.links.aboutTeam')}</Link></li>
							{/* <li>{t('aboutGump.links.missionAndVision')}</li>
							<li>{t('aboutGump.links.UnsereGeschichte')}</li> */}
						</ul>
					</nav>
				</div>
				<div>
					<nav className={styles.nav}>
						<p><b>{t('contactAndFeedback.title')}</b></p>
						<ul>
							{/* <li>{t('contactAndFeedback.links.social')}</li> */}
							<li>
								<a href="https://www.google.com/maps/place/Gumb+AG/@47.6968533,8.6567239,17z/data=!3m1!4b1!4m5!3m4!1s0x479a81c3d5deaaab:0xfc528db9ac381fa6!8m2!3d47.6968533!4d8.6589126" target="_blank" rel="noopener noreferrer">
									{t('contactAndFeedback.links.country')}
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className={styles.social}>
				<ul>
					<li>
						<a href="https://www.facebook.com/gumbapp/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/gumb/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
					</li>
					<li>
						<a href="https://twitter.com/GumbApp" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
					</li>
					<li>
						<a href="https://www.xing.com/companies/gumbag" target="_blank"><ion-icon name="logo-xing"></ion-icon></a>
					</li>
					<li>
						<a href="https://www.instagram.com/gumbapp/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
					</li>
					<li className={styles.divider}></li>
					<li>
						<a href="https://github.com/Gumb-AG" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
					</li>
				</ul>
			</div>
			<p className="small centered">
				<Link href="/privacy-policy">{t('additionalLinks.privacy')}</Link>
			</p>
			<p className="small centered">
				<Link href="/terms-and-conditions">{t('additionalLinks.AGB')}</Link>
			</p>
			<p className="small centered">
				<Link href="/imprint">{t('additionalLinks.impressions')}</Link>
			</p>
		</div>
	</footer>
);

export default withTranslation('footer')(Footer);