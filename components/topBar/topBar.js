import { useDispatch } from 'react-redux';
import { setCategoryVisibility } from '../../redux/category/category';
import styles from '../../styles/TopBar.module.css';
import ButtonCategory from '../shared/buttonCategory';
import BottomNavigation from './bottomNavigation';
import Navigation from './navigation';
import TopBarBody from './topBarBody';

const TopBar = () => {
    const dispatch = useDispatch();

    return (
        <div className={`d-none d-lg-block ${styles.topBarWraper}`} onClick={() => dispatch(setCategoryVisibility())}>
            <div className="container d-flex flex-column justify-content-between h-100">
                <div>
                    <Navigation />
                    <TopBarBody />
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <ButtonCategory />
                    </div>
                    <div className="col-lg-9">
                        <BottomNavigation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;