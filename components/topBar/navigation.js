import styles from '../../styles/Navigation.module.css';

const Navigation = () => {
    return (
        <div className="d-flex align-items-center justify-content-between pt-3">

            <ul className={`d-flex align-items-center ps-0 ${styles.navItemWrapperLeft}`}>
                <li className={styles.navItem}>
                    <a className='ps-0' href="#">About Us</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#">My Account</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#">Featured Products</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.lastItem} href="#">Contact</a>
                </li>
            </ul>

            <ul className={`d-flex align-items-center ps-0 ${styles.navItemWrapperRight}`}>
                <li className={styles.navItem}>
                    <a href="#">Order Tracking</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#">
                        <select >
                            <option value="English" >English</option>
                            <option value="Bengali">Bengali</option>
                        </select>
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a className='pe-0' href="#">
                        <select >
                            <option value="USD" >USD</option>
                            <option value="BDT">BDT</option>
                        </select>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;