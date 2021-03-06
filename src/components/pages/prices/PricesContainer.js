import { useState, useEffect } from 'react';
import Prices from './Prices';
import { Plans, Geolocation } from '../../../api';
import { PRICE_PERIODS, PAGE_NAMES } from '../../../constants';
import { withPageLayout } from '../../../HOCs';

const PricesContainer = () => {
	const [loading, setLoading] = useState(false);
	const [plans, setPlans] = useState([]);
	const [selectedPeriod, setSelectedPeriod] = useState(PRICE_PERIODS.YEAR);
	const [customPlanValuesInd, setCustomPlanValuesInd] = useState(0);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);

				const response = await Geolocation.getGeolocation();

				if (response.status === 200) {
					const plansResponse = await Plans.getPlans(response.data.country_name.toLowerCase());
			
					if (plansResponse.status === 200) {
						setPlans(plansResponse.data.data);
					}
				}

				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	const handleCustomPlanValuesChange = ind => {
		setCustomPlanValuesInd(ind);
	};

	return (
		<Prices
			loading={loading}
			plans={plans}
			selectedPeriod={selectedPeriod}
			customPlanValuesInd={customPlanValuesInd}
			onPeriodChange={setSelectedPeriod}
			onCustomPlanValuesChange={handleCustomPlanValuesChange}
		/>
	);
};

export default withPageLayout(PricesContainer, PAGE_NAMES.PRICES);
