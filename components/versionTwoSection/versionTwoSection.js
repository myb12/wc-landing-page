import Image from 'next/future/image';
import React from 'react';
import banner1 from '../../public/images/v2-banner1.png';
import banner2 from '../../public/images/v2-banner2.png';
import banner3 from '../../public/images/v2-banner3.png';
import CustomSlider from '../customlider/customSlider';
import styles from '../../styles/VersionTwoSection.module.css';

const VersionTwoSection = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <CustomSlider image={banner1} version2 />
            </div>
            <div className="col-md-4">
                <div className="row g-4">
                    <div className="col-12">
                        <div className='position-relative'>
                            <Image
                                src={banner2}
                                alt="Picture of the banner"
                                className='rounded-1'
                            />
                            <div className={styles.smallImageBody}>
                                <p>Maecenas non erat</p>
                                <h5>Cell Phones</h5>
                                <small>Weekend Discount</small>
                                <h4>$479.00 <span>589.00</span></h4 >
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='position-relative'>
                            <Image
                                src={banner3}
                                alt="Picture of the banner"
                                className='rounded-1'
                            />
                            <div className={styles.smallImageBody}>
                                <p>Maecenas non erat</p>
                                <h5>Prepaid Phones</h5>
                                <small>Weekend Discount</small>
                                <h4>$389.00 <span>689.00</span></h4 >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VersionTwoSection;