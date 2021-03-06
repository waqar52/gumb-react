import { RichText } from 'prismic-reactjs';
import { withTranslation } from '../../../../i18n'
import { Loader } from '../../../components';
import { htmlSerializer } from '../../../utils';

import styles from './Privacy.module.scss';

const Privacy = props => (
	<section className={styles.section_privacy}>
		<div className="container">
			<h1>{props.t('title')}</h1>
			<div className={styles.content}>
				{props.loading ? (
					<Loader />
				) : props.data ? (
					<RichText render={props.data.data.privacy.content.value} htmlSerializer={htmlSerializer} />
				) : null}
			</div>
		</div>
	</section>
);

export default withTranslation('privacy')(Privacy);	