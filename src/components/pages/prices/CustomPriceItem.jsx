import { useTransition } from 'react-spring';

import NumberInput from './NumberInput';
import { withTranslation } from '../../../../i18n'
import { PRICE_PERIODS } from '../../../constants';

import styles from './PriceItem.module.scss';

const CustomPriceItem = ({ item, t, ...props }) => {
	return (
		<div className={`${styles.plan_card} ${styles.custom_plan_card}`}>
			<div className={styles.card_header}>
				<p className="centered"><b>{item.name}</b></p>
                <h2 className={styles.price}>€{props.selectedPeriod === PRICE_PERIODS.YEAR ? item.yearlyValue : item.monthlyValue}</h2>
				<p className="centered">/{props.selectedPeriod === PRICE_PERIODS.YEAR ? t('year') : t('month')}</p>
			</div>
			<hr/>
			<div className={styles.card_body}>
				<p className="small">{props.description}</p>
				<div className={styles.plan_features}>
					<ul>
						<li>
							<div className={styles.feature_description}>
								{item.chatEnabled ? (
									<ion-icon src="/images/checkmark.svg"></ion-icon>
								) : (
									<ion-icon src="/images/cross.svg"></ion-icon>
								)}
								{item.chatEnabled ? t('chatIncluded') : t('noChat')}
							</div>
						</li>
						<li>
							<div className={styles.feature_description}>
								{item.maxGroups ? (
									<ion-icon src="/images/checkmark.svg"></ion-icon>
								) : (
									<ion-icon src="/images/cross.svg"></ion-icon>
								)}
                                {`${item.maxGroups} ${t('groups')}`}
							</div>
						</li>
						<li>
							<div className={styles.feature_description}>
								{item.maxMembers ? (
									<ion-icon src="/images/checkmark.svg"></ion-icon>
								) : (
									<ion-icon src="/images/cross.svg"></ion-icon>
								)}
                                {`${item.maxMembers} ${t('members')}`}
							</div>
							{props.custom && (
								<NumberInput
									ind={props.customPlanValuesInd}
									value={item.maxMembers}
									onChange={props.onCustomPlanValuesChange} 
								/>
							)}
						</li>
						<li>
							<div className={styles.feature_description}>
								{item.maxCommunities ? (
									<ion-icon src="/images/checkmark.svg"></ion-icon>
								) : (
									<ion-icon src="/images/cross.svg"></ion-icon>
								)}
                                {`${item.maxCommunities} ${t('communities')}`}
							</div>
							{props.custom && (
								<NumberInput
									ind={props.customPlanValuesInd}
									value={item.maxCommunities}
									onChange={props.onCustomPlanValuesChange} 
								/>
							)}
						</li>
					</ul>
				</div>
				<button className="secondary_button big_padding">{t('buttonText')}</button>
			</div>
		</div>
	);
};

export default withTranslation('prices')(CustomPriceItem);