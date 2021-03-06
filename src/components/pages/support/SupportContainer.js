import { useState, useEffect, useContext } from 'react';
import { I18nContext } from 'next-i18next' 
import Support from './Support';
import { Prismic } from '../../../api';
import { PAGE_NAMES } from '../../../constants';
import { withPageLayout } from '../../../HOCs';

const SupportContainer = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const {i18n: { language }} = useContext(I18nContext);

	useEffect(() => {
		(async function() {
			setLoading(true);

			try {
				const response = await Prismic.getCategories(language);	
				const categories = response.results;
				const faqsResponse = await Promise.all(categories.map(category => Prismic.getDocumentTitlesByCategoryId(category.id, language)));
	
				setData(faqsResponse.map((item, ind) => ({ category: categories[ind], results: item.results })).filter(item => item.results.length));
			} catch (err) {
				console.log(err);
			}
			
			setLoading(false);
		})();
	}, [language]);

	return (
		<Support
			loading={loading}
			data={data}
		/>
	);
};

SupportContainer.getInitialProps = async () => ({ namespacesRequired: ['support'] })

export default withPageLayout(SupportContainer, PAGE_NAMES.SUPPORT);