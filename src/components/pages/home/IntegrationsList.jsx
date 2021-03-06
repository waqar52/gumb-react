import { useEffect, useRef } from 'react';
import { TweenMax, Linear, Sine } from 'gsap';

import styles from './IntegrationsList.module.scss';

const IntegrationsList = () => {
	const integrationList = useRef(null);
	const imgRefs = useRef([]);

	useEffect(() => {
		animate();
	}, []);

	const animate = () => {
		const sizes = ["s", "m", "l"];
		const w = integrationList.current.offsetWidth;
		const h = integrationList.current.offsetHeight;

		const R = (min,max) => min + Math.random() * (max - min);

		imgRefs.current.forEach((icon, i) => {
			const size = sizes[Math.ceil(Math.random() * 3) - 1];

			TweenMax.set(icon, {
				attr: { className: size },
				y: R(50, h - 210),
				x: R(w, w + 50)
			});

			TweenMax.to(icon, R(110,120), {
				x: -1500,
				ease: Linear.easeNone,
				repeat:-1,
				delay: -115 / 20 * i
			});

			TweenMax.to( icon, R(6,16), {
				y: '+=50',
				repeat: -1,
				yoyo: true,
				ease: Sine.easeInOut,
				delay: R(-16, -6)
			});
		});
	};


	return (
		<ul ref={integrationList} className={styles.integration_list}>
			{Array(20).fill().map((item, i) => (
				<li key={i}>
					<img ref={el => imgRefs.current[i] = el} src={`/images/clubs/${i + 1}.png`} alt="Club"/>
				</li>
			))}
		</ul>
	);
};

export default IntegrationsList;