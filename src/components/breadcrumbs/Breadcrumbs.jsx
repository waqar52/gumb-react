import { withRouter } from 'next/router';

import { Link } from '../../../i18n';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ pathArr, router: { asPath } }) => (
	<div className={styles.breadcrumbs}>
		{pathArr.map((item, ind) => (
			<>
				<p className={item.href === asPath && styles.current}>
					<Link key={ind} href={item.href}>{item.title}</Link>
				</p>
				{pathArr.length !== ind + 1 && '>'}
			</> 
		))}
	</div>
);

export default withRouter(Breadcrumbs);