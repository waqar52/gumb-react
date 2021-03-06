import * as Yup from 'yup';

export default Yup.object().shape({
	how_can_we_help: Yup.object().shape({
        value: Yup.string().required('Required')
    }),
	subject: Yup.object().shape({
        value: Yup.string().required('Required')
    }),
	plattform: Yup.object().shape({
        value: Yup.string().required('Required')
    }),
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(100, 'Too Long!')
		.required('Required'),
	description: Yup.string()
		.min(2, 'Too Short!')
		.required('Required'),
});