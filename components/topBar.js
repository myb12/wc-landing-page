import styles from '../styles/TopBar.module.css'; ''

const TopBar = () => {
    return (
        <div className={styles.topBarWraper}>
            <div className="container">

                <div className="d-flex align-items-center justify-content-between pt-3">

                    <ul className={`d-flex align-items-center ${styles.navItemWrapperLeft}`}>
                        <li className={styles.navItem}>
                            <a href="#">About Us</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#">My Account </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#">Featured Products</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#">Contact</a>
                        </li>   
                    </ul>

                    <ul className={`d-flex align-items-center ${styles.navItemWrapperRight}`}>
                        <li className={styles.navItem}>
                            <a href="#">Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#">Link</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default TopBar;