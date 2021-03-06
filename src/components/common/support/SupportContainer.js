import { useState, useEffect, useContext } from 'react';
import { RichText } from 'prismic-reactjs';
import { I18nContext } from 'next-i18next' 
import Support from './Support';
import { Prismic } from '../../../api';

const SupportContainer = () => {
	const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
	const [requestTimeout, setRequestTimeout] = useState(null);
	const [results, setResults] = useState([]);
	const { i18n: { language } } = useContext(I18nContext);
	
	useEffect(() => {
        if (value.length > 3) {
            clearTimeout(requestTimeout);
            setRequestTimeout(
                setTimeout(async () => {
					setLoading(true);
					
					try {
						const response = await Prismic.getSearchResults(value, language);

						setResults(response.results.map(item => ({ title: RichText.asText(item.data.faq.title.value), uid: item.uid })).slice(0, 5));
					} catch(err) {
						console.log(err);
					}

                    setLoading(false);
                }, 300)
            );
        } else {
			if (results.length > 0) {
				setResults([]);
			}
		}
    }, [value, language]);

	const handleChange = e => {
		const value = e.target.value;

		setValue(value);
	};

	return (
		<Support loading={loading} value={value} results={results} onChange={handleChange} />
	);
};

export default SupportContainer;