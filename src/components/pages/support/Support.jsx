import { withTranslation, Link } from '../../../../i18n'
import { RichText } from 'prismic-reactjs';

import { SupportSearch, Loader } from '../../';

import styles from './Support.module.scss';

const Support = props => (
	<>
		<SupportSearch />
		<section className={styles.content_section}>
			<div className="container">
				<div className={styles.title}>
					<h2 className="centered">
						<span className="gradient">{props.t('gradientTitle')}</span><br/>
						{props.t('secondaryTitle')}
					</h2>
					<p className="centered">{props.t('text')}</p>
				</div>
				<div className={styles.categories}>
					{props.loading ? (
						<Loader />
					) : (props.data && props.data.map(item => (
						<div className={styles.category}>
							{RichText.render(item.category.data.category.title.value)}
							{item.results.map(result => (
								<p>
									<Link href={`/support/${result.uid}`}>
										{RichText.asText(result.data.faq.title.value)}
									</Link>
								</p>
							))}
						</div>
					)))}
				</div>
			</div>
		</section>
		<section className={styles.contact_us}>
			<div className="container">
				<h5>{props.t('contact.title')}</h5>
				<Link href="/support/contact-us">
					<button className="primary_button big_padding">{props.t('contact.buttonText')}</button>
				</Link>
			</div>
		</section>
	</>
);

export default withTranslation('support')(Support);