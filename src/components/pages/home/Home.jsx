import Head from 'next/head';
import dynamic from 'next/dynamic'

import { withTranslation, Link } from '../../../../i18n';
import FeaturesList from './FeaturesList';
import IntegrationsList from './IntegrationsList';
import { Countdown } from '../../release-countdown';
import { PAGE_NAMES } from '../../../constants';
import { withPageLayout } from '../../../HOCs';
import tags from '../../../utils/i18ntags';

import styles from './Home.module.scss';

const Globe = dynamic(
	() => import('./globe'),
	{ ssr: false }
);
  
const Home = ({ t }) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/css/artofgumb.css"/>
			</Head>
			<Countdown />
			<section className={styles.main_section}>
				<div className="container">
					<div className={styles.content}>
						<h1>{t('title', tags)}</h1>
						<p className={styles.description}>
							{t('descriptionFirstPart')}
							<span className="gradient">
								<b>{t('descriptionGradientWord')}</b>
							</span>
							{t('descriptionSecondPart')}
						</p>
						<div className={`button_group ${styles.button_group}`}>
							<Countdown mobile={true} />
							<button className="secondary_button">{t('buttons.red')}</button>
							<button className="primary_button">{t('buttons.blue')}</button>
						</div>
					</div>
					<Globe />
				</div>
			</section>
			<section className={`${styles.section} ${styles.second_section}`}>
				<div className="container">
					<p className="centered small">{t('whitePresentation.smallTitle')}</p>
					<h2>
						<span className="gradient">{t('whitePresentation.title')}</span><br/>
						{t('whitePresentation.secondaryTitle')}
					</h2>
					<p className="centered small_paragraph">
						{t('whitePresentation.text')}
					</p>
				</div>
			</section>
			<section className={styles.section}>
				<div className="container">
					<FeaturesList />
				</div>
			</section>
			<section className={`${styles.section} ${styles.third_section}`}>
				<div className="container">
					<h3>
						{t('whitePresentation.lastSection.title')}
					</h3>
					<p className="centered small_paragraph">
						{t('whitePresentation.lastSection.text')}
					</p>
					<div className="image_wrapper centered">
						<img src="/images/macbook_with_iphone.png" alt="Gumb Web-App" />
					</div>
					<p className="small centered">{t('appSection.title')}</p>
					<div className={styles.download_app_links}>
						<img src="/images/app_store.svg" alt="App Store" />
						<img src="/images/google_play.svg" alt="Google Play" />
						<img src="/images/web.svg" alt="Web Browser" />
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.integrations_list_section}`}>
				<IntegrationsList />
			</section>
			<section className={`${styles.section} ${styles.groups_section}`}>
				<div className="container">
					<p className="centered small">{t('circles.smallTitle')}</p>
					<h3>
						{t('circles.titleGradientFirst')}<br/>
						<span className="gradient">
							{t('circles.titleGradientSecond')}
						</span>{t('circles.titleGradientThird')}
					</h3>
					<div className={styles.groups}>
						<div><h2><span className="gradient">{t('circles.content.first')}</span></h2></div>
						<div><h2><span className="gradient">{t('circles.content.second')}</span></h2></div>
						<div><h2><span className="gradient">{t('circles.content.thirdFirst')}<br/>{t('circles.content.thirdSecond')}</span></h2></div>
						<div><h2><span className="gradient">{t('circles.content.Fourth')}</span></h2></div>
					</div>
				</div>
			</section>
			<section className={`${styles.section} ${styles.contact_section}`}>
				<div className="container">
					<p className="centered small">{t('team.smallTitle')}</p>
					<h5 className="centered">
						{t('team.title')}
					</h5>
					<p className="centered">
						{t('team.text')}
					</p>
					<Link href="/support/contact-us">
						<button className="primary_button centered big_padding">{t('team.contactButton')}</button>
					</Link>
				</div>
			</section>
			 {/* <section className={`${styles.section} ${styles.statistics_section}`}>
				<div className="container">
					<h3>
						{t('stats.title')}
					</h3>
					<p className="centered">
						{t('stats.smallTitle')}
					</p>
					<div className={styles.statistics}>
						<div className={styles.statistics_item}>
							<h3>205.320</h3>
							<p className="small centered">{t('stats.registered', tags)}</p>
						</div>
						<div className={styles.statistics_item}>
							<h3>1.680</h3>
							<p className="small centered">{t('stats.clubs')}</p>
						</div>
						<div className={styles.statistics_item}>
							<h3>106</h3>
							<p className="small centered">{t('stats.countries')}</p>
						</div>
						<div className={styles.statistics_item}>
							<h3>1.352.428</h3>
							<p className="small centered">{t('stats.events', tags)}</p>
						</div>
						<div className={styles.statistics_item}>
							<h3>
								<span className="gradient with_dot">
									134
								</span>
							</h3>
							<p className="small centered">{t('stats.online')}</p>
						</div>
						<div className={styles.statistics_item}>
							<h3>12.300</h3>
							<p className="small centered">{t('stats.messages', tags)}</p>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default withPageLayout(
	withTranslation('home')(Home), 
	PAGE_NAMES.HOME, 
	{ transparent: true }
);
