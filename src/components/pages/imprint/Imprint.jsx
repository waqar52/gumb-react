import { RichText } from 'prismic-reactjs';
import { withTranslation } from '../../../../i18n'
import { Loader } from '../../../components';
import { htmlSerializer } from '../../../utils';

import styles from './Imprint.module.scss';

const Terms = props => (
	<section className={styles.section_imprint}>
		<div className="container">
			<h1>{props.t('title')}</h1>
			<div className={styles.content}>
				{props.loading ? (
					<Loader />
				) : props.data ? (
					<RichText render={props.data.data.imprint.content.value} htmlSerializer={htmlSerializer} />
				) : null}
			</div>
		</div>
	</section>
);

export default withTranslation('imprint')(Terms);