import React from 'react';
import styles from '../../styles/PopularProductCard.module.css';
import Image from 'next/future/image';

const PopularProductCard = ({ product }) => {
    const { title, icon } = product;
    return (
        <div className={styles.popularProductCard}>
            <div className='d-flex align-items-center'>
                <Image
                    src={icon}
                    alt="Picture of the logo"
                />
                <p>{title}</p>
            </div>
        </div>
    );
};

export default PopularProductCard;