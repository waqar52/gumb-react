import { useState, useEffect, useContext } from 'react';
import { I18nContext } from 'next-i18next' 
import ContactUs from './ContactUs';
import { Zendesk, Prismic } from '../../../../api';
import { PAGE_NAMES } from '../../../../constants';
import { withPageLayout } from '../../../../HOCs';

const ContactUsContainer = () => {
	const [emailSent, setEmailSent] = useState(false);
	const [categoriesLoading, setCategoriesLoading] = useState(false);
	const [problemTypesLoading, setProblemTypesLoading] = useState(false);
	const [formOptions, setFormOptions] = useState([]);
	const { i18n: { language } } = useContext(I18nContext);

	useEffect(() => {
		(async function() {
			const response = await Prismic.getCategories(language);	
			const categories = response.results;
			const faqsResponse = await Promise.all(categories.map(category => Prismic.getDocumentTitlesByCategoryId(category.id, language)));

		})();
	}, [language]);

	useEffect(() => {
		(async function() {
			setCategoriesLoading(true);

			const response = await Prismic.getProblemsCategories(language);	
			const categories = response.results;

			setCategoriesLoading(false);
			setProblemTypesLoading(true);

			const problemTypes = await Promise.all(categories.map(category => Prismic.getTypesOfProblemsByCategoryId(category.id, language)));

			setProblemTypesLoading(false);

			const categoriesOptions = [ { value: '', label: '-' }, ...categories.map(item => ({ value: item.uid, label: item.data.how_can_we_help.title.value })) ];
			const problemTypesOptions = [ [{ value: '', label: '-' }], ...problemTypes.map(item => item.results.map(option => ({ value: option.uid, label: option.data.type_of_problem.title.value }))) ]

			setFormOptions(problemTypesOptions.map((item, ind) => ({ category: categoriesOptions[ind], options: item })).filter(item => item.options.length));
		})();
	}, [language]);
	
	const handleSubmit = async (values, { resetForm }) => {
		const data = {
			request: {
				requester: { name: "Sergei Yakzhyk", email: values.email }, 
				subject: values.subject.label,
				comment: {
					body: `How can we help: ${values.how_can_we_help.label}\n\nPlattform: ${values.plattform.label}\n\n${values.description}`
				}
			}
		};
		
		try {
			const response = await Zendesk.sendEmail(data);

			if (response.status === 201) {
				resetForm();
				setEmailSent(true);

				setTimeout(() => setEmailSent(false), 3500);
			}
		} catch(err) {
			console.log(err.message);
			alert('An error occured. Please try to send your message later.');
		}
	};

	return (
		<ContactUs
			categoriesLoading={categoriesLoading}
			problemTypesLoading={problemTypesLoading}
			formOptions={formOptions}
			emailSent={emailSent}
			onSubmit={handleSubmit}
		/>
	);
};

export default withPageLayout(ContactUsContainer, PAGE_NAMES.CONTACT_US);