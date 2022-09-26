import styles from '../styles/TopBarBody.module.css';
import Logo from '../public/images/logo.png';
import Image from 'next/future/image';
import { FiSearch } from 'react-icons/fi';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { BsCartCheck } from 'react-icons/bs';

const TopBarBody = () => {
    return (
        <div className={styles.topBarBody}>
            <Image
                src={Logo}
                alt="Picture of the logo"
                width={135}
                height={46}
            />

            <div className={`input-group ${styles.searchInputWrapper}`}>
                <input type="text" className="form-control ps-5" placeholder="What do you want to order?" aria-label="What do you want to order?" aria-describedby="button-addon2" />
                <button className={`btn ${styles.btnSearch}`} >Search</button>
                <FiSearch className={styles.searchIcon} />
            </div>

            <div className={styles.accountWrapper}>
                <div className={styles.account}>
                    <FaRegUser className={styles.iconWhite} />
                    <div className='d-flex flex-column align-items-center'>
                        <h5>Sign in</h5>
                        <h4>Account</h4>
                    </div>
                </div>

                <div className="position-relative me-5">
                    <FaRegHeart className={styles.iconWhite} />
                    <span className={styles.pill} >
                        1
                    </span>
                </div>

                <div className="position-relative">
                    <BsCartCheck className={styles.iconWhite} />
                    <span className={styles.pill} >
                        7
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopBarBody;