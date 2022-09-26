import styles from '../../styles/TopBar.module.css';
import ButtonCategory from '../shared/buttonCategory';
import BottomNavigation from './bottomNavigation';
import Navigation from './navigation';
import TopBarBody from './topBarBody';

const TopBar = () => {
    return (
        <div className={styles.topBarWraper}>
            <div className="container d-flex flex-column justify-content-between h-100">
                <div>
                    <Navigation />
                    <TopBarBody />
                </div>
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <ButtonCategory />
                    </div>
                    <div className="col-md-9">
                        <BottomNavigation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;