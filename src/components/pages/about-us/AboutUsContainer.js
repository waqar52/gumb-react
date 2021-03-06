import { useState, useEffect, useContext } from 'react';
import { I18nContext } from 'next-i18next' 
import AboutUs from './AboutUs';
import { Prismic } from '../../../api';
import { PAGE_NAMES } from '../../../constants';
import { withPageLayout } from '../../../HOCs';

const AboutUsContainer = () => {
	const [data, setData] = useState(null);
	const { i18n: { language } } = useContext(I18nContext);

	useEffect(() => {
		(async function() {
			const response = await Prismic.getTeam(language);	
			const team = response.results;

			setData(team);
		})();
	}, [language]);

	return (
		<AboutUs
			data={data}
		/>
	);
};

AboutUsContainer.getInitialProps = async () => ({ namespacesRequired: ['about'] })

export default withPageLayout(AboutUsContainer, PAGE_NAMES.ABOUT_US, { transparent: true, whiteLogo: true });