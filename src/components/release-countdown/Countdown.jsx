import { useState, useEffect } from 'react';
import { animated, useTransition } from "react-spring";

import { withTranslation } from '../../../i18n';

import styles from './Countdown.module.scss';

const Countdown = ({ t, mobile }) => {
	const [shown, setShown] = useState(false);

	const transitions = useTransition(shown, null, {
		from: { opacity: 0 },
		enter: { opacity: !mobile ? 1 : 0.8 },
		leave: { opacity: 0 },
		config: {
			duration: 400
		}
	});

	useEffect(() => {
        if (mobile) {
            setShown(true);
        } else {
            if (!localStorage.getItem('countdown_closed')) {
                setTimeout(() => {
                    setShown(true);
                }, 2000);
            }
        }
    }, []);
    
    const handleClose = () => {
        if (!localStorage.getItem('countdown_closed')) {
            localStorage.setItem('countdown_closed', true);
        }

        setShown(false);
    };

	return transitions.map(({ item, props }) => item && (
        <animated.div className={`${styles.countdown_box} ${mobile ? styles.mobile : ''}`} style={props}>
            {!mobile && (
                <ion-icon src="/images/cross-red.svg" alt="close" onClick={handleClose}/>
            )}
            <p>
                {Math.round((new Date('2020', '10', '13') - new Date()) / (1000 * 60 * 60 * 24))} {t('title')}
            </p>
            <p>{t('additional')}</p>
        </animated.div>
    ));
};

export default withTranslation('countdown')(Countdown);