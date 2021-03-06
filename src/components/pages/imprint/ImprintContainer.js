import { useState, useEffect, useContext } from 'react';
import { I18nContext } from 'next-i18next' 
import Imprint from './Imprint';
import { Prismic } from '../../../api';
import { PAGE_NAMES } from '../../../constants';
import { withPageLayout } from '../../../HOCs';

const ImprintContainer = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const { i18n: { language } } = useContext(I18nContext);

	useEffect(() => {
		(async function() {
			setLoading(true);

			try {
				const response = await Prismic.getImprint(language);	
				const privacy = response.results[0];

				if (privacy) {
					setData(privacy);
				}
			} catch (err) {
				console.log(err);
			}
			
			setLoading(false);
		})();
	}, [language]);

	return (
		<Imprint
			loading={loading}
			data={data}
		/>
	);
};

ImprintContainer.getInitialProps = async () => ({ namespacesRequired: ["imprint"] })

export default withPageLayout(ImprintContainer, PAGE_NAMES.IMPRINT);