import React from 'react';
import styles from '../../styles/ButtonShop.module.css';

const ButtonShop = ({ children }) => {
    return (
        <button className={styles.buttonShop}>
            {children}
        </button>
    );
};

export default ButtonShop;