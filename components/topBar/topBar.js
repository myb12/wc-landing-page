import styles from '../../styles/TopBar.module.css';
import BottomNavigation from './bottomNavigation';
import Navigation from './navigation';
import TopBarBody from './topBarBody';
import TopBarCategory from './topBarCategory';

const TopBar = () => {
    return (
        <div className={styles.topBarWraper}>
            <div className="container d-flex flex-column justify-content-between h-100">
                <div>
                    <Navigation />
                    <TopBarBody />
                </div>
                <div className="d-flex align-items-center">
                    <TopBarCategory/>
                    <BottomNavigation />
                </div>
            </div>
        </div>
    );
};

export default TopBar;