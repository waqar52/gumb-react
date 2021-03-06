import Link from 'next/link';

import { withPageLayout } from '../../../HOCs';

import styles from './NotFound.module.scss';

const NotFound = () => (
	<section className={styles.not_found}>
		<h2><span className="gradient">404</span><br/>Page Not Found</h2>
		<Link href="/">
			<button className="primary_button">Return To Home Page</button>
		</Link>
	</section>
);

export default withPageLayout(NotFound);