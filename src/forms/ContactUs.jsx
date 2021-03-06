import { Form, Field, ErrorMessage } from 'formik';

import { withTranslation } from '../../i18n'
import { Loader } from '../components';

import styles from './Forms.module.scss';

const Error = ({ name }) => (
	<ErrorMessage 
		name={name} 
	>
		{message => <span className={styles.validation_error}>{message}</span>}
	</ErrorMessage>
);

const InputField = ({ name, ...props }) => (
	<Field name={name} className={props.errors[name] && props.touched[name] && styles.error} { ...props } />
);

const SelectField = ({ name, options, loading, ...props }) => (
	<div className={styles.selectFieldWrapper}>
		{loading && (
			<div className={styles.loader_wrapper}>
				<Loader size="xs" />
			</div>
		)}
		<Field
			as="select" 
			value={props.values[name].value} 
			name={name} 
			className={props.errors[name] && props.touched[name] && styles.error} 
			onChange={e => props.setFieldValue(name, options.find(item => item.value === e.target.value))}
			onBlur={() => props.setFieldTouched(name)}
			{ ...props }
		>
			{options.map(option => (
				<option key={option.value} value={option.value}>{option.label}</option>
			))}
		</Field>
	</div>
);

const ContactUs = props => (
	<Form className={styles.contact_us}>
		<label for="how_can_we_help">
			{props.t('forms.howWeCanHelp')}
			{props.errors.how_can_we_help && props.touched.how_can_we_help && (
				<span className={styles.validation_error}>{props.errors.how_can_we_help.value}</span>
			)}
		</label>
		<SelectField
			name="how_can_we_help"
			options={props.formOptions ? props.formOptions.map(item => item.category) : []}
			loading={props.categoriesLoading}
			{ ...props }
		/>

		<label for="subject">
		{props.t('forms.subject')}
			{props.errors.subject && props.touched.subject && (
				<span className={styles.validation_error}>{props.errors.subject.value}</span>
			)}
		</label>
		<SelectField 
			name="subject"
			options={props.formOptions?.length ? props.formOptions.find(item => item.category.value === props.values.how_can_we_help.value)?.options : []}
			loading={props.problemTypesLoading}
			{ ...props }
		/>

		<label for="plattform">
		{props.t('forms.plattform')}
			{props.errors.plattform && props.touched.plattform && (
				<span className={styles.validation_error}>{props.errors.plattform.value}</span>
			)}
		</label>
		<SelectField 
			name="plattform"
			options={[{ value: '', label: '-' }, { value: 'web', label: 'Web' }, { value: 'android', label: 'Android' }, { value: 'ios', label: 'iOS' }]}
			loading={false}
			{ ...props }
		/>

		<label for="email">
		{props.t('forms.email')}
			<Error name="email" />
		</label>
		<InputField name="email" { ...props } />

		<label for="name">
		{props.t('forms.name')}
			<Error name="name" />
		</label>
		<InputField name="name" { ...props } />

		<label for="description">
		{props.t('forms.description')}
			<Error name="description" />
		</label>
		<InputField name="description" as="textarea" rows="5" name="description" { ...props } />

		<button className="primary_button big_padding centered" type="submit">{props.t('forms.submit')}</button>
	</Form>
);

export default withTranslation('contact')(ContactUs);