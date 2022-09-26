import styles from '../styles/TopBar.module.css';
import Navigation from './navigation';
import TopBarBody from './topBarBody';
import TopBarCategory from './topBarCategory';

const TopBar = () => {
    return (
        <div className={styles.topBarWraper}>
            <div className="container d-flex flex-column justify-content-between">
                <div>
                    <Navigation />
                    <TopBarBody />
                </div>
                <TopBarCategory />
            </div>
        </div>
    );
};

export default TopBar;