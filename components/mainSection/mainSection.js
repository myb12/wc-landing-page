import styles from '../../styles/MainSection.module.css';
import CategoryMenu from '../shared/categoryMenu';

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
                        HEllo
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;