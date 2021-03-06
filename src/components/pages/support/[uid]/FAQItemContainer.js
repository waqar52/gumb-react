import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { I18nContext } from 'next-i18next'

import FAQItem from './FAQItem';
import { Prismic } from '../../../../api';
import { PAGE_NAMES } from '../../../../constants';
import { withPageLayout } from '../../../../HOCs';

const FAQItemContainer = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const { query } = useRouter();
	const { i18n: { language } } = useContext(I18nContext);

	useEffect(() => {
		(async function() {
			const { uid } = query;

			if (uid) {
				setLoading(true);

				try {
					const faqItemResponse = await Prismic.getDocumentByUID(uid, language);

					if (faqItemResponse) {
						const documentTitlesResponse = await Prismic.getDocumentTitlesByCategoryId(faqItemResponse.data.faq.category.value.document.id, language);

						setData({ faqItem: faqItemResponse, titles: documentTitlesResponse });
					}
				} catch(err) {
					console.log(err.message);
				}

				setLoading(false);
			}
		})();
	}, [query, language]);

	return (
		<FAQItem
			loading={loading}
			data={data}
		/>
	);
};

FAQItemContainer.getInitialProps = async () => ({ namespacesRequired: ['supportId'] })

export default withPageLayout(FAQItemContainer, PAGE_NAMES.SUPPORT);