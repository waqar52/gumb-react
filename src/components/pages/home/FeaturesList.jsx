import { useWindowSize } from '../../../hooks';
import { withTranslation } from '../../../../i18n'

import styles from './FeaturesList.module.scss';

const features = [
	{
		title: 'Organisiere Vereins-Termine schnell und unkompliziert',
		description: 'Gumb ermöglicht eine einfache An- und Abmeldung für Trainings, Spiele, Proben, Auftritte oder Sitzungen. Es erspart ewiges Hin-und-Her per E-Mail. Es vermeidet hektische Telefonate und Chats kurz vor anstehenden Terminen.',
		imagePath: '/images/phone_1.png',
		inverse: false
	},
	{
		title: 'Verschaffe Dir einen Überblick über Termine und Anwesenheit',
		description: 'Leiter und Mitglieder können sich jederzeit mit Internet oder Handy über die Termine und die An-/Abmeldungen informieren. Damit kann jedes Training und jede Probe zuverlässig geplant werden (Wer kommt? Wer übernimmt welche Aufgabe?).',
		imagePath: '/images/phone_2.png',
		inverse: true
	},
	{
		title: 'Analysiere Anwesenheit und unentschuldigtes Fernbleiben',
		description: 'Gumb ermöglicht eine einfache An- und Abmeldung für Trainings, Spiele, Proben, Auftritte oder Sitzungen. Es erspart ewiges Hin-und-Her per E-Mail. Es vermeidet hektische Telefonate und Chats kurz vor anstehenden Terminen.',
		imagePath: '/images/phone_3.png',
		inverse: false
	}
];

const FeaturesList = ({ t }) => {
	const windowSize = useWindowSize();

	return (
		<div>
			{features.map((item, ind) => (
				<div key={ind} className={styles.list_item}>
					{item.inverse === true && windowSize.width >= 900 && (
						<div className="image_wrapper centered">
							<img src={item.imagePath} alt={t(`whitePresentation.featuresList.${ind}.title`)} />
						</div>
					)}
					<div>
						<h3>{t(`whitePresentation.featuresList.${ind}.title`)}</h3>
						<p className="centered">{t(`whitePresentation.featuresList.${ind}.description`)}</p>
					</div>
					{(item.inverse === false || windowSize.width < 900) && (
						<div className="image_wrapper centered">
							<img src={item.imagePath} alt={t(`whitePresentation.featuresList.${ind}.title`)} />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default withTranslation('home')(FeaturesList);
