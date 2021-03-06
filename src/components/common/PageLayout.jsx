import { NextSeo } from 'next-seo';

import { withTranslation } from '../../../i18n';
import Header from './header';
import Footer from './footer';
import { PAGE_NAMES } from '../../constants';

const PageLayout = ({ name, children, t, ...props }) => (
	<>
		<NextSeo title={t(name, { returnObjects: true }).title} description={t(name, { returnObjects: true }).description} />
		<Header 
			transparent={props.transparent} 
			whiteLogo={props.whiteLogo} 
			whiteToggler={name === PAGE_NAMES.SUPPORT || name === PAGE_NAMES.CONTACT_US} 
		/>
		<main>
			{ children }
		</main>
		<Footer />
	</>
);

export default withTranslation('pagesData')(PageLayout);