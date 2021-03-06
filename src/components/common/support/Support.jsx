import { useState, useEffect, useRef, Fragment } from 'react';
import { withTranslation, Link } from '../../../../i18n'
import { useSpring, useTrail, config, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { ResizeObserver } from '@juggle/resize-observer'
import { Loader } from '../../loader';

import styles from './Support.module.scss';

const Support = ({ loading, value, results, onChange, t }) => {
	const [listShown, setListShown] = useState(false);
	const inputRef = useRef(null);
	const [listRef, { height }] = useMeasure({ polyfill: ResizeObserver });

	const [propsHeight, setHeight] = useSpring(() => ({
		config: config.stiff,
		to: { height: 0 }
	}));

	const trail = useTrail(results.length, {
		config: { mass: 1, tension: 500, friction: 30 },
		from: { opacity: 0.8, transform: "translate3d(-30px,0,0)" },
		to: { opacity: 1, transform: "translate3d(0,0,0)" }
	});

	useEffect(() => {
		document.addEventListener('click', onDocumentClick);

		return () => document.removeEventListener('click', onDocumentClick);
	});

	useEffect(() => {
		setHeight({ height: height });
	}, [height]);

	const onDocumentClick = e => {
		const input = inputRef.current;
		const list = listRef.current;

		if (list !== e.target.parentNode && input !== e.target) {
			setListShown(false);
		}
	};

	return (
		<section className={styles.support_section}>
			<div className="container">
				<h1 className="centered">{t('supportTitle')}</h1>
				<div className={styles.input_wrapper}>
					<ion-icon name="search-outline"></ion-icon>
					<animated.div className={styles.results_box} style={{ height: propsHeight.height.interpolate(h => `${h + 55}px`) }}>
						<div className={styles.input_with_loader}>
							<input ref={inputRef} placeholder={t('supportInputPlaceholder')} value={value} onChange={onChange} onClick={() => setListShown(true)}/>
							<div className={styles.loader_wrapper}>
								{loading && (
									<Loader size="s" />
								)}
							</div>
						</div>
						{listShown && (
							<animated.ul ref={listRef} className={styles.list}>
								{trail.map((props, ind) => (
									<Fragment key={ind}>
										<animated.li className={styles.list_item} style={props}>
											<Link href={`/support/${results[ind].uid}`}>
												{results[ind].title}
											</Link>
										</animated.li>
										{ind !== results.length - 1 && (
											<hr/>
										)}
									</Fragment>
								))}
							</animated.ul>
						)}
					</animated.div>
				</div>
			</div>
		</section>
	);
};

export default withTranslation('contact')(Support);