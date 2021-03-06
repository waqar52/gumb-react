import { RichText, Elements } from 'prismic-reactjs';

import { Link, withTranslation } from '../../../../../i18n';
import { SupportSearch, Breadcrumbs, Loader } from '../../../';

import styles from './FAQItem.module.scss';
   
const htmlSerializer = (type, element, content, children, key) => {
	switch(type) {
		case Elements.paragraph:
			return (
				<p className={styles.content_paragraph}>{children}</p>
			);
	
		case Elements.oListItem:
			return (
				<li className={styles.content_paragraph}>
					{children}
				</li>
			);

		case Elements.image:
			const { width, height } = element.dimensions;

			return (
				<div className="image_wrapper centered">
					<img 
						src={element.url} 
						alt={element.alt || ''}
						style={{
							width: width > height ? '100%' : 'auto',
							height: height > width ? '100%' : 'auto',
						}}
					/>
				</div>
			);
 
		case Elements.hyperlink:
			return (
				<a className={styles.content_link} href={element.data.value.url} target={element.data.target || ""} rel="noopener noreferrer">{children}</a>
			);
   
		default:
			return null;
	}
};

const FAQItem = props => (
	<>
		<SupportSearch />
		<section className={styles.content_section}>
			<div className="container">
				{props.loading ? (
					<Loader />
				) : props.data ? (
					<>
						<Breadcrumbs pathArr={[{ href: '/support', title: 'Support' }, { href: `/support/${props.data.faqItem.uid}`, title: RichText.asText(props.data.faqItem.data.faq.title.value) }]} />
						<div className={styles.content}>
							<div className={styles.articles_titles}>
								<h3 className="centered">{props.t('title')}</h3>
								{props.data.titles.results.map(result => (
									<p>
										<Link href={`/support/${result.uid}`}>
											{RichText.asText(result.data.faq.title.value)}
										</Link>
									</p>
								))}
							</div>
							<div className={styles.article}>
								<h2>{RichText.asText(props.data.faqItem.data.faq.title.value)}</h2>
								<RichText render={props.data.faqItem.data.faq.content.value} htmlSerializer={htmlSerializer} />
							</div>
							<div className={styles.articles_titles_mobile}>
								<h3 className="centered">{props.t('title')}</h3>
								{props.data.titles.results.map(result => (
									<p>
										<Link href={`/support/${result.uid}`}>
											{RichText.asText(result.data.faq.title.value)}
										</Link>
									</p>
								))}
							</div>
						</div>
					</>
				) : null}
			</div>
		</section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	</>
);

export default withTranslation('supportId')(FAQItem);