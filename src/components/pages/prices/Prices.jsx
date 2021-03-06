import PriceItem from './PriceItem';
import FreePriceItem from './FreePriceItem';
import CustomPriceItem from './CustomPriceItem';
import { Loader } from '../../../components';
import { withTranslation } from '../../../../i18n'
import { PRICE_PERIODS } from '../../../constants';

import styles from './Prices.module.scss';

const descriptions = [
	'Mit diesem Plan kannst du dein Team in bis zu 20 Gruppen aufteilen und bis zu 100 Mitglieder verwalten',
	'Gumb Classic+ gibt dir die Möglichkeit für ein 2. Team oder eine Partnerschaft mit einem weiteren Klub/Gemeinschaft',
	'Wähle genau das aus was zu deiner Gemeinschaft passt. Wie viele Mitglieder habt Ihr? Wie viele Teams möchtet Ihr verwalten? Die Angaben können jederzeit angepasst werden'
];

const Prices = props => (
	<section className={styles.prices_section}>
		<div className="container">
			<div>
				<h4>{props.t('title')}</h4>
				<div className={styles.toggler}>
					<div
						className={props.selectedPeriod === PRICE_PERIODS.YEAR ? styles.selected : ''}
						onClick={() => props.onPeriodChange(PRICE_PERIODS.YEAR)}
					>
						<p>
							{props.t('yearly')}
							<div className={styles.discount}>
								-30%
							</div>
						</p>
					</div>
					<div
						className={props.selectedPeriod === PRICE_PERIODS.MONTH ? styles.selected : ''}
						onClick={() => props.onPeriodChange(PRICE_PERIODS.MONTH)}
					>
						<p>{props.t('monthly')}</p>
					</div>
				</div>
				<div className={styles.plans_box}>
					<div className={styles.plans}>
						{props.loading ? (
							<>
								{Array(4).fill(null).map((item, ind) => (
									<div key={ind} className={styles.plan_loading}>
										<Loader size="m" />
									</div>
								))}
							</>
						) : (
							<>
								<FreePriceItem
									selectedPeriod={props.selectedPeriod}
								/>
								{props.plans.slice(0, 2).map((item, ind) => (
									<PriceItem
										item={item}
										key={ind}
										selectedPeriod={props.selectedPeriod}

										description={descriptions[ind]}	//TODO: remove after filling DB
									/>
								))}
								{props.plans.length > 0 && (
									<CustomPriceItem
										item={{ ...props.plans[props.customPlanValuesInd + 2], name: props.plans[2].name }}
										selectedPeriod={props.selectedPeriod}
										custom={true}
										customPlanValuesInd={props.customPlanValuesInd}
										onCustomPlanValuesChange={props.onCustomPlanValuesChange}

										description={descriptions[2]}	//TODO: remove after filling DB
									/>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default withTranslation('prices')(Prices);
