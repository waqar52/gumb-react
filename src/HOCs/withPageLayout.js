import { PageLayout } from '../components';
import { PAGE_NAMES } from '../constants';

const withPageLayout = (Component, pageName, layoutProps) => {
	return () => (
		<PageLayout name={PAGE_NAMES[pageName]} { ...layoutProps } >
			<Component />
		</PageLayout>
	);
};

export default withPageLayout;