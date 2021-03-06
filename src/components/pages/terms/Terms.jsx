import { RichText } from 'prismic-reactjs';
import { withTranslation } from '../../../../i18n'
import { Loader } from '../../../components';
import { htmlSerializer } from '../../../utils';

import styles from './Terms.module.scss';

const Terms = props => (
	<section className={styles.section_terms}>
		<div className="container">
			<h1>{props.t('title')}</h1>
			<div className={styles.content}>
				{props.loading ? (
					<Loader />
				) : props.data ? (
					<RichText render={props.data.data.terms.content.value} htmlSerializer={htmlSerializer} />
				) : null}
			</div>
		</div>
	</section>
);

export default withTranslation('terms')(Terms);