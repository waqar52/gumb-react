import { useEffect, useRef } from 'react';

import styles from './NumberInput.module.scss';

const NumberInput = ({ ind, value, onChange }) => {
	const valueSpan = useRef(null);

	useEffect(() => {
		const el = valueSpan.current;

		el.style.transform = 'scale(0)';

		setTimeout(() => {
			el.style.transform = 'scale(1)';
		}, 100);
	}, [ind]);

	const handleClick = newInd => {
		onChange(newInd);
	};

	return (
		<div className={styles.box}>
			<div className="image_wrapper centered">
				<img 
					className={`image_wrapper centered${ind === 0 ? ' disabled' : ''}`} 
					src="/images/minus.png" 
					alt="minus" 
					onClick={() => handleClick(ind - 1)}
				/>
			</div>
			<div className={styles.value}>
				<span ref={valueSpan}>{value}</span>
			</div>
			<div className="image_wrapper centered">
				<img 
					className={`image_wrapper centered${ind === 5 ? ' disabled' : ''}`} 
					src="/images/plus.png" 
					alt="plus" 
					onClick={() => handleClick(ind + 1)}
				/>
			</div>
		</div>
	);
};

export default NumberInput;