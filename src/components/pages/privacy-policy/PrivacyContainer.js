import { useState, useEffect, useContext } from 'react';
import { I18nContext } from 'next-i18next' 
import Privacy from './Privacy';
import { Prismic } from '../../../api';
import { PAGE_NAMES } from '../../../constants';
import { withPageLayout } from '../../../HOCs';

const PrivacyContainer = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const { i18n: { language } } = useContext(I18nContext);

	useEffect(() => {
		(async function() {
			setLoading(true);

			try {
				const response = await Prismic.getPrivacy(language);	
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
		<Privacy
			loading={loading}
			data={data}
		/>
	);
};

PrivacyContainer.getInitialProps = async () => ({ namespacesRequired: ['privacy'] })

export default withPageLayout(PrivacyContainer, PAGE_NAMES.PRIVACY);