import { useTransition } from 'react-spring';

import NumberInput from './NumberInput';
import { withTranslation } from '../../../../i18n'
import { PRICE_PERIODS } from '../../../constants';

import styles from './PriceItem.module.scss';

const FreePriceItem = ({ t, ...props }) => {
	return (
		<div className={styles.plan_card}>
			<div className={styles.card_header}>
				<p className="centered"><b>{t('freePlan.name')}</b></p>
                <h2 className={styles.price}>€0</h2>
				<p className="centered">/{props.selectedPeriod === PRICE_PERIODS.YEAR ? t('year') : t('month')}</p>
			</div>
			<hr/>
			<div className={styles.card_body}>
				<p className="small">{t('freePlan.description')}</p>
				<div className={styles.plan_features}>
					<ul>
						{Array.isArray(t('freePlan.features', { returnObjects: true })) && t('freePlan.features', { returnObjects: true }).map((item, ind) => (
							<li>
								<div className={styles.feature_description}>
									<ion-icon src="/images/checkmark.svg"></ion-icon>
									{item}
								</div>
							</li>
						))}
					</ul>
				</div>
				<button className="primary_button big_padding">{t('buttonText')}</button>
			</div>
		</div>
	);
};

export default withTranslation('prices')(FreePriceItem);