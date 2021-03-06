import { useEffect, useRef } from 'react';

import styles from './Dimmer.module.scss';

const Dimmer = props => {
	const messageBox = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			messageBox.current.style.transform = 'scale(1)';
		}, 0);
		
		
		if (props.duration) {
			setTimeout(() => {
				messageBox.current.style.transform = 'scale(0)';
			}, props.duration)
		}
	}, []);

	return (
		<div className={styles.dimmer}>				
			<div ref={messageBox} className={styles.message_box}>
				<h5 className="centered">{props.text || ''}</h5>
			</div>
		</div>
	);
};

export default Dimmer;