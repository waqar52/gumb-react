import { useState } from 'react';
import { withTranslation } from '../../../../i18n'
import { useTransition, animated } from 'react-spring'

import styles from './OurValuesList.module.scss';

const OurValuesList = (props) => {
	const [currentInd, setCurrentInd] = useState(0);
	const transitions = useTransition(currentInd, null, {
		from: { opacity: 0, position: 'absolute', right: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			duration: 200
		}
	});

	return (
		<div className={styles.our_values}>
			{Array.isArray(props.data) && (
				<>
					<ul className={styles.list}>
						{props.data.map((item, ind) => (
							<li className={styles.title} key={item.value} onMouseEnter={() => setCurrentInd(ind)}>
								<span className={currentInd === ind ? "gradient" : ""}>{item.label}</span>
							</li>
						))}
					</ul>
					<div className={styles.list_item_content_wrapper}>
						{transitions.map(({ props: style, item: ind }) => (
							<animated.div className={styles.list_item_content} style={style} key={ind} >
								<img src="/images/gumb-brand-dark.svg"/>
								<h3 className={styles.title}>
									{props.data[ind].content.title}
								</h3>
								<p>
									{props.data[ind].content.description}
								</p>
							</animated.div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default withTranslation('about')(OurValuesList);