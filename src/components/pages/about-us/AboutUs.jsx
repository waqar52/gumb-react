import { RichText } from 'prismic-reactjs';
import { withTranslation } from '../../../../i18n'
import OurValuesList from './OurValuesList';

import styles from './AboutUs.module.scss';

const getImageStyles = ({ width, height }) => ({
	width: width > height ? '100%' : 'auto',
	height: height > width ? '100%' : 'auto',
});

const AboutUs = props => {
	return (
		<>
			<div className={styles.video_wrapper}>
				<video autoPlay loop muted>
					<source src="/videos/backvid.mp4" type="video/mp4"/>
				</video>
			</div>
			<section className={styles.title_section}>
				<div className="container">
					<div className={styles.title}>
						<h2 className="centered">{props.t('title')}</h2>
						<p className="centered small_paragraph">{props.t('paragraph')}</p>
					</div>
				</div>
			</section>
			<section className={styles.team_section} id="team">
				<div className="container">
					{props.data && Array.isArray(props.data) && (
						<div className={styles.team_members}>
							{props.data.map(item => (
								<div className={styles.team_member}>
									<div className={styles.team_member_data}>
										<h3>
											{RichText.asText(item.data.team.first_name.value)}<br/>
											{RichText.asText(item.data.team.last_name.value)}
										</h3>
										<p>{RichText.asText(item.data.team.position.value)}</p>
										{item.data.team.social_media.value.filter(item => item.link).length > 0 && (
											<div className={styles.social}>
												<ul>
													{item.data.team.social_media.value.map((item, ind) => (
														<li key={ind}>
															<a href={item.link.value.url} target="_blank" rel="noopener noreferrer">
																<img src={item.social.value.document.data.social_media.icon.value.main.url}/>
															</a>
														</li>
													))}
												</ul>
											</div>
										)}
									</div>
									<div className={`image_wrapper centered ${styles.photo}`}>
										<img
											src={item.data.team.photo.value.main.url} 
											alt={item.data.team.photo.value.main.alt || ''}
											style={getImageStyles(item.data.team.photo.value.main.dimensions)}
										/>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>
			<section className={styles.our_values_section}>
				<div className="container">
					<h2 className="centered">{props.t('lowerTitle.firstWord')}
						<span className="gradient"> {props.t('lowerTitle.gradientWord')}</span>
					?
					</h2>
					<p className="centered">
						{props.t('lowerTitle.lastWord')}
					</p>
					<OurValuesList data={props.t('valueList', { returnObjects: true })} />
				</div>
			</section>
		</>
	);
};

export default withTranslation('about')(AboutUs);