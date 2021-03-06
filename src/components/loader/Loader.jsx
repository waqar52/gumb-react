import styles from './Loader.module.scss';

const Loader = ({ size = 'l' }) => (
    <div className={`${styles.loader} ${styles[size]}`}>
        <div>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="882.353" height="882.353">
                <defs>
                    <linearGradient xlinkHref="#a" id="e" x1="3" y1="955.362" x2="97" y2="955.362" gradientUnits="userSpaceOnUse"/>
                    <linearGradient xlinkHref="#a" id="d" x1="3" y1="955.362" x2="97" y2="955.362" gradientUnits="userSpaceOnUse"/>
                    <linearGradient xlinkHref="#a" id="c" x1="3" y1="3" x2="97" y2="3" gradientUnits="userSpaceOnUse"/>
                    <linearGradient xlinkHref="#b" id="f" gradientTransform="scale(1.90648 .52453)" x1=".734" y1="21.963" x2="55.946" y2="21.963" gradientUnits="userSpaceOnUse"/>
                </defs>
                <g transform="matrix(8.82353 0 0 8.82353 -176.47 -176.47)">
                    <defs>
                        <linearGradient id="a">
                            <stop stopColor="#147d6c" offset="0"/>
                            <stop stopColor="#1effff" offset="1"/>
                        </linearGradient>
                        <linearGradient id="b">
                            <stop stopColor="#147d6c" offset="0"/>
                            <stop stopColor="#1effff" offset="1"/>
                        </linearGradient>
                    </defs>
                    <path
                        d="M50 955.362c-25.934 0-47 21.067-47 47 0 25.934 21.066 47 47 47s47-21.066 47-47a46.78 46.78 0 00-7.594-25.625A9.96 9.96 0 0091 971.362c0-5.499-4.5-10-10-10-1.974 0-3.82.596-5.375 1.594A46.893 46.893 0 0050 955.362zm0 4c8.342 0 16.101 2.365 22.688 6.469A9.88 9.88 0 0071 971.362c0 5.5 4.5 10 10 10a9.932 9.932 0 005.531-1.656A42.758 42.758 0 0193 1002.362c0 23.772-19.228 43-43 43s-43-19.228-43-43 19.228-43 43-43zm0 15c-15.44 0-28 12.56-28 28 0 4.874 1.27 9.446 3.469 13.438-.92 1.302-1.469 2.86-1.469 4.562 0 4.395 3.605 8 8 8a7.957 7.957 0 004.563-1.437A27.87 27.87 0 0050 1030.362c15.44 0 28-12.56 28-28s-12.56-28-28-28zm0 4c13.278 0 24 10.722 24 24 0 13.279-10.722 24-24 24-3.901 0-7.538-.946-10.781-2.594a7.95 7.95 0 00.781-3.406c0-4.394-3.605-8-8-8-1.231 0-2.392.309-3.438.813-1.645-3.248-2.562-6.905-2.562-10.813 0-13.278 10.722-24 24-24zm0 13c-6.051 0-11 4.949-11 11 0 6.052 4.949 11 11 11s11-4.948 11-11c0-6.051-4.949-11-11-11zm0 4c3.89 0 7 3.11 7 7s-3.11 7-7 7-7-3.11-7-7 3.11-7 7-7z" 
                        fill="url(#e)" 
                        overflow="visible" 
                        transform="matrix(1.06383 0 0 1.06383 16.809 -996.343)"
                    />
                </g>
            </svg>
        </div>
    </div>
);

export default Loader;