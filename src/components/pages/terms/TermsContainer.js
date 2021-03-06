import { useState, useEffect, useContext } from 'react';
import { I18nContext } from 'next-i18next' 
import Terms from './Terms';
import { Prismic } from '../../../api';
import { PAGE_NAMES } from '../../../constants';
import { withPageLayout } from '../../../HOCs';

const TermsContainer = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const { i18n: { language } } = useContext(I18nContext);

	useEffect(() => {
		(async function() {
			setLoading(true);

			try {
				const response = await Prismic.getTerms(language);	
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
		<Terms
			loading={loading}
			data={data}
		/>
	);
};

TermsContainer.getInitialProps = async () => ({ namespacesRequired: ["terms"] })

export default withPageLayout(TermsContainer, PAGE_NAMES.TERMS);