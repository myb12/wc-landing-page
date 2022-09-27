import styles from '../../styles/MainSection.module.css';
import CategoryMenu from '../shared/categoryMenu';
import CustomSlider from '../customlider/customSlider';
import PopularProduct from '../popularProduct/popularProduct';
import Link from 'next/link';
import banner1 from '../../public/images/banner-1.png';
import VersionTwoSection from '../versionTwoSection/versionTwoSection';
import MobileNavigation from '../shared/mobileNavigation';

const MainSection = ({ categoryMenuVisible, version }) => {
    return (
        <>
            <MobileNavigation />
            <div className={styles.mainSection}>
                <div className="container">
                    <div className="row">
                        <div className="d-none d-lg-block col-lg-3">
                            {
                                categoryMenuVisible && <CategoryMenu />
                            }

                        </div>
                        <div className="col-12 col-lg-9">
                            {
                                version === 2
                                    ?
                                    <VersionTwoSection />
                                    :
                                    <CustomSlider image={banner1} />
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
        </>
    );
};

export default MainSection;