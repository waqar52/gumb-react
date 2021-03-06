import { useState, useEffect, useContext, useRef } from 'react';
import { useSpring, useTrail, config, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { ResizeObserver } from '@juggle/resize-observer'
import { i18n } from '../../../../i18n';
import { I18nContext } from 'next-i18next'

import { LANGUAGES } from '../../../constants';

import styles from './LanguagesToggler.module.scss';

const LanguagesToggler = ({ transparent, white }) => {
	const [languages, setLanguages] = useState([]);
	const popupRef = useRef()
	const { i18n: { language } } = useContext(I18nContext);
	const [listRef, { height }] = useMeasure({ polyfill: ResizeObserver });
	const [propsHeight, setHeight] = useSpring(() => ({
		config: config.stiff,
		to: { height: 0 }
	}));
	const togglerColor = useSpring({ 
		backgroundColor: Object.values(languages).length > 0 ? 'white' : white ? 'white' : '#FFF0' 
	});

	const trail = useTrail(Object.values(languages).length, {
		config: { mass: 1, tension: 500, friction: 30 },
		from: { opacity: 0.8, transform: "translate3d(-20px,0,0)" },
		to: { opacity: 1, transform: "translate3d(0,0,0)" }
	});

	useEffect(() => {
		setHeight({ height: height });
	}, [height]);

	useEffect(() => {
		document.addEventListener('click', onDocumentClick);

		return () => document.removeEventListener('click', onDocumentClick);
	});

	const onDocumentClick = ({ target }) => {
		if (!popupRef.current.contains(target)) {
			setLanguages([])
		  }
	}

	const handleChange = locale => {
		i18n.changeLanguage(locale).then(() => {
			setLanguages([]);
		});
	};

	return (
		<animated.div 
			ref={popupRef} 
			className={`${styles.toggler} ${!transparent ? styles.white_header : ''} ${white ? styles.white : ''} ${Object.values(languages).length > 0 ? styles.open : ''}`} 
			style={{ height: propsHeight.height.interpolate(h => `${h + 35}px`), ...togglerColor }}
		>
			<div className={styles.language_icon} onClick={() => setLanguages(Object.values(languages).length > 0 ? [] : LANGUAGES)}>
				<p>
					{LANGUAGES[language].locale.split('-')[0].toUpperCase()}
					<span>⌄</span>
				</p>
			</div>
			<animated.ul ref={listRef}>
				{Object.values(languages).map((item, ind) => (
					<animated.li key={ind} style={trail[ind]} onClick={() => handleChange(item.locale)}>
						{item.label}
					</animated.li>
				))}
			</animated.ul>
		</animated.div>
	);
};

export default LanguagesToggler;