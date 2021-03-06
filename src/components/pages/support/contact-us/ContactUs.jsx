import { Formik } from 'formik';
import { withTranslation } from '../../../../../i18n'
import { SupportSearch, Dimmer, Breadcrumbs } from '../../../';
import { ContactUsForm } from '../../../../forms';
import validationSchema from './validationSchema';

import styles from './ContactUs.module.scss';

const initialValues = {
	how_can_we_help: { value: '', label: '-' },
	subject: { value: '', label: '-' },
	plattform: { value: '', label: '-' },
	email: '',
	name: '',
	description: ''
};

const ContactUs = props => (
	<>
		{props.emailSent && (
			<Dimmer text={props.t('emailSendMessage')} duration={3000} />
		)}
		<SupportSearch />
		<section className={styles.content_section}>
			<div className="container">
				<Breadcrumbs pathArr={[{ href: '/support', title: props.t('pageBreadCrumbs.support') }, { href: '/support/contact-us', title: props.t('pageBreadCrumbs.contactUs') }]} />
				<div className={styles.content}>
					<div className={styles.contact_us_part}>
						<h2 className="centered">{props.t('title')}</h2>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={props.onSubmit}
						>
							{formikProps => (
								<ContactUsForm
									categoriesLoading={props.categoriesLoading}
									problemTypesLoading={props.problemTypesLoading}
									formOptions={props.formOptions} 
									onSubmit={props.onSubmit} 
									{ ...formikProps } 
								/>
							)}
						</Formik>
					</div>
					<div className={styles.faq_part}>
							<h2 className="centered">{props.t('faq')}</h2>
					</div>
				</div>
			</div>
		</section>
	</>
);

export default withTranslation('contact')(ContactUs);