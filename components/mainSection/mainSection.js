import styles from '../../styles/MainSection.module.css';
import CategoryMenu from '../shared/categoryMenu';
import CustomSlider from '../customlider/customSlider';
import PopularProduct from '../popularProduct/popularProduct';

const MainSection = ({ categoryMenuVisible }) => {
    return (
        <div className={styles.mainSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {
                            categoryMenuVisible && <CategoryMenu />
                        }

                    </div>
                    <div className="col-md-9">
                        <CustomSlider />
                    </div>
                </div>

                <PopularProduct />
            </div>
        </div>
    );
};

export default MainSection;