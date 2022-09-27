import styles from '../../styles/MainSection.module.css';
import CategoryMenu from '../shared/categoryMenu';
import CustomSlider from '../customlider/customSlider';
import PopularProduct from '../popularProduct/popularProduct';
import Link from 'next/link'

const MainSection = ({ categoryMenuVisible, version }) => {
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
                        {
                            version === 2 ? 'HELLO WORLD' : <CustomSlider />
                        }

                    </div>
                </div>

                <PopularProduct />

                <Link href={version === 2 ? '/' : "/version-two"}>
                    <a className={styles.link}>
                        {version === 2 ? "See version one" : 'See version two'}
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default MainSection;