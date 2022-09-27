import React from 'react';
import styles from '../../styles/PopularProductCard.module.css';
import profile1 from '../../public/images/profile1.png'
import Image from 'next/future/image';

const PopularProductCard = () => {
    return (
        <div className={styles.popularProductCard}>
            <div className='d-flex align-items-center'>
                <Image
                    src={profile1}
                    alt="Picture of the logo"
                />
                <p>Electronics Appliances</p>
            </div>
        </div>
    );
};

export default PopularProductCard;