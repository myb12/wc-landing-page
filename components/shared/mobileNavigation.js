import Image from 'next/future/image';
import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../../styles/MobileNavigation.module.css';
import logo from '../../public/images/logo.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { setBurgerVisibility } from '../../redux/burgerMenu/burgerMenu';

const MobileNavigation = () => {
    const { isVisible } = useSelector(state => state.burgerMenuVisible);
    const dispatch = useDispatch();


    return (
        <div className={styles.mobileHeader}>
            <Image
                src={logo}
                alt="Picture of the logo"
                width={100}
            />
            <HiOutlineMenuAlt3 className={styles.burgerIcon} onClick={() => dispatch(setBurgerVisibility())} />

            <div className={isVisible ? `${styles.burgerMenu} ${styles.burgerMenuVisible}` : styles.burgerMenu
            }>
                <MdOutlineClose className={styles.iconClose} onClick={() => dispatch(setBurgerVisibility())} />
                <a href="#/">
                    About Us
                </a>
                <a href="#/">
                    My Account
                </a>
                <a href="#/">
                    Featured Products
                </a>
                <a href="#/">
                    Contact
                </a>
                <a href="#/">
                    Order Tracking
                </a>
                <a href="#">
                    <select >
                        <option value="English" >English</option>
                        <option value="Bengali">Bengali</option>
                    </select>
                </a>

                <a className='pe-0' href="#">
                    <select >
                        <option value="USD" >USD</option>
                        <option value="BDT">BDT</option>
                    </select>
                </a>
                <a href="#">More..</a>


            </div>
        </div>
    );
};

export default MobileNavigation;